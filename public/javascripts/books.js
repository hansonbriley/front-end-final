// https://hidden-plateau-59052.herokuapp.com/api/books

function PostBook()
{
    console.log("Step 1");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let isbn = document.getElementById('bookISBN').value;
    let price = document.getElementById('bookPrice').value;

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://hidden-plateau-59052.herokuapp.com/api/books/', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(JSON.stringify({
        name: name,
        author: author,
        isbn: isbn,
        price: price,
    }));
    console.log("Data Sent");
}

function GetBook(){
    console.log("Step 1");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ReceivedCallback() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = CreateTable(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "https://hidden-plateau-59052.herokuapp.com/api/books", true);
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
            '	<td>' + books["name"] + '</td> \n' +
            '	<td>' + books["author"] + '</td> \n' +
            '	<td>' + books["isbn"] + '</td> \n' +
            '	<td>' + books["price"] + '</td> \n' +
            '</tr> \n';

    }
    retVal +=
        '</tbody> \n' +
        '</table> \n' +
        '</div> \n ' ;
    return retVal;
}