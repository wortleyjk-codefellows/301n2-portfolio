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

var eventListeners = function(){
    $('a.ion-document-text').on('click',function(e){
    e.preventDefault();
    $('#about-me').hide()
    $('#content-display').slideDown(500);

  })
  $('a.ion-ios-person').on('click',function(e){
    e.preventDefault();
    $('#content-display').hide();
    $('#about-me').slideDown(500)
  });
  $('#category-filter').on('change',function(e){

    var categoryValue = $(this).val();
    if(categoryValue == ''){
      $('#content-display > article').show();
    }
    var $Article = $('#content-display > article')
    $Article.hide(400);
    //$("article[data-category='"+categoryValue+"'").slideDown(500);
    $("article[data-category='"+categoryValue+"'").show(400);
    $('#category-filter > option:eq(0)').text('--Show All--');
  })
  $('a.read-more').on('click',function(e){
    e.preventDefault();
    $(this).parent().parent().animate({'width':'90%'})
    .find('p').slideDown(500);
    $(this).parent().parent().css({'height':'inherit'});
    //$(this).parent().find('p').slideDown(500);
    $(this).hide();
  });
  $('.mobile-icon').on('click',function(e){
    e.preventDefault();
    $('.navigation-wrapper').toggle(500);
  });
}

var populatePageData = function(){
    searchResult.forEach(function(elem){//push all the data into the collection array
    blogCollection.push(new Data(elem))
  });

  blogCollection.forEach(function(elem){
    var templateScript = $('#template').html();
    var template = Handlebars.compile(templateScript);
    $('#content-display').append(template(elem));
  });
  populateBlogFilter();
  categoryCollection.forEach(function(elem){
    populateCategoryDropdown(elem);
  });
}
var populateBlogFilter = function(){
  searchResult.forEach(function(elem){
    var isInArray = $.inArray(elem.category,categoryCollection);
    if(isInArray == -1){//-1 means it is not in the array
      categoryCollection.push(elem.category);
    }
    else{
      //do nothing
    }
  });
}

var enableTeaserLinks = function(){
  $('.reviewContent').each(function(index,element){
    if($(this).find('p').length<2){
      $(this).find('.read-more').detach();
    }
    else{
      $(this).find('p').slice(1).hide();

    }
  });
}

$(document).ready(function(){
  populatePageData();
  enableTeaserLinks();
  eventListeners();
  $('a.ion-document-text').click();
});




