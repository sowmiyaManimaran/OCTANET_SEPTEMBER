let text=document.getElementById('input');
let button=document.getElementById('add');
let todoList=document.getElementById('todoList');
let image=document.getElementById("my_img");
let list=[];
button.addEventListener('click',()=>{
    list.push(input.value) 
    addtodo(input.value)
     input.value=''
})
function addtodo(todo){
    let para=document.createElement('p');
    para.innerText=todo
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration="line-through"
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)

        remove(todo)
        })
     para.addEventListener('dblclick',()=>{
        image.style.display='inline'

        })
}
function remove(todo){
    let index=list.indexOf(todo)
    if(index>-1)
    list.splice(index,1)
}