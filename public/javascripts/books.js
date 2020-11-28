// https://hidden-plateau-59052.herokuapp.com/api/books

function PostBook()
{
    
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let isbn = document.getElementById('bookISBN').value;
    let price = document.getElementById('bookPrice').value;
    let params = 'name=' + name + '&author=' + author + '&isbn=' + isbn + '&price=' + price;

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://hidden-plateau-59052.herokuapp.com/api/books', true);

//Send the proper header information along with the request
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            alert(xhttp.responseText);
        }
    }

    xhttp.send(params);
}