page('/', showHome);
page('/about', showAbout);
page('/blog', showBlog,function(){
  page.redirect('/blog/all');
});
page('/guestbook', showGuestBook)
page('/blog/:category',clearCurrentBlog,getCurrentBlogFilter,viewFilteredBlogs)
page();
