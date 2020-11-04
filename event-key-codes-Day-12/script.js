
const insert=document.querySelector('.insert');

window.addEventListener('keypress',(event)=>
{

    console.log(event)

    insert.innerHTML=`
    <div class="key">
        <label>event.Key</label>
            <p>${event.key}</p>
    </div>

    <div class="key">  
        <label>event.KeyCode</label>
        <p>${event.keyCode}</p>
    </div>`





})