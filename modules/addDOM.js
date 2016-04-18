var DOM = (function(ExpandNews){
    var addDOM=  function(data) {
        var articleList = '<ul>';
        data.forEach(function(article,index){
          var relatedStories = article.relatedStories;
          articleList += '<li class="article" onclick= "ExpandNews.openArticle('+index+')">';
          articleList += '<input type="checkbox" name="article-heading"  id="article-heading'+index+'"><label class="title" for="article-heading'+index+'">'+ article.titleNoFormatting +'</label>';
          articleList += '<div id="article-detail'+index+'" class="article-detail" style="display:none">';
          articleList += '<img src="'+article.image.url+'" alt="'+ article.titleNoFormatting +'" style="height:'+article.image.tbHeight+';width:'+article.image.tbWidth+';" />';
          articleList += '<p class="content">'+ article.content+'</p>';
          articleList += '<a href="'+article.unescapedUrl+'" class="read-more"> Read more.. </a>';
          if(relatedStories){
            relatedStories.forEach(function(articleRelatedStories){
              articleList += '<ul id="related-stories">';
              articleList += '<li><a href="'+articleRelatedStories.unescapedUrl+'">'+articleRelatedStories.titleNoFormatting+'</a></li>';
              articleList += '</ul>';
            });
          };
          articleList += '</div>';
          articleList += '</li>';
        })
        articleList += '</ul>';

        document.getElementById('article-list').innerHTML = articleList;
    }
    return {
      addDOM : addDOM
    };
})(ExpandNews);
