
//changed to filter by routes on Page.js()
var filterCategoryChange = function(ctx){
  $('#category-filter').on('change',function(e){
    ctx.categoryValue = $(this).val();
    page('/view/:categoryValue', displayArticle)
  //var categoryValue = $(this).val();
  //   var $Article = $('#blog-display > article');
  //   $Article.slideUp(400);
  //   if(categoryValue == ''){
  //     $Article.slideDown(400);
  //     $('#category-filter > option:eq(0)').text('--Select a Category--');
  //   }
  //   else{
  //     $("article[data-category='"+categoryValue+"'").slideDown(400);
  //     $('#category-filter > option:eq(0)').text('--Show All--');
  //   }
  // });
}

var displayArticle = function(ctx){
  console.log(ctx);
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

