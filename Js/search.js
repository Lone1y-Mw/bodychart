let search_dict = {'뇌': 'brain', "위" : 'stomach', "심장" : 'heart'}
function searchJS(){
  let searchValue = document.getElementById('finder').value.trim();
  var SiteName = document.getElementById('title')

  if (searchValue in search_dict){
    if (SiteName.textContent == 'Bodychart'){
      location.href = "html/" + search_dict[searchValue] + ".html";}
    else{location.href = search_dict[searchValue] + ".html"}}
  else{alert("검색어" + searchValue + "가 존재하지 않습니다.");}

}



;
function show_name(e){
  if(e.key == "Enter"){
      searchJS();
  } 
}

