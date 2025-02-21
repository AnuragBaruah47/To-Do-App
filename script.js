const container = document.querySelector(".container");
const inputTag = document.querySelector(".Input");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const listButton = document.querySelector(".list");
const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");
const orderList = document.querySelector(".ol");
const toggleButton=document.querySelector(".theme-checkbox")
let myArr = [];
let myArrValues = 0;

inputTag.addEventListener("input", function () {});
addButton.addEventListener("click", function () {
  let inputValue = inputTag.value;
  if (inputValue.trim() !== "") {
    for(let i=myArr.length;i<=myArr.length;i++){
      myArr.push(inputValue);
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
    }
}});

clearButton.addEventListener("click", function () {
  orderList.innerHTML = ""; 
});

deleteButton.addEventListener("click",function(){
  if(inputTag.value.trim()!==""){
    orderList.innerHTML=`<h1>Do you Want To delete<h2/>`
   const div=document.createElement("div")
   display.appendChild(div)
   const button1=document.createElement("button")
   const button2=document.createElement("button")
   button1.textContent="Yes"
   button2.textContent="No"
   div.appendChild(button1)
   div.appendChild(button2)
   button2.addEventListener("click",()=>{
       orderList.innerHTML = ""
           div.innerHTML=""
   })
   button1.addEventListener("click",()=>{
    const deleteValue=myArr.indexOf(inputTag.value)
    myArr.splice(deleteValue,1)
    orderList.innerHTML = "Your Selected Value Has Been Removed";
    div.innerHTML=""
    setTimeout(function(){
        orderList.innerHTML = ""
    },2000)
   })
  inputTag.value = "";
}})

listButton.addEventListener("click", function () {
  orderList.innerHTML = "";
  for (const values of myArr) {  
    let myArrValues = values;
    const li = document.createElement("li");
    li.textContent = `${myArrValues}`;
    orderList.appendChild(li);
  }
}); 

toggleButton.addEventListener("click",function(){
  
})
