const task = document.querySelector(".task");
const list = document.querySelector(".list");
const add = document.querySelector("#add");
// add.addEventListener("click",function(){
//     list.innerHTML+="<div class=\"task\">second</div>";
// });
// open add task window click on add task.............................. 
const addBox = document.querySelector(".task-container");
add.addEventListener("click",function(){
    addBox.style.display="flex";
});
// close task window click on close button.................
const close = document.querySelector("#close");
close.addEventListener("click",function(){
    addBox.style.display="none";
});
// add new task on list..........................
let sub=document.getElementById("subject");
let date=document.getElementById("date");
let mess=document.getElementById("message");
// console.dir(date);
const addTask = document.querySelector("#addtask");

addTask.addEventListener("click",function(){

    let taskAdd=`<div class=\"task\">
        <div>
        <p id=\"task-head\">${date.value}  ${sub.value}</p>
        <p id=\"task-mess\">${mess.value}</p>
        </div>
        <img class=\"del\" src="./assets/dels.svg">
        </div>`;

    list.innerHTML+=taskAdd;
    addBox.style.display="none";
    date.value="";
    sub.value="";
    mess.value="";
});


// delete task click on del img script code.......................
// when click on list area any where then this  return that tage as 
// a object e and we help this we perform this event.

list.addEventListener("click", function(e){
    if(e.target.className=="del")
        e.target.parentNode.remove();
        // console.dir(e.target.parentNode);

});