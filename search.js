function mover(k){location.href = k;}

arr = ['뇌', "위"]
function searchJS() {
  let searchValue = document.getElementById('finder').value.trim();
  if (arr.includes(searchValue)){
      location.href = "file:///C:/Users/chaeh/Desktop/2r/" + searchValue + ".html";
  } else {
      alert('검색어(' + searchValue + ')가 존재하지 않습니다.');
  }
}
;
function show_name(e){
  if(e.key == "Enter"){
      searchJS();
  }
}

