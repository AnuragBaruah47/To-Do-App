const container = document.querySelector(".container");
const inputTag = document.querySelector(".Input");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const listButton = document.querySelector(".list");
const clearButton = document.querySelector(".clear");
const bulkDeleteButton = document.querySelector(".deleteall");
const display = document.querySelector(".display");
const orderList = document.querySelector(".ol");
const toggleButton = document.querySelector(".theme-checkbox");
let myArr = [];
let myArrValues = 0;

addEventListener("DOMContentLoaded", () => {
  inputTag.addEventListener("input", function () {});
  addButton.addEventListener("click", function () {
    let inputValue = inputTag.value;
    if (inputValue.trim() !== "") {
      myArr.push(inputValue);
      const localArray = JSON.stringify(myArr);
      localStorage.setItem("1", localArray);
      const h3 = document.createElement("h3");
      h3.textContent = `Task Added "${inputTag.value}"`;
      display.appendChild(h3);
      inputTag.value = "";
      // console.log(myArr);
      setTimeout(function () {
        h3.textContent = ``;
        display.appendChild(h3);
      }, 3000);
      // console.log(h3.textContent);
    }
  });

  clearButton.addEventListener("click", function () {
    orderList.innerHTML = "";
  });

  deleteButton.addEventListener("click", function () {
    let inputValue = inputTag.value;
    console.log(inputValue);

    if (inputTag.value.trim() !== "") {
      orderList.innerHTML = `<h1>Do you Want To delete<h2/>`;
      const div = document.createElement("div");
      display.appendChild(div);
      const button1 = document.createElement("button");
      const button2 = document.createElement("button");
      button1.textContent = "Yes";
      button2.textContent = "No";
      div.appendChild(button1);
      div.appendChild(button2);
      button2.addEventListener("click", () => {
        orderList.innerHTML = "";
        div.innerHTML = "";
      });
      button1.addEventListener("click", () => {
        const item = localStorage.getItem("1");
        const arrayitem = JSON.parse(item);
        const deleteValue = arrayitem.indexOf(inputValue);
        myArr.splice(deleteValue, 1);
        const localArray = JSON.stringify(myArr);
        localStorage.setItem("1", localArray);
        orderList.innerHTML = "Your Selected Value Has Been Removed";
        div.innerHTML = "";
        setTimeout(function () {
          orderList.innerHTML = "";
        }, 2000);
      });
      inputTag.value = "";
    }
  });

  listButton.addEventListener("click", function () {
    orderList.innerHTML = "";
    const item = localStorage.getItem("1");
    const arrayitem = JSON.parse(item);
    console.log(arrayitem.length);
    if (arrayitem.length >= 1) {
      for (const values of arrayitem) {
        const input=document.createElement("input")
        const div=document.createElement("div")
        input.className="checkbox"
        input.type="checkbox" 
        let myArrValues = values;
        const li = document.createElement("li");
        orderList.appendChild(div)
        div.appendChild(li);
        li.appendChild(input) 
        li.className="displayli"
        li.appendChild(document.createTextNode(` ${myArrValues}`));
        input.addEventListener("change",()=>{
          if(input.checked===true) {
            li.style.textDecoration = "line-through";
          }else{
            li.style.textDecoration = "none";
          }
        })
      }
    }
  });

  bulkDeleteButton.addEventListener("click", function () {
    orderList.innerHTML = `<h1>Do you Want To delete<h2/>`;
    const div = document.createElement("div");
    display.appendChild(div);
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.textContent = "Yes";
    button2.textContent = "No";
    div.appendChild(button1);
    div.appendChild(button2);
    button1.addEventListener("click", () => {
      myArr = [];
      orderList.innerHTML = "";
      localStorage.clear();
      orderList.innerHTML = "Your Task Has Been Deleted";
      div.innerHTML = "";
      setTimeout(function () {
        orderList.innerHTML = "";
      }, 2000);
    });
    inputTag.value = "";
    button2.addEventListener("click", () => {
      orderList.innerHTML = "";
      div.innerHTML = "";
    });
  });
});
