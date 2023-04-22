const loadCountryAPI = () =>{

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) =>{
    console.log(country)

    return `
<div class="country-div">
    <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <img src="${country.flags.png}" class="card-img-top" alt="...">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital: ${country.capital}</li>
              <li class="list-group-item">Region: ${country.region}</li>
              <li class="list-group-item">LatIng: ${country.latlng}</li>
            </ul>
            <div class="card-body">
            <button class="btn btn-primary" onclick="clickWeather([${country.latlng[0]},${country.latlng[1]}],'${country.name.common}')">Click for Weather</button>
                    <p id="weather${country.name.common}"></p>
            </div>
          </div>
        </div>
     `

    
}

loadCountryAPI()


let clickWeather = (lan, name) =>{
    let [ lat, lon] = lan
    let rep = document.getElementById(`weather${name}`)
    rep.innerHTML="";

    // fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b636fe93d9a4ce7e2a1bae1893d72d41')
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b636fe93d9a4ce7e2a1bae1893d72d41`)
    .then((res) => res.json())
    .then((data) => {

        let weatherReport=`
        Countrty : ${data.name}
        latiture :  ${lat}   longiture :${lon}
        Weather  :  ${data.weather[0].description}
        Wind speed : ${data.wind.speed}
        temperature : ${data.main.temp} 
        `;
        
        alert(weatherReport);
        rep.innerHTML="";

    })
    
    }
    
    // const displayCountries = countries => {
    //     console.log(countries);
    //     const countriesHTML = countries.map(country => getCountry(country));
    //     const container = document.getElementById('countries');
    //     container.innerHTML = countriesHTML.join(' ');
    // }
    
    // const getCountry = (country) =>{
    //     console.log(country)
    
    //     return `
    // <div class="country-div">
    //     <div class="card" style="width: 18rem;">
    //             <div class="card-body">
    //               <h5 class="card-title">${country.name.common}</h5>
    //               <img src="${country.flags.png}" class="card-img-top" alt="...">
    //             </div>
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item">Capital: ${country.capital}</li>
    //               <li class="list-group-item">Region: ${country.region}</li>
    //               <li class="list-group-item">LatIng: ${country.latlng}</li>
    //             </ul>
    //             <div class="card-body">
    //               <a href="#" class="card-link">Click for Weather</a>
    //             </div>
    //           </div>
    //         </div>
    //      `
    
        
    // }
    
