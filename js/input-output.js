const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput")
const heightInput = document.getElementById("heightInput")
const records = document.getElementById("records")


//logic

const areaCalc = (w,h) => w * h ;

//

const handleBtn = ( ) => {
  const areaResult = areaCalc(widthInput.valueAsNumber,heightInput.valueAsNumber);
// result.innerText = areaResult + " sqft"
result.innerHTML =  `${widthInput.valueAsNumber} ft * ${heightInput.valueAsNumber} ft = ${areaResult} ft <sup>2</sup> `
widthInput.value = null;
heightInput.value = null;
};

const clearFun = () => {
result.innerHTML = "";
}

const storeFun = () => {
  records.innerHTML += `<li>${result.innerHTML}</li>`
} 