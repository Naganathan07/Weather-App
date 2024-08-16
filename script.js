
let inputBox = document.querySelector('.input-box');
let searchBtn = document.getElementById('searchBtn');
let weather_img = document.querySelector('.Weather-img');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.getElementById('humidity');
let wind_speed = document.getElementById('wind-speed');
let location_not_found = document.querySelector('.location-not-found');
let weather_body =document.querySelector('.weather-body')
 async function checkWeather(city){
        
        let api_key ="bd1961c63e91c76a5948488da20a0285";
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        
        const weather_data =  await fetch(`${url}`).then(response  => response.json());

        if(weather_data.cod ==='404'){
            location_not_found.style.display ="flex";
            weather_body.style.display ="none";
            console.log("error"); 
            return;
        }
        location_not_found.style.display="";
        weather_body.style.display ="flex";
        temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML =`${weather_data.weather[0].description}`;
        humidity.innerHTML=`${weather_data.main.humidity} %`;
        wind_speed.innerHTML =`${weather_data.wind.speed} km/H`;
        
        console.log(weather_data);

        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src="Assets/cloud.png";
                break;
            case 'Clear':
                weather_img.src ="Assets/clear.png";
                break;
            case 'Haze':
                weather_img.src ="Assets/rain.png";
                break;
            case 'Mist':
                weather_img.src ="Assets/mist.png";
                break;
            case 'Snow':
                weather_img.src ="Assets/snow.png";
                break;
        }
        
    }
    
    searchBtn.addEventListener('click',()=>{
            checkWeather(inputBox.value);
        
        });
        

        

        
        
    