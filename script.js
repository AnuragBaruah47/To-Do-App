const container = document.querySelector(".container");
const inputTag = document.querySelector(".Input");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const listButton = document.querySelector(".list");
const clearButton = document.querySelector(".clear");
const bulkDeleteButton = document.querySelector(".deleteall");
const display = document.querySelector(".display");
const orderList = document.querySelector(".ol");
const ultimatediv = document.querySelector("ultimatediv");
let input;
let myArr = [];
let myArrValues = 0;
let realTime;
const divmess = document.createElement("div");
divmess.className = "messagecontainer";
const h3 = document.createElement("h3");
h3.className = "headmessage";

addEventListener("DOMContentLoaded", () => {
  inputTag.addEventListener("input", function () {});
  addButton.addEventListener("click", function () {
    addButton.checked=false
    let inputValue = inputTag.value;
    if (inputValue.trim() !== "") {
      myArr.push(inputValue);
      const localArray = JSON.stringify(myArr);
      localStorage.setItem("1", localArray);
      h3.textContent = `Your Task Has Been Added`;
      display.appendChild(divmess);
      divmess.appendChild(h3);
      // let currTime = new Date();
      // realTime = currTime.toLocaleTimeString();
      // console.log(realTime);
      inputTag.value = "";
      // console.log(myArr);
      setTimeout(function () {
        h3.textContent = ``;
        display.appendChild(h3);
      }, 1000);
      // console.log(h3.textContent);
    }
  });

  clearButton.addEventListener("click", function () {
    orderList.innerHTML = "";
  });

  deleteButton.addEventListener("click", function () {
    let inputValue = inputTag.value;
    // console.log(inputValue);

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
        }, 1000);
      });
      inputTag.value = "";
    }
  });

  listButton.addEventListener("click", function () {
    orderList.innerHTML = "";
    const item = localStorage.getItem("1");
    const ultimatediv = document.createElement("div");
    ultimatediv.className = "ultimatediv";
    const arrayitem = JSON.parse(item);
    // console.log(arrayitem.length);
    if (arrayitem.length >= 1) {
      for (const values of arrayitem) {
        const input = document.createElement("input");
        const div = document.createElement("div");
        const li = document.createElement("li");
        li.className = "displayli";
        div.className = "smalldiv";
        input.className = "checkbox";
        input.type = "checkbox";
        // const span=document.createElement("span")
        let myArrValues = values;
        orderList.appendChild(ultimatediv);
        ultimatediv.appendChild(div);
        div.appendChild(li);
        li.appendChild(input);
        // span.textContent=`${realTime}`
        li.appendChild(document.createTextNode(` ${myArrValues}`));
        // li.appendChild(span)
        input.addEventListener("change", () => {
          if (input.checked === true) {
            li.style.textDecoration = "line-through";
            li.style.color = "green";
          } else {
            li.style.textDecoration = "none";
            li.style.color = "white";
          }
        });
      }
    }
  });

  bulkDeleteButton.addEventListener("click", function () {
    addButton.disabled=true
    const h1=document.createElement("h1")
    const h2=document.createElement("h2")
    divmess.innerHTML=""
    h2.className="Heading2"
    h1.innerHTML = `Do you Want To Delete All?`;
    const div=document.createElement("div")
    const div1 = document.createElement("div");
    div1.appendChild(h1)
    div1.className="BulkDiv"
    div.className="yesnodiv"
    display.appendChild(div1);
    display.appendChild(div);
    bulkDeleteButton.disabled = true
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.className = "button1";
    button2.className = "button2";
    button1.textContent = "Yes";
    button2.textContent = "No";
    div1.appendChild(h2)
    div.appendChild(button1);
    div.appendChild(button2);
    button1.addEventListener("click", () => {
      if (myArr.length === 0) {
        h2.innerHTML = "No Task Available To Delete"
        div.innerHTML = "";
        h1.innerHTML=""
        setTimeout(function () {
          h2.innerHTML = "";
        }, 1000);
        addButton.disabled=false
        bulkDeleteButton.disabled = false
        // console.log(bulkDeleteButton.disabled);
      } else {
        myArr = [];
        h2.innerHTML = "";
        localStorage.clear();
        h2.innerHTML = "Your Task Has Been Deleted";
        div.innerHTML = "";
        h1.innerHTML=""
        setTimeout(function () {
          h2.innerHTML = "";
        }, 1000);
        addButton.disabled=false
        bulkDeleteButton.disabled = false
      }
    });
    inputTag.value = "";
    button2.addEventListener("click", () => {
      orderList.innerHTML = "";
      div.innerHTML = "";
      div1.innerHTML=""
      addButton.disabled=false
      bulkDeleteButton.disabled = false
    });
  });
});
