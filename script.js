// 4 pillers of DOM

//1. Selecting an element
//2. changing HTML
//3. Changing css
//4. Event Listners


//selection of elements
// var a = document.querySelector("h1")
// console.log(a)

//changing html
// var a = document.querySelector("h1")
// a.innerHTML = "changed content"

//changing css
// var a = document.querySelector("h1");
// a.style.color = "red"



/*
 var a = document.querySelector("h1");
a.innerHTML = "kaise ho aap sab yaar"
a.style.color = "yellow"
a.style.backgroundColor = "black"
a.style.marginTop = "0px"

//Event listeners
a.addEventListener("click", function(){
    a.innerHTML = (" badal gya hu mai bhi tere ex ki tarah  ");
    a.style.color ="black"
    a.style.backgroundColor = "red"
})

*/



//bulb example

/*
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0;

btn.addEventListener("click", function(){
    if(flag ==0){

        bulb.style.backgroundColor = "yellow"
        flag = 1;
        console.log("ON")
    }else{
        bulb.style.backgroundColor = "white"
        flag = 0;
        console.log("OFF")
    }
})

*/





/*

//Selecting multiple element at a same time
var a = document.querySelectorAll("h1")  //jab same tag multiple baar select krni ho tab document.querySelectorAll ka use krte hai aur isme jitne v tag hote hai same name ke wo ek node array me store kiya jata hai 
console.log(a)

a.forEach(function(e){
    console.log(e);
})


document.getElementById("#box") // getElementById id se element ko uthata hai aur jiski  id box hogi usko utha lega 
document.getElementsByClassName("contianer")// getElementByclassname classname se element ko uthata hai aur jiski  classname container hogi usko utha lega 
 


  */


var a = document.querySelector("h1")
a.textContent = "kunal heyy"  //agar tumko sirf plane text change / include krna ho tab textContent use kro but agr tumko tags v include krne hai to fr innerHTML use kro 


