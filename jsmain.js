const direction = document.querySelector(".nav-item-direc")
direction.addEventListener("click",function(){
    direction.classList.toggle("active")
    document.querySelector(".findroute").classList.toggle("active")
})
const chart = document.querySelector(".nav-item-chart")
chart.addEventListener("click",function(){
    chart.classList.toggle("active")
    document.querySelector(".chart").classList.toggle("active")
})
const feedback = document.querySelector(".button-feedback")
feedback.addEventListener("click",function(){
    feedback.classList.toggle("active")
    document.querySelector(".feedback").classList.toggle("active")
})

