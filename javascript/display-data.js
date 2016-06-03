//TODO: write the display functions to render the page
var collection = [];

var data = function(param){
  this.library = param.library;
  this.libraryURL = param.libraryURL;
  this.category = param.category;
  this.dateTested = param.dateTested;
  this.review = param.review;
}

data.prototype.display = function(){
  $('#library-name').append(this.library);
  $('#library-url').attr('href',this.libraryURL);
  $('#library-url').append(this.libraryURL);
  $('#content-review-template').append('<hr>');
}

$(document).ready(function(){
  searchResult.forEach(function(elem){//push all the data into the collection array
    collection.push(new data(elem));
  });
  collection.forEach(function(elem){
    $('#content-review-template').append(elem.display());
  });
});
