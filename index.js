const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

serch .addEventlistner('click', ()  =>{
    c    const APIKey = 'ec5c20a1796f19df27d4d112d936dbba';
    const city = document.querySelector('.search-box input').Value;

    if(city == '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
            if(json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display ='none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-details .description');
            const humidity = document.querySelector('.weather-details .wind span');

            switch(json.weather[0].main){
                case 'Limpo':
                    image.src = 'images/clear.png';
                    break;

                case 'Chuva':
                    image.src = 'images/rain.png';
                    break;

                case 'Neve':
                    image.src = 'images/snow.png';
                    break;

                case 'Nublado':
                    image.src = 'images/cloud.png';
                    break;

                case 'Nevoa':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src= '';
            }

            temperature.innerHTML = '${parseInt(json.main.temp)}<span>C°</span>';
            description.innerHTML = '${json.weather[0].description}';
            humidity.innerHTML = '${json.main.humidity}%';
            window.innerHTML = '${parseInt(json.wind.speed)}Km/h';

            weatherBox.style.display ='';
            weatherDetails.display = '';
            weatherBox.classList.add = ('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px'
        });
});