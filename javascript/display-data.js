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

var createArticle = function(element){
  var $Article = jQuery('<article/>',{
    'data-category':element.category,
  });
  var $URLHeader = jQuery('<h1/>').css('margin','0px');
  var $URL = jQuery('<a/>',{
    text:element.article,
    href:element.articleURL
  })
  .css({'text-decoration':'none',
    'color':'white'
  });
  var $Time = jQuery('<time/>',{
    text:'Blog Written: '+element.blogDate
  }).css('color','white');
  var $ReviewContent = jQuery('<section/>',{
    html:element.review
  });
  var $TeaserLink = jQuery('<a/>',{
    text:"Read More...",
    href:"#"
  }).css({'text-decoration':'none',
    'color':'white'
  }).addClass('read-more');
  var $HorizontalRule = jQuery('<hr/>').css('color','red');
  $ReviewContent.find('p').css({'margin':'0px','color':'white','text-align':'justify'});
  $URLHeader.append($URL);
  $Article.append($URLHeader);
  $Article.append($Time);
  $Article.append($ReviewContent);
  var numberOfParagraphs = $ReviewContent.find('p').length;
  console.log(numberOfParagraphs);
  if(numberOfParagraphs > 1){
    $ReviewContent.find('p:nth-child(2n)').hide();
    $Article.append($TeaserLink);
  }
  $Article.append($HorizontalRule);
  $('#content-display').append($Article);
}

var populateCategoryDropdown = function(element){
  var $categoryOption = jQuery('<option/>',{
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
    $Article.hide();
    $("article[data-category='"+categoryValue+"'").slideDown(500);
    $('#category-filter > option:eq(0)').text('--Show All--');
  })
  $('a.read-more').on('click',function(e){
    e.preventDefault();
    $(this).prev().find('p').slideDown(500);
    $(this).hide();
  });
  $('.mobile-icon').on('click',function(e){
    e.preventDefault();
    $('.navigation-wrapper').slideDown(500);
  });
}

var populatePageData = function(){
    searchResult.forEach(function(elem){//push all the data into the collection array
    blogCollection.push(new Data(elem))
  });

  blogCollection.forEach(function(elem){
    createArticle(elem);
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

$(document).ready(function(){
  populatePageData();
  eventListeners();
  $('a.ion-document-text').click();
});




