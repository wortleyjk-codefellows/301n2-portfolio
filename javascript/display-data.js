//TODO: write the display functions to render the page
var blogCollection = [];
var categoryCollection = [];
var Data = function(param){
  this.article = param.article;
  this.articleURL = param.articleURL;
  this.category = param.category;
  this.blogDate = param.blogDate;
  this.review = param.review;
}
var populateCategoryDropdown = function(element){
  var $categoryOption = $('<option/>',{
      text:element,
      value:element
    });
  $('#category-filter').append($categoryOption);
}

var populateBlogFilter = function(arr){
  arr.forEach(function(elem){
    var isInArray = $.inArray(arr.category,categoryCollection);
    if(isInArray == -1){//-1 means it is not in the array
      categoryCollection.push(elem.category);
    }
    else{
      //do nothing
    }
  });
}

var populatePageData = function(){
    searchResult.forEach(function(elem){//push all the data into the collection array
    blogCollection.push(new Data(elem))
  });

  blogCollection.forEach(function(elem){
    var templateScript = $('#template').html();
    var template = Handlebars.compile(templateScript);
    $('#blog-display').append(template(elem));
  });
  populateBlogFilter(blogCollection);
  categoryCollection.forEach(function(elem){
    populateCategoryDropdown(elem);
  });
}


$(document).ready(function(){
  populatePageData();
});




