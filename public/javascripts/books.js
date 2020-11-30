// https://hidden-plateau-59052.herokuapp.com/api/books

function PostBook()
{
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let price = document.getElementById('price').value;
    let data = "name=" + name + "&author=" + author + "&isbn=" + isbn + "&price=" + price;

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = "Book Successfully Added";
        } else if (this.status === 500) {
            document.getElementById("output").innerHTML = "Form Data Missing";
        } else if (this.status === 600) {
            document.getElementById("output").innerHTML = "Incorrect ISBN Format";
        }
    };
    xhttp.open("POST", "https://hidden-plateau-59052.herokuapp.com/api/books/", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(data);
}

function FindToRemove()
{
    let isbn = document.getElementById("isbn").value;
    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = CreateTableISBN(JSON.parse(this.responseText)) + '<button type="button" class="btn btn-primary" onclick="RemoveBook()">Delete</button><span class="validity"></span>';
        } else if (this.status === 404) {
            document.getElementById("output").innerHTML = "Book not found";
        }
    };
    xhttp.open("GET", "https://hidden-plateau-59052.herokuapp.com/api/books/" + isbn, true);
    xhttp.send();
}

function RemoveBook()
{
    let isbn = document.getElementById("isbn").value;
    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = "Book successfully removed"
        } else if (this.status === 404) {
            document.getElementById("output").innerHTML = "Book not found";
        }
    };
    xhttp.open("DELETE", "https://hidden-plateau-59052.herokuapp.com/api/books/" + isbn, true);
    xhttp.send();
}

function UpdateBook()
{
    let oldIsbn = document.getElementById("isbn").value;
    let newIsbn = "isbn=" + document.getElementById("newIsbn").value;

    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = CreateTableISBN(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            document.getElementById("output").innerHTML = "Book not found";
        }
    };
    xhttp.open("PATCH", "https://hidden-plateau-59052.herokuapp.com/api/books/" + oldIsbn + "?" + newIsbn);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(newIsbn);
}

function GetBook()
{
    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "https://hidden-plateau-59052.herokuapp.com/api/books/", true);
    xhttp.send();
}

function GetBookISBN()
{
    let isbn = document.getElementById("isbn").value;
    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = CreateTableISBN(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            document.getElementById("output").innerHTML = "Book not found";
        }
    };
    xhttp.open("GET", "https://hidden-plateau-59052.herokuapp.com/api/books/" + isbn, true);
    xhttp.send();
}

function GetBookAuthor()
{
    let author = document.getElementById("author").value;
    let xhttp = new XMLHttpRequest();
    xhttp.withCredentials = false;
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            document.getElementById("output").innerHTML = "Book not found";
        }
    };
    xhttp.open("GET", "https://hidden-plateau-59052.herokuapp.com/api/books?author=" + author, true);
    xhttp.send();
}

function CreateTable(books)
{
    let retVal = '';
    retVal =
        '<div class="jumbotron"> \n' +
        '<table class="table table-bordered table-hover"> \n' +
        '	<thead> \n' +
        '		<tr> \n' +
        '			<th scope="col">Title</th> \n' +
        '			<th scope="col">Author</th> \n' +
        '			<th scope="col">ISBN</th> \n' +
        '			<th scope="col">Price</th> \n' +
        '		</tr> \n' +
        '	</thead> \n' +
        '	<tbody> \n';

    for (let book in books){
        retVal +=
            '<tr> \n' +
            '	<td>' + books[book]["name"] + '</td> \n' +
            '	<td>' + books[book]["author"] + '</td> \n' +
            '	<td>' + books[book]["isbn"] + '</td> \n' +
            '	<td>' + books[book]["price"]+ '</td> \n' +
            '</tr> \n';

    }
    retVal +=
        '</tbody> \n' +
        '</table> \n' +
        '</div> \n ' ;
    return retVal;
}

function CreateTableISBN(book)
{
    let retVal = '';
    retVal =
        '<div class="jumbotron"> \n' +
        '<table class="table table-bordered table-hover"> \n' +
        '	<thead> \n' +
        '		<tr> \n' +
        '			<th scope="col">Title</th> \n' +
        '			<th scope="col">Author</th> \n' +
        '			<th scope="col">ISBN</th> \n' +
        '			<th scope="col">Price</th> \n' +
        '		</tr> \n' +
        '	</thead> \n' +
        '	<tbody> \n';

    retVal +=
        '<tr> \n' +
        '	<td>' + book["name"] + '</td> \n' +
        '	<td>' + book["author"] + '</td> \n' +
        '	<td>' + book["isbn"] + '</td> \n' +
        '	<td>' + book["price"]+ '</td> \n' +
        '</tr> \n';

    retVal +=
        '</tbody> \n' +
        '</table> \n' +
        '</div> \n ' ;
    return retVal;
}