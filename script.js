const container = document.querySelector(".container");
const inputTag = document.querySelector(".Input");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const listButton = document.querySelector(".list");
const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");
const orderList = document.querySelector(".ol");
let myArr = [];
let myArrValues = 0;

inputTag.addEventListener("input", function () {});
addButton.addEventListener("click", function () {
  let inputValue = inputTag.value;
  myArr.push(inputValue);
  if (inputValue !== "") {
    let i = myArr.length;
    do {
      const h3 = document.createElement("h3");
      h3.textContent = `Task Added "${inputTag.value}"`;
      display.appendChild(h3);
      i++;
      inputTag.value = "";
      // console.log(myArr);
      setTimeout(function () {
        h3.textContent = ``;
        display.appendChild(h3);
      }, 3000);
      // console.log(h3.textContent);
    } while (i <= myArr.length);
  }
});

listButton.addEventListener("click", function () {
  orderList.innerHTML = "";
  for (const values of myArr) {
    let myArrValues = values;
    const li = document.createElement("li");
    li.textContent = `${myArrValues}`;
    orderList.appendChild(li);
  }
});

clearButton.addEventListener("click", function () {
  orderList.innerHTML = "";
});

deleteButton.addEventListener("click",function(){
  for (const values of myArr) {
    if(inputTag.value===values){
      myArr.splice(Array[values])
    }
  }
  inputTag.value = "";
})