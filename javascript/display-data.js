//TODO: write the display functions to render the page
(function(module){
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

Data.populateBlogPage = function(){
  $.get('data/data.json',function(data,text,xhr){
    var value = [];
    responseETag = xhr.getResponseHeader('Etag');
    if(localStorage.getItem('eTag')===null||responseETag!=localStorage.getItem('eTag')){
      localStorage.setItem('eTag',responseETag);
      localStorage.setItem('blogArticles',JSON.stringify(data));
      value = data;
    }
    else{
      //do nothing
    }
  });
  value = JSON.parse(localStorage.getItem('blogArticles'));
  var blogCollection = value.map(function(elem){
    var templateScript = $('#template').html();
    var template = Handlebars.compile(templateScript);
    $('#blog-display').append(template(elem));
    return elem;
  });
  var categoryCollection = blogCollection.map(function(elem){
    return elem.category;
  }).reduce(function(currentElem,nextElem){
    if(currentElem.indexOf(nextElem)==-1){
      currentElem.push(nextElem);
      populateCategoryDropdown(nextElem);
    }
    return currentElem;
  },[]);
  enableTeaserLinks();
  showTeaserArticle();
}
module.Data = Data
})(window)







