var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.write(
      '<!DOCTYPE html> \n' +
      '<html lang="en"> \n' +
      '        <head> \n' +
      '               <meta charset="utf-8"> \n' +
      '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
      '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
      '               <meta name="description" content="Home Page"> \n' +
      '               <meta name="author" content="Briley Hanson"> \n' +
      ' \n' +
      '               <title>Books Homepage</title> \n' +
      '               <!-- Bootstrap core CSS --> \n' +
      '               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> \n' +
      '       </head> \n' +
      '        <body> \n'
  );
  res.write(
      '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
      ' <a class="navbar-brand" href="#">Book Operations</a>' +
      '  <div class="collapse navbar-collapse" id="navbarNav">\n' +
      '    <ul class="navbar-nav">\n' +
      '      <li class="nav-item active">\n' +
      '        <a class="nav-link" href="./site/add-book.html">Add</a>\n' +
      '      </li>\n' +
      '      <li class="nav-item">\n' +
      '        <a class="nav-link" href="./site/show-books.html">Display</a>\n' +
      '      </li>\n' +
      '      <li class="nav-item">\n' +
      '        <a class="nav-link" href="./site/find-book.html">Find</a>\n' +
      '      </li>\n' +
      '      <li class="nav-item">\n' +
      '        <a class="nav-link" href="./site/remove-book.html">Remove</a>\n' +
      '      </li>\n' +
      '      <li class="nav-item">\n' +
      '        <a class="nav-link" href="./site/update-book.html">Update</a>\n' +
      '      </li>\n' +
      '    </ul>\n' +
      '  </div>\n' +
      '</nav>'
  );
  res.write(
      '<h1 style="text-align: center; padding-top: 10%">This is the Homepage - It is Beautiful</h1>' +
      '</body> \n' +
      '</html> \n'
  );
  res.end();
});

module.exports = router;
