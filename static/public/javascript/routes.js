page('/', showHome);
page('/about', showAbout);
page('/blog', showBlog);
page('/guestbook', showGuestBook)
page('/home',function(){
  page.redirect('/');
})
page();
