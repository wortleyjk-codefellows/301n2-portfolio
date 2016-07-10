var getGithubData = function(authToken,callback){
  $.ajax({
    url : 'https://api.github.com/user/repos',
    headers : {'Authorization' : 'token '+authToken},
    success : function(data){
      //console.log(data);
      callback(data);
    }
  })
}
