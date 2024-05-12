const app = document.querySelector("#app");


const heading = document.createElement("h1")
heading.innerText = "You can do it";

heading.classList.add("select");
heading.id ="identify"
heading.title = "titl"
heading.setAttribute ("you-at",3)


// app.append(heading)


const lists = document.createElement("ul")
const createList = (Text) => {
    const list = document.createElement("li")
    list.innerText = Text;
    return list
}

// const li1 = document.createElement("li");
// li1.innerText = "apple";

// const li2 = document.createElement("li");
// li2.innerText = "Watermelon";

// const li3 = document.createElement("li")
// li3.innerText = "Orange";


// lists.append(li1)
// lists.append(li2)
// lists.append(li3)


const inputText = document.createElement("input")
inputText.type = "Text";
inputText.placeholder="Enter your name"
// app.append(inputText)
const btn = document.createElement("button")
btn.innerText = "Add New";

btn.onclick = () => {
    // const li = document.createElement("li") ;
    // li.innerText = inputText.value;
    // lists.prepend(li);
    lists.append(createList(inputText.value))


    inputText.value = null
    
}

// app.append(btn)

app.append(lists);
lists.before(heading)
lists.after(inputText)
inputText.after(btn)


// const createOP = (text,value) => {
//     const op = document.createElement("option");
//     op.innerText = text ;
//     op.value = value;
//     return op ;
// }

// console.log(createOP("Myanmar", "MM"));

// console.log(new Option("myan", "mm"));

const table = document.createElement("table");
const thead = table.createTHead();
const theadrow = thead.insertRow();
const td = theadrow.insertCell(0);
td.innerText = "pl"


app.append(table)