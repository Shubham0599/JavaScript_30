//selector
const locBtn=document.querySelector('.loc-btn');
//const locBtncon=document.querySelector('.con');

const locArea=document.querySelector('.loc-area');
//const locArea=document.querySelector('.loc-area');

//event listener
locBtn.addEventListener('click',loc);
locBtncon.addEventListener('click',loccon);

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
}
function error(){
console.log('Geolocation error');
}
