
 const COLORS = ['#ea4235', '#fbbc03', '#33a853', '#4185f4','#FFFFFF'];
 const DURATION = 1500;

 
 const $bar = document.getElementById('slider');
const { width } = $bar.getBoundingClientRect();

//Id stored at respective variables
var Lcase=document.getElementById('Lcase');
var Ucase=document.getElementById('Ucase');
var Num=document.getElementById('Num');
var Char=document.getElementById('Char');
var Input=document.getElementById('psd');//password
var Lowercase=Uppercase=Number=SpecialChar=false;
var strength=document.getElementById('category');
var flag=true;
var check=false;


//disable input text 
(function disableInput()
{
    Input.disabled=false;
})();

Input.onkeypress=checkInput;
     
//Inputs check as per entered
function checkInput()
 {
    var check=false;
    var e = e || event;
    var char = e.type == 'keypress' 
        ? String.fromCharCode(e.keyCode || e.which)  : 1 ;


      // console.log(e.keyCode); 
        //Lower case check
      if(Lowercase){

        if (/[[a-z]/g.test(char)) {
        check=true;
         } 
        //Upper case check
        }
        if(Uppercase){

            if (/[[A-Z]/g.test(char)) {
            check=true;
             } 
            }
        //Number check
            if(Number){

                if (/[[0-9]/g.test(char)) {
                check=true;
                 } 
                }
            //Special Character
                if(SpecialChar){

                    if (/[^[A-Za-z0-9]/g.test(char)) {
                    check=true;
                     } 
                    }
                
        
           return check; 

}

//Event Listener

Lcase.addEventListener('click',()=>{   
if(Lcase.checked)
{
  document.getElementById('Lcase').style='background-color:black';
Lowercase=true;
}
else{
  document.getElementById('Lcase').style='';
    Lowercase=false;
}
})


Ucase.addEventListener('click',()=>{

    if(Ucase.checked)
    {
      document.getElementById('Ucase').style='background-color:black';
      Uppercase=true;  
    
    }
     else{
      document.getElementById('Ucase').style='';
        Uppercase=false; 
        }
       
    });
    Num.addEventListener('click',()=>{

        if(Num.checked)
        {
          document.getElementById('Num').style='background-color:black';
          Number=true;  }
         else{
          document.getElementById('Num').style='';
            Number=false; 
         } 
        });

        Char.addEventListener('click',()=>{

            if(Char.checked)
            {
              document.getElementById('Char').style='background-color:black';
              SpecialChar=true;  }
             else{
              document.getElementById('Char').style='';
                SpecialChar=false; 
             } 
            });

/*Click event */
//Strength check for the password

 
var result;
document.getElementById('check').addEventListener('click',()=>{

  var com=['Bad','Average','Good','Good','Strong'];
  if(document.getElementById('psd').value===''){

alert('Please Insert some text,for Checking the strength');
  }

  if(document.getElementById('psd').value){
  let input=document.getElementById('psd').value;
   result=zxcvbn(input, user_inputs=[]);
    
  strength.textContent=com[result.score]+' '+"Password";
  if(result.feedback.suggestions[0])
  {
    
  strength.textContent=strength.textContent+' '+"("+result.feedback.suggestions[0]+")";
  document.getElementById('guess_val').textContent=result.guesses;
  document.getElementById('guess_main').classList.remove("hidden");
  }
  console.log(result);


  animateProgressBar();
}
});





//Gradient Loader

const animateProgressBar = animate.bind(null, progressCallback);


function easeOut (x) {
  return 1 - (1 - x) * (1 - x);
}

function animate (progressCallback) {
  let startTime = 0;
  let timeElapsed = 0;
  let progress = 0;
  let id = null;
  
  function _animate (timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    timeElapsed = timestamp - startTime;
    progress = Math.min(timeElapsed / DURATION, 1);
    
    (typeof progressCallback === 'function') && progressCallback(progress);

    if (progress < 1) {
      id = requestAnimationFrame(_animate);
    } else {
      id && cancelAnimationFrame(id);
      id = null;
    }
  }
  
  return (id = requestAnimationFrame(_animate));
}

function progressCallback (x) {
  x = easeOut(x);
  $bar.setAttribute('value', `${x * 100}`);
  $bar.style.setProperty('width', `${x * width}px`);

  if (x <= 0.25 && result.score===0) {
  
    return $bar.style.setProperty(
      'background-image',
      `linear-gradient(
        to right,
        ${COLORS[0]} 0 25%,
        ${COLORS[4]} 0
      )`
    );
  }

  else if (x <= 0.5 &&(result.score===1||result.score===2)) {
    $bar.style.setProperty(
      'background-image',
      `linear-gradient(
        to right,
        ${COLORS[0]} 0 25%,
        ${COLORS[1]} 0 50%,
        ${COLORS[4]} 0
      )`
    );
  }

  else if (x <= 0.75 && result.score===3) {
    $bar.style.setProperty(
      'background-image',
      `linear-gradient(
        to right,
        ${COLORS[0]} 0 25%,
        ${COLORS[1]} 0 50%,
        ${COLORS[2]} 0 75%,
        ${COLORS[4]} 0
      )`
    );
  }

  else if(result.score===4){
    $bar.style.setProperty(
      'background-image',
      `linear-gradient(
        to right,
        ${COLORS[0]} 0 25%,
        ${COLORS[1]} 25% 50%,
        ${COLORS[2]} 0 75%,
        ${COLORS[3]} 0 100%
      )`
    );
  }
}


