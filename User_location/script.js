//selector
const locBtn=document.querySelector('.loc-btn');
const locArea=document.querySelector('.loc-area');
//event listener
locBtn.addEventListener('click',loc);

//function
function loc(){
    //navigator.geolocation can access the geolacation API
    if(!navigator.geolocation){
        console.log('Gelocation not supported');
    }
    else{
        //getCurrentPosition() quickly locate user
        console.log('Checking location');
        //getting location data
        //accepts 2 argument *success and*error which are function itself
        navigator.geolocation.getCurrentPosition(success,error);
    }
}

function success(position){
    var lat=position.coords.latitude.toFixed(3);
    var log=position.coords.longitude.toFixed(3)
    locArea.innerHTML='Latitude '+ lat+`<br></br>`+' Longitude '+log ;
    console.log('Longitude',position.coords.longitude);
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyC4Dfwkvf7QBYK06vQhsKB1xLiK6aXB4FI";

  document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}
function error(){
console.log('Geolocation error');
}

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }