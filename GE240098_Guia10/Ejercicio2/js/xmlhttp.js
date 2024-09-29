let xmlHttp = false;

xmlHttp = new XMLHttpRequest();

function makerequest(id) {
  const URL = 'https://66f97744afc569e13a98dd50.mockapi.io/api/example/cities/' + id;

  xmlHttp.open('GET', URL, true);
  xmlHttp.onreadystatechange = function () {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
      const cityJson = JSON.parse(xmlHttp.responseText);
      document.getElementById('cityImage').src = cityJson.image;
      document.getElementById('cityDescription').innerHTML = cityJson.description;
    }
  }
  xmlHttp.send();
}