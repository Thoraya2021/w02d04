

const body = document.querySelector("body")
const title = document.createElement("h1")
title.innerHTML = "to do list"
body.append(title)



const list = document.createElement("ul")
list.id ="myList"
body.append(list)



const toDos =["wake up","eat breakfast","code"]
const renderList  = () => {
toDos.forEach ((element,i)=>{
    const newItem = document.createElement("li")
    newItem.innerHTML = element
    list.append(newItem)
})
}

renderList()

const button =document.createElement("button");
button.id="button"
button.innerHTML="add "
body.append(button)



const input =document.createElement("input");
input.id="input"
body.append(input)

const addfunction =() => {   
const newItem = input.value

toDos.push(newItem)


list.innerHTML="";
renderList()

}

button.addEventListener("click",addfunction)



//delete


const input =document.createElement("input");
input.id="input"
body.append(input)

const deletefunction =(index) => {   
const delItem=list.filter((delitem,i)=>index ==! 

list.innerHTML="";


});

renderList()
button.addEventListener("click",deletefunction)





//update 

const input =document.createElement("input");
input.id="input"
body.append(input)

const updatefunction =(index) => {   
const upitem=list.map((upitem,index =>
{
    if (index===i)
    {
        return upitem;
    });


renderList()

}
button.addEventListener("click",updatefunction)

