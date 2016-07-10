(function (module){
  var ghData = {}
  var display = function(data){
    data.forEach(function(elem){
      console.log(elem)
    })
  }
  ghData.getData = function(){
  $.getJSON('../authToken.json',function(data){
    getGithubData(data.ghToken,display);
    })
  }
  module.ghData = ghData
})(window);
