const els = document.querySelectorAll("li");

// console.log(els[0]);
// console.log(els[1]);
// console.log(els[2]);
// console.log(els[3]);

// for(el of els){
//     el.innerText += "KO KO RO"
// }

// els.forEach((el,index) => el.innerText += "-added " + index)
// console.log(els);

//id
// const yourName = document.querySelector("#yourName")
// yourName.value = "Hello May "

//class
// const list = document.querySelector("li.a")
// console.log(list);

//attri
// const att = document.querySelector(`[name="your_name"]`)
// att.value = "HaHa"
// console.log(att);

const h1 = document.querySelector("h1");

h1.style.color = "yellow";
h1.style.backgroundColor = "black";
h1.padding = "5px";

const link1 =document.querySelector("#link1");
link1.setAttribute("target","_black");

const picture = document.querySelector("#picture");
// console.log(picture.src);
// console.log(picture.getAttribute("src"));
 const change =(src) => {
    picture.src = src
 }