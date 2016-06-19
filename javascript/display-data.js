//TODO: write the display functions to render the page
(function(module){
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

var populateBlogFilter = function(elem){
  var isInArray = $.inArray(elem.category,categoryCollection);
  if(isInArray == -1){
    categoryCollection.push(elem.category);
    populateCategoryDropdown(elem.category);
  }
  else{
    //do nothing
  }
}

Data.populatePage = function(){
  $.get('data/data.json',function(data){
    data.forEach(function(elem){
      blogCollection.push(elem);
      var templateScript = $('#template').html();
      var template = Handlebars.compile(templateScript);
      $('#blog-display').append(template(elem));
      populateBlogFilter(elem)
    })
  }).done(function(){
    enableTeaserLinks();
    showTeaserArticle();
  });
}
module.Data = Data
})(window)







