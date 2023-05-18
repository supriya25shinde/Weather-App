const appId = "b5f9fc4c4d19c6880fc046780c9b50bf";

// const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
// .then(response => response.json()).then(data => {console.log(data)});
 
const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
.then(response => response.json());
 

const buttonCard = document.querySelector('.card-body a');
console.log(buttonCard);

buttonCard.addEventListener('click',refresh);

function refresh(){
    window.location.reload();
}

const btn1 = document.getElementById('btn1');
console.log(btn1);

btn1.addEventListener('click',myFunction);

function myFunction(){
    let myInput = document.querySelector(".coolinput .input").value;
    console.log(myInput);
    console.log(myInput);
    getDataForCity(myInput).then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;

        const description = data.weather[0]['description'];
        const country = data.sys.country;
        let title =document.getElementsByClassName('card-title');
        console.log(title);
         title[0].innerHTML=`<h3>${myInput} (${country})</h3>`;

         let cardText = document.getElementsByClassName("card-text")[0];
         cardText.innerHTML=`Temperature is: <strong>${temperature}</strong> deg-celcius. Describing: <strong>${description}</strong> and also the humidity is: <strong>${humidity}%</strong>`;
         console.log(cardText);
         console.log(temperature,humidity,description,country);
    });
    let a = document.querySelector(".card.makeDisappear");
    console.log(a.classList);
    a.className = "card";
    console.log(a.classList);


}
