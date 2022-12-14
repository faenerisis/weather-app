window.addEventListener('load', ()=> {
    let long; //longitude
    let lat; //latitude
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimzezone = document.querySelector('.location-timezone');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=current&appid={api_key}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription = summary;
            })
        });
    }
});
