

let buttonLeft=document.querySelector('i[class="fa fa-caret-left"]')
let buttonRight=document.querySelector('i[class="fa fa-caret-right"]')
let imageContainer=document.querySelector('div[class="image"]')
let counterDisplay=document.querySelector('div[class="counter"]')
let captionDisplay=document.querySelector('div[class="caption"]')
let circles=document.querySelectorAll('i[class="fa fa-circle"]')
let imageCounter=0
let imageStore=[
['url(img/BruceLee2.jpg)', 'Bruce Lee mesterével'],
['url(img/BruceLee3.jpg)', 'Bruce Lee forgatás közben'],
['url(img/Enterthedragon.jpg)', 'Enter the Dragon című film'],
['url(img/GreenHornet.jpg)', 'Bruce Lee a Zöld Darázsban']]

imageContainer.style.backgroundImage=imageStore[0][0]
captionDisplay.textContent=imageStore[0][1]
circles[0].setAttribute('class2', 'active')

let changePhoto=function(){imageContainer.style.backgroundImage=imageStore[imageCounter][0]}
let changeCounter=function(){counterDisplay.textContent=imageCounter+1+"/4"}
let changeCaption=function(){captionDisplay.textContent=imageStore[imageCounter][1]}
let changeCircle=function(){circles[imageCounter].setAttribute('class2', 'active')}
let resetCircle=function(){circles.forEach(function(circle){circle.setAttribute('class2', 'inactive')})}
setInterval(function() {rightclick()
    
}, 3000);

let leftclick = function(){
    if (imageCounter==0){
        imageCounter=imageStore.length-1
    } else {imageCounter = imageCounter-1}
    changePhoto()
    changeCounter()
    changeCaption()
    resetCircle()
    changeCircle()
}

let rightclick = function(){
    if (imageCounter==imageStore.length-1){
        imageCounter=0
    } else {imageCounter = imageCounter+1}
    changePhoto()
    changeCounter()
    changeCaption()
    resetCircle()
    changeCircle()
}

let circleclick = function(){
    changePhoto()
    changeCounter()
    changeCaption()
    resetCircle()
    changeCircle()
}


buttonLeft.addEventListener('click', leftclick)
buttonRight.addEventListener('click', rightclick)
for (let i=0; i<imageStore.length; i+=1){
    circles[i].addEventListener('click', function(){imageCounter=i ; circleclick()})}



