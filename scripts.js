const key = "2b6d2b41e4b717eeaca1e26f75937c71"
const keyfilm = "48877cb2"

function display_date (date){
    document.querySelector(".title-city").innerHTML = "Tempo em " + date.name
    document.querySelector(".temp").innerHTML = "Temperatura atual: " + Math.floor(date.main.temp) + "°C"
    document.querySelector(".temp-max").innerHTML = "Máxima: " + Math.floor(date.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML = "Mínima: " + Math.floor(date.main.temp_min) + "°C"
    document.querySelector(".text-prevision").innerHTML = date.weather[0].description
    document.querySelector(".damp").innerHTML = "Umidade relativa do ar: " + date.main.humidity + "%"
    document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png` 
}

async function buscar_city(city){
    const date = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    display_date(date)  
}

function btn_click() {
    const city = document.querySelector(".input-city").value
    buscar_city(city)
}


function display_date2 (datecep){
    document.querySelector(".title-city2").innerHTML = "Informações do CEP: " + datecep.cep
    document.querySelector(".title-rua").innerHTML = "Logradouro: " + datecep.logradouro
    document.querySelector(".title-bairro").innerHTML = "Bairro: " + datecep.bairro
    document.querySelector(".title-cidade").innerHTML = "Cidade: " + datecep.localidade
    document.querySelector(".title-estado").innerHTML = "Estado: " + datecep.uf
    document.querySelector(".title-ddd").innerHTML = "DDD: " + datecep.ddd
} 

async function buscar_cep(city2){
    const datecep = await fetch (`https://viacep.com.br/ws/${city2}/json/`)
    .then(response2 => response2.json())
    display_date2(datecep)
}

function btn_click2() {
    const city2 = document.querySelector(".input-city2").value
    buscar_cep(city2)    
}


function display_date3 (datefilm){
    document.querySelector(".title-film").innerHTML = "Título: " + datefilm.Title
    document.querySelector(".title-year").innerHTML = "Ano: " + datefilm.Year
    document.querySelector(".title-director").innerHTML = "Diretor: " + datefilm.Director
    document.querySelector(".title-duraction").innerHTML = "Duração: " + datefilm.Runtime
    document.querySelector(".title-genre").innerHTML = "Gênero: " + datefilm.Genre
    document.querySelector(".title-imdb").innerHTML = "IMDB: " + datefilm.Ratings[0].Value
    document.querySelector(".title-rotten").innerHTML = "Rotten Tomatoes: " + datefilm.Ratings[1].Value
    document.querySelector(".title-meta").innerHTML = "Metacritic: " + datefilm.Ratings[2].Value
    document.querySelector(".title-plot").innerHTML = "Trama: " + datefilm.Plot
    document.querySelector(".img-capa").src = datefilm.Poster
}


async function buscar_film(film){
    const datefilm = await fetch (`http://www.omdbapi.com/?t=${film}&apikey=${keyfilm}`)
    .then(response3 => response3.json())
    display_date3(datefilm)
}

function btn_click3() {
    const film = document.querySelector(".input-film").value
    buscar_film(film)    
}






