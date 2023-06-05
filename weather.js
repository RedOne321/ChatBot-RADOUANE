const container = document.querySelector('.container');
const search = document.querySelector('.search'); 
const wbox = document.querySelector('.weatherbox');
const wdetails = document.querySelector('.w-details');
const error404 = document.querySelector('.notfound');

search.addEventListener('click', () => {

  const APIKey = 'f2932e076310352432ffc3c7b13606b9';
    const city = document.querySelector('.search input').value;

   if ( city === '' )
   return;

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
   .then(response => response.json())
   .then(json =>{

   if ( json.cod === '404' ){
        container.style.height ='400px';
        wbox.style.display = 'none';
        wdetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
    }
    error404.style.display = 'none';
    error404.classList.remove('fadeIn');

    const img = document.querySelector('.weatherbox img');
    const temperature = document.querySelector('.weatherbox .temperature');
    const description = document.querySelector('.weatherbox .description');
    const humidity = document.querySelector('.w-details .humidity span');
    const windy = document.querySelector('.w-details .windy span');

    switch(json.weather[0].main){
   case 'Clear' :
     img.src ='4102328_hot_sun_weather_icon.png'; 
     break;

     case 'Rain' :
        img.src ='4102320_cloud_heavy rain_rain_weather_icon.png'; 
        break;

        case 'Snow' :
            img.src ='5853849_cloud_foercast_rain_rainy_spring_icon'; 
            break;

        case 'Clouds' :
            img.src ='4102315_cloud_weather_icon.png'; 
            break;
        
        case 'Haze' :
            img.src ='4102323_cloud_cold_snow_weather_icon.png'; 
            break;

        default:
            img.src='';
    }
   
    temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}% `;
    windy.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


   wbox.style.display='';
   wdetails.style.display='';
   wbox.classList.add('fadeIn');
   wdetails.classList.add('fadeIn');
   container.style.height='590px';




   });


} );

