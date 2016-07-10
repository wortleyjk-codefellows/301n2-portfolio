

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
    $(this).parent().find('p').slideDown(500);
    $(this).prev().prev().parent().animate({'width':'90%','height':'inherit'});
    //$(this).css({'height':'inherit'});
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

//deprecated by using Routes.js
// $('a').on('click',function(e){
//   $('section').hide();
//   if($(this).hasClass('ion-ios-book-outline')){ //show guestbook
//     e.preventDefault();
//     $('#guest-book').slideDown(500)
//   }
//   else if($(this).hasClass('ion-ios-person')){//show about
//     e.preventDefault();
//     $('#about-me').slideDown(500)
//   }
//   else if($(this).hasClass('ion-document-text')){ //show blog
//     e.preventDefault();
//     $('#blog-display').slideDown(500);
//   }
//   else if($(this).hasClass('ion-home')){ //show home
//     e.preventDefault();
//     $('#home-wrapper').slideDown(400);
//   }
// });

var showHome = function(){
  $('section').hide();
  $('#home-wrapper').slideDown(400);
}
var showAbout = function(){
  $('section').hide();
  $('#about-me').slideDown(500)
  ghData.getData();
}
var showBlog = function(){
  $('section').hide();
  $('#blog-display').slideDown(500);
}
var showGuestBook = function(){
  $('section').hide();
  $('#guest-book').slideDown(500)
}


//category filter change
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

//Mobile menu collapse
$('.mobile-icon').on('click',function(e){
    e.preventDefault();
    $('.navigation-wrapper').toggle(500);
  });

