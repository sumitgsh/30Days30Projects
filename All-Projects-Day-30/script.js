
/*selectors*/


const allContent=document.querySelector('.allContent')

dayElements=[
    {
           link:'./images/day1.png',
           twit_link:'sumitgsh',
           linked_link:'sumit-ghosh-4a7663170/',
           proj_name:'Flyo Landing Page from Front-end Mentor',
           projLink:'flyo-landing-page-Day-1'
      },
    {
            link:'./images/day2.png',
         twit_link:'sumitgsh',
         linked_link:'sumit-ghosh-4a7663170/',
         proj_name:'faq-accordion-card-main',
         projLink:'faq-accordion-card-main-Day-2'   
    },
    {
        link:'./images/day3.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Word Frequency Count',
        projLink:'Word-Frequency-Count-Day-3'
    },
    {
        link:'./images/day4.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Notes-App'  ,
        projLink:'Notes-App-Day-4'
    },
    {
        link:'./images/day5.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'To-do-list',
        projLink:'to-do-list-Day-5'
    },
    {
        link:'./images/day6.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Pepper-Content-Website-ui-clone',
        projLink:'pepper_content_website_ui_clone-Day-6' 
    },
    {
        link:'./images/day7.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Meme-Creator-app',
        projLink:'Meme-creator-Day-7'  
    },
    {
        link:'./images/day8.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Border-Radius-Previewer',
        projLink:'Border-radius-Previewer-Day-8'  
    },
    {
        link:'./images/day9.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Pig-Game',
        projLink:'pigame-Day-9'  
    },
    {
        link:'./images/day10.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Ip address Tracker',
        projLink:'ip-address-tracker-Day-10' 
    },
    {
        link:'./images/day11.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Card-Design',
        projLink:'card-design-Day-11'  
    },
    {
        link:'./images/day12.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'event-Key-Code',
        projLink:'event-key-codes-Day-12'  
    },
    {
        link:'./images/day13.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Event-Registration-app',
        projLink:'Event-Registration-App-Day-13'   
    },
    {
        link:'./images/day14.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Rain-Drops-Effect',
        projLink:'Rain-drops-Effect-Day-14'  
    },
    {
        link:'./images/day15.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Password-Strength_Checker',
        projLink:'Password_Strength_Checker-Day-15'  
    },
    {
        link:'./images/day16.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Contact-Page-Design',
        projLink:'Contact-Page-Design-Day-16'  
    },
    {
        link:'./images/day17.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'For-loop-visualiser',
        projLink:'for-loop-visualizer-Day-17'   
    },
    {
        link:'./images/day18.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'css-pulse-effect',
        projLink:'css-pulse-effect-Day-18'
    },
    {
        link:'./images/day19.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Infinite-scroll',
        projLink:'infinite-Scroll-Day-19' 
    },
    {
        link:'./images/day20.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Sentiment-analysis-Using-Python',
        projLink:'sentiment-Analysis-Day-20'  
    },
    {
        link:'./images/day21.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Light-Dark-Mode-Toggler',
        projLink:'Light-Dark-Mode-Toggler-Day-21'  
    },
    {
        link:'./images/day22.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Mickey-eye-roll',
        projLink:'mickey-eye-roll-Day-22' 
    },
    {
        link:'./images/day23.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Image-slider',
        projLink:'Image-slider-Day-23' 
    },
    {
        link:'./images/day24.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Calculator',
        projLink:'calculator-Day-24'   
    },
    {
        link:'./images/day25.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Incrementing-counter',
        projLink:'Incrementing-Counter-Day-25'   
    },
    {
        link:'./images/day26.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Video-Call-App-webRtc',
        projLink:'Real-time-video-call-App-with-WebRtc-Day-26'  
    },
    {
        link:'./images/day27.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Google-Chrome-Extension',
        projLink:'crome-Extension-Day-27'  
    },
    {
        link:'./images/day28.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'Invoice Design',
        projLink:'Invoice-Design-Day-28' 
    },
    {
        link:'./images/day29.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'#30days30Projects-HomePage',
        projLink:'pepper_content_website_ui_clone-Day-6'  
    },
    {
        link:'./images/day30.png',
        twit_link:'sumitgsh',
        linked_link:'sumit-ghosh-4a7663170/',
        proj_name:'AllProjects',
        projLink:'pepper_content_website_ui_clone-Day-6'   
    },

]

function checkLength(str)
{

    if(str.length>25)
    {
        return str.slice(0,20)+'...'
    }else{
        return str
    }

}

dayElements.forEach((e,i) => {
    allContent.insertAdjacentHTML('beforeend',
        `
        <div class="col col-md-4 p-3 ">
            <div class="card " style="width: 100%;">
                <div class="card card_extra">
                         <img src=${e.link}  alt="...">
                        <div class="text-center d-flex justify-content-between" id="footer">
                            <i class="fab fa-twitter"><span id="twit_link"  class="px-2">${e.twit_link}</span></i>
                            <i class="fab fa-linkedin-in"><span id="linkedin_link" class="px-2">${e.linked_link}</i>
                        </div>
                </div>
                <div class="card-body text-center proj-link">
                  <a href="https://github.com/sumitgsh/30Days30Projects/tree/main/${e.projLink}"
                   class="btn btn-success"><b>${checkLength(e.proj_name)}-Day${i+1}</b></a>
                </div>
             
            </div>
        </div>
        `)
});

