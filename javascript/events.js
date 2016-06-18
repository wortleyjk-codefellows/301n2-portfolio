var showHome = function(){
  $('a.ion-home').on('click',function(e){
    e.preventDefault();
    $('section').hide();
    $('#home-wrapper').slideDown(400);
  });
}

var showBlog = function(){
    $('a.ion-document-text').on('click',function(e){
    e.preventDefault();
    $('section').hide()
    $('#blog-display').slideDown(500);
  });
}
var showAboutMe = function(){
    $('a.ion-ios-person').on('click',function(e){
    e.preventDefault();
    $('section').hide();
    $('#about-me').slideDown(500)
  });
}

var filterCategoryChange = function(){
  $('#category-filter').on('change',function(e){
    var categoryValue = $(this).val();
    var $Article = $('#blog-display > article');
    $Article.slideUp(400);
    if(categoryValue == ''){
      $Article.slideDown(400);
      $('#category-filter > option:eq(0)').text('--Select a Category--');
    }
    else{
      $("article[data-category='"+categoryValue+"'").slideDown(400);
      $('#category-filter > option:eq(0)').text('--Show All--');
    }
  });
}

var showTeaserArticle = function(){
    $('a.read-more').on('click',function(e){
    e.preventDefault();
    $(this).parent().parent().animate({'width':'90%'})
    .find('p').slideDown(500);
    $(this).parent().parent().css({'height':'inherit'});
    $(this).hide();
  });
}

var displayMobileMenu = function(){
    $('.mobile-icon').on('click',function(e){
    e.preventDefault();
    $('.navigation-wrapper').toggle(500);
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

var pageEventListeners = function(){
  showHome();
  showBlog();
  showAboutMe();
  filterCategoryChange();
  displayMobileMenu();
  showTeaserArticle();
}

$(document).ready(function(){
  pageEventListeners();
  enableTeaserLinks();
  $('a.ion-document-text').click();
});
