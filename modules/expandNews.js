var ExpandNews = (function(){
  var openArticle = function(index) {
    var articleDetail = document.getElementById('article-detail'+index+'');
    var articleHeading = document.getElementById('article-heading'+index+'');
    if(articleHeading.checked){
      articleDetail.style.display = 'block';
    }else {
      articleDetail.style.display = 'none';
    }
  }

  return {
    openArticle : openArticle
  };
})();
