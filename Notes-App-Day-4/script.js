
const addNote=document.getElementById("addNote")
const editNote=document.getElementById('editNote')
const delNote=document.getElementById('delNote')
const inpText=document.getElementById('textInp')
const noteArea=document.getElementById("content")


function newNote(text)
{
noteArea.insertAdjacentHTML("afterbegin",
        `<p style="text-align:center;background-color:white;margin:0.3rem;">
        ${text}
        </p>`)
}


//add note
addNote.addEventListener('click',()=>
{
    editNote.setAttribute("disabled",true)
    newNote(inpText.value)
})

var tar
document.querySelector('#content').addEventListener('click',function(event){
  
    tar=event.target
    inpText.value=event.target.textContent.replace(/\s+/g, " ").trim()
    
    addNote.setAttribute("disabled",true)

    //enable editNote,delNote
    editNote.removeAttribute("disabled")
    delNote.removeAttribute("disabled")


})

//update note
editNote.addEventListener('click',(event)=>
{
    tar.innerHTML=inpText.value
})

//Delete note
delNote.addEventListener('click',(event)=>
{
    tar.remove()
})




