const container = document.querySelector(".container");
const inputTag = document.querySelector(".Input");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const listButton = document.querySelector(".list");
const clearButton = document.querySelector(".clear");
const display = document.querySelector(".display");
const myArr = [];

inputTag.addEventListener("input", function () {
});
addButton.addEventListener("click",function(){
    let inputValue = inputTag.value;
    myArr.push(inputValue);
    if(inputValue!==""){
        let i=myArr.length
    do{
        const h3=document.createElement("h3") 
        h3.textContent=`Task Added "${inputTag.value}"`
        display.appendChild(h3)
        i++
        inputTag.value=""
        console.log(myArr); 
    }
    while(i<=myArr.length)
}})

listButton.addEventListener("click",function(){
    let inputValue = inputTag.value;
        const h3=document.createElement("h3") 
        h3.textContent=`${inputValue}`
        display.appendChild(h3) 
})

clearButton.addEventListener("click",function(){
    display.textContent=""
})
