
class Numbers{
    constructor()
    {
        this.loadNumbers()
    }

  
loadNumbers()
{
    var self=this
    let i=1
    
    var interval=setInterval(
        function ()
        {   
            self.displayNumbers(i)
            i++;
            if(i===1001)clearInterval(interval)
        },10)

}

displayNumbers(val)
{

numbers.innerText=val
twitnum.innerText=val

}


}

const numbers=document.getElementById('numbers')
const twitnum=document.getElementById('twitnumbers')

window.onload = (event) => {
    new Numbers();
  };   
