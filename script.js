let input= document.querySelector('#inputtext');
    let submit= document.querySelector('#button');
    let head1= document.querySelector('#h2');
    let para1= document.querySelector('#p1');
    let para2= document.querySelector('#p2');
    let errormsg = document.querySelector('#errormsg');

    let refreshTimer;
      async function getWeatherData(city) {
        try {
            errormsg.textContent = ""; 
            clearInterval(refreshTimer);
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79d1b31fc4cf8264e505e8488d700d16&units=metric`);
        let data = await  response.json();
        head1.textContent = data.name;
        para1.textContent = data.main.temp;
        para2.textContent= data.weather[0].description;
         refreshTimer =  setInterval(()=>{
            getWeatherData(city);
        },900000)
        } catch (error) {
            head1.textContent="";
            para1.textContent="";
            para2.textContent="";
            errormsg.textContent="ERROR:Please enter valid input";
            
        }
    }
    submit.addEventListener('click', function(){
        let city = input.value;
        getWeatherData(city);
    })
