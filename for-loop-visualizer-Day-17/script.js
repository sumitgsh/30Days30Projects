
const iter=document.querySelector('.iteration')
let sum=1;
let i=1

var interval=setInterval(
    function ()
    {
       
    iter.insertAdjacentHTML('beforeend',
    `
    <tr class="case">
   
          <td>${i}</td>
          <td>${i}</td>
          <td>${sum}</td>
    </tr>`)
        i++;
    
        if(i===6)clearInterval(interval)
        sum=sum+i 
    },1500)
