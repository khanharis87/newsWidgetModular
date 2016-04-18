var SearchFilter = (function(){
  var filterByContentTitle = function () {
    var searchNode = document.getElementById('searchFilter')
        searchText = searchNode.value,
        titles = document.getElementsByClassName('title'),
        contents = document.getElementsByClassName('content')
        regexp = new RegExp(searchText,'i');
    for (var i = 0, ii = titles.length; i < ii; i++) {
       var title = titles[i];
       var content = contents[i];
       (title.textContent.search(regexp) < 0 && content.textContent.search(regexp) < 0 ) ?
         title.parentNode.style.display = 'none':
         title.parentNode.style.display = 'block';
     }
  }

  return {
    filterByContentTitle:filterByContentTitle
  };
})();
