
addNote=document.getElementById("addNote")
editNOte=document.getElementById('editNote')
delNote=document.getElementById('delNote')
inpText=document.getElementById('textInp')
noteArea=document.getElementById("note")




function newNote(text)
{
console.log(text)
noteArea.insertAdjacentHTML("afterend",
        `<p style="text-align:center;">
        ${text}
        </p>`)

}




addNote.addEventListener('click',()=>
{
    newNote(inpText.value)
})

