

     topLeft=document.getElementById('topLeft')
     topRight=document.getElementById('topRight')
     bottomLeft=document.getElementById('bottomLeft')
     bottomRight=document.getElementById('bottomRight')
     textContainer=document.querySelector('.text')
     addCssText=document.querySelector('.csscode') 


    function addEventListeners() 
    {
      
        this.topLeft.addEventListener('change',addTopLeftRadius)
        this.topRight.addEventListener('change',addTopRightRadius)
        this.bottomLeft.addEventListener('change',addBottomLeftRadius)
        this.bottomRight.addEventListener('change',addBottomRightRadius)

     }

     function addBottomRightRadius(e)
     {

        let pxValue=e.target.value
        textContainer.style.borderBottomRightRadius=`${e.target.value}px` 
        if(document.getElementById('border-bottom-right'))
        {
            document.getElementById('border-bottom-right').innerHTML=''
            document.getElementById('border-bottom-right').innerHTML=`border-bottom-right-radius:${pxValue}px`
        }
        else{
            addCssText.insertAdjacentHTML('afterbegin',`<p id="border-bottom-right">border-bottom-right-radius:${pxValue}px</p>`)
        }
    
     }


     function addBottomLeftRadius(e)
     {

        let pxValue=e.target.value
        textContainer.style.borderBottomLeftRadius=`${e.target.value}px` 
        if(document.getElementById('border-bottom-left'))
        {
            document.getElementById('border-bottom-left').innerHTML=''
            document.getElementById('border-bottom-left').innerHTML=`border-bottom-left-radius:${pxValue}px`
        }
        else{
            addCssText.insertAdjacentHTML('afterbegin',`<p id="border-bottom-left">border-bottom-left-radius:${pxValue}px</p>`)
        }
    
     }
    


     function addTopRightRadius(e)
     {

        let pxValue=e.target.value
        textContainer.style.borderTopRightRadius=`${e.target.value}px` 
        if(document.getElementById('border-top-right'))
        {
            document.getElementById('border-top-right').innerHTML=''
            document.getElementById('border-top-right').innerHTML=`border-top-right-radius:${pxValue}px`
        }
        else{
            addCssText.insertAdjacentHTML('afterbegin',`<p id="border-top-right">border-top-right-radius:${pxValue}px</p>`)
        }
    
     }
    
     function addTopLeftRadius(e)
     {

        let pxValue=e.target.value
        textContainer.style.borderTopLeftRadius=`${e.target.value}px` 
        if(document.getElementById('border-top'))
        {
            document.getElementById('border-top').innerHTML=''
            document.getElementById('border-top').innerHTML=`border-top-left-radius:${pxValue}px`
        }
        else{
            addCssText.insertAdjacentHTML('afterbegin',`<p id="border-top">border-top-left-radius:${pxValue}px</p>`)
        }
    
     }
 

     addEventListeners()        











