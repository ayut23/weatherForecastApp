let weather = {
    
    "apiKey" : "55ad32900b7ff9302ad654a16689204b",
    Fecthweather : function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q="
        +city+"&units=metric&appid="
        +this.apiKey)
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather : function(data){

        const {name} = data ;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        
        document.querySelector(".city").innerHTML = "Weather in "+ name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+icon+"@2x.png";  
        document.querySelector(".description").innerHTML = description ; 
        document.querySelector(".temp").innerHTML = temp +"°C";
        document.querySelector(".humidity").innerHTML = "Humidity " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed "+ speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search : function (){
        this.Fecthweather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(){
    if(event.key=="Enter"){
        weather.search();

    }

});

weather.Fecthweather("Yangon");

