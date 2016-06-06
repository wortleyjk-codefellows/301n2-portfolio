//TODO: write the display functions to render the page
var articles = [];

var Article = function(param){
  this.library = param.library;
  this.libraryURL = param.libraryURL;
  this.category = param.category;
  this.dateTested = param.dateTested;
  this.review = param.review;
}

Article.prototype.display = function(){
  var $template = $('article.template').clone();
  $template.attr('data-category',this.category).css('color','white');
  $template.find('h1').css('margin','0px');
  $template.find('h1>a').text(this.library).css({'text-decoration':'none','color':'white'});
  $template.find('h1>a').attr('href',this.libraryURL);
  $template.find('time').append(this.dateTested);
  $template.find('#review-content').html(this.review);
  $template.append('<hr>')
  $template.removeClass('template');
  return $template;
}

$(document).ready(function(){
  searchResult.forEach(function(elem){//push all the data into the collection array
    articles.push(new Article(elem))
  });

  articles.forEach(function(elem){
    $('#content-display').append(elem.display());
  });
});
