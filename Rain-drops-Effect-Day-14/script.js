

function Circle() {
    const circleEl = document.createElement('div')
    circleEl.classList.add('circle')
    circleEl.innerHTML=`
    <span style="position: relative;top: 20px;left: 6px;">30Days30Project</span>`
	circleEl.style.top = Math.random() * innerHeight + "px";
	circleEl.style.left = Math.random() * innerWidth + "px";
	document.body.appendChild(circleEl);
	
	setTimeout(() => {
        circleEl.remove()
    }, 3000)
}

setInterval(Circle, 1500)