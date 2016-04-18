(function(DOM){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json");
  xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
    //JSONparse response
      var responseParse = JSON.parse(this.responseText);
          articles = responseParse.results,
      //sort data by date publishedDate
          filterbyLatestDate = document.getElementById('filter-by-latestDate'),
          filterByOldestDate = document.getElementById('filter-by-oldestdate');
      filterByOldestDate.addEventListener("click", function() {
        articles.sort(function(a, b){
          return new Date(a.publishedDate) - new Date(b.publishedDate);
        })
        DOM.addDOM(articles);
      })
      filterbyLatestDate.addEventListener("click", function() {
        articles.sort(function(a, b){
          return new Date(b.publishedDate) - new Date(a.publishedDate);
        })
        DOM.addDOM(articles);
      })

      DOM.addDOM(articles);

    }
  };

  xhr.send();
})(DOM);
