//selectors
const app = document.querySelector("#app");
const textInput =document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");


//functions

const updateCounter = () => {
  totalCount.innerText = countTotalList();
  doneCount.innerText = countDoneList();
}

const countTotalList = () => {
  return document.querySelectorAll(".list").length; 
}

const countDoneList =() => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
}


const createList = (text) => {
  const list = document.createElement("div");
  list.classList=" list border p-3 border-zinc-700 mb-3 group"
  list.innerHTML = `<div class="flex justify-between ">
    <div class="flex gap-3 items-center">
      <input type="checkbox" name="" id="" class="list-checkbox w-4 h-4  accent-zinc-700" >
      <label class ="text">${text}</label>
    </div>
    <div class="flex gap-2 translate-x-[120%] duration-300 group-hover:translate-x-0">
      <button class="listEditBtn
      border p-2 border-zinc-700 active:scale-90 duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-zinc-700">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      </button>
      <button class="listDelBtn active:scale-90 duration-200
      border p-2 border-zinc-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4  stroke-zinc-700">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  </div>
`
const listCheckBox = list.querySelector(".list-checkbox")  
const listText = list.querySelector(".text")
listCheckBox.addEventListener("click",() =>{
  
  listText.classList.toggle("line-through")
  updateCounter();
})
// const listText = list.querySelector(".list-text")
// listCheckBox.addEventListener("click", () => {
//   console.log("you checked");
//   listText.classList.toggle("line-through")
// } )


const listDelBtn = list.querySelector(".listDelBtn");
listDelBtn.addEventListener("click",() => {
  
//  if(confirm("Are you sure to delete?"))
//   list.remove();
confirm("Are you sure to delete?") && list.remove()
// totalCount.innerText = parseInt(totalCount.innerText)-1 
updateCounter();
})


//edit
const listEditBtn = list.querySelector(".listEditBtn");
listEditBtn.addEventListener("click", () => {
   console.log("you edit");
   const input = document.createElement("input")
   input.value = listText.innerText;
   input.className = "focus-visible:outline-none border border-zinc-700 px-2"
   listText.after(input);
   input.focus()
   listText.classList.toggle("hidden")
   input.addEventListener("blur", () => {
     listText.innerText = input.value;
     input.remove();
     listText.classList.toggle("hidden")
     


   })
} )

 return list;
}
//handler
const addList = () => {
    listGroup.append(createList(textInput.value));
    textInput.value = " "
    // totalCount.innerText = parseInt(totalCount.innerText) +1;
    updateCounter();
}

//listener
// addBtn.onclick = addList

addBtn.addEventListener("click",addList)
