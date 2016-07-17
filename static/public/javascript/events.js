$('#category-filter').on('change',function(e){
  var category = $(this).val();
  if(category == ''){
    page('/blog/all')
  }
  else{
    page('/blog/'+category);
  }
});

var clearCurrentBlog = function(ctx,next){
  $('#blog-display > article').slideUp(400);
  next();
}

var getCurrentBlogFilter = function(ctx,next){
  ctx.params.category = $('#category-filter').val();
  next();
}

var viewFilteredBlogs = function(ctx){
  var $Article = $('#blog-display > article');
    $Article.slideUp(400);
    if(ctx.params.category == 'all'){
      $Article.slideDown(400);
      $('#category-filter > option:eq(0)').text('--Select a Category--');
    }
    else{
      $("article[data-category='"+ctx.params.category+"'").slideDown(400);
      $('#category-filter > option:eq(0)').text('--Show All--');
    }
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
var showBlog = function(ctx,next){
  $('section').hide();
  $('#blog-display').slideDown(500);
  Data.populateBlogPage()
  next();
}
var showGuestBook = function(){
  $('section').hide();
  $('#guest-book').slideDown(500)
}

//Mobile menu collapse
$('.mobile-icon').on('click',function(e){
    e.preventDefault();
    $('.navigation-wrapper').toggle(500);
  });

