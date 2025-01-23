

let date =  new Date();
let hrs = date.getHours();
let dateShow = date.getDate();


if (hrs >=0 && hrs < 12)
    document.getElementById("sec-1__welcome").innerHTML="Energetic Happy Morning 🌅" ;
else if (hrs >=12 && hrs <= 17)
    document.getElementById("sec-1__welcome").innerHTML="Warm Afternoon 😊";
else
    document.getElementById("sec-1__welcome").innerHTML="Dreamy Good Night 🌃" ;



function handlesub(Event){
    Event.preventDefault();
    let inputVal = document.getElementsByClassName("seccon-3__input__name").value ;
    document.getElementsByClassName("output").innerHTML = inputVal;
}