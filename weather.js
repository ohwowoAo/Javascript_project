const API_KEY = config.apikey;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const temp = document.querySelector(".weather .temp");
        const city = document.querySelector(".weather .city");
        city.innerText = data.name;
        temp.innerText = data.main.temp + '℃';

        const imgtag = document.createElement('img');
        imgtag.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector('.weather').append(imgtag);
    }); 
    
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);