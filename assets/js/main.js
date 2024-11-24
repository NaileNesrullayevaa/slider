let pics=[
    'assets/photos/one.jpg',
    'assets/photos/two.jpg',
    'assets/photos/three.jpg',
    'assets/photos/four.jpg'
]

let img=document.querySelector("#slider img")
img.src=pics[0]
const img1=document.querySelector('.imgs .img1 img')
const img2=document.querySelector('.imgs .img2 img')

const img3=document.querySelector('.imgs .img3 img')

const img4=document.querySelector('.imgs .img4 img')

img1.addEventListener('click',function(){
    img.src=pics[0]
})
img2.addEventListener('click',function(){
    img.src=pics[1]
})
img3.addEventListener('click',function(){
    img.src=pics[2]
})
img4.addEventListener('click',function(){
    img.src=pics[3]
})
// const next=document.querySelector("#slider .next")
// const prev=document.querySelector("#slider .prev")

// let currentSlide=0

// next.addEventListener('click',function(){
//     currentSlide++;
//     if(currentSlide>pics.length-1){
//         currentSlide=0
//     }
//     img.src=pics[currentSlide]
// })

// prev.addEventListener("click",function(){
//     currentSlide--;
//     if(currentSlide<0){
//         currentSlide=pics.length-1
//     }
//     img.src=pics[currentSlide]
// })

let currentSlide=0
function main(){
    currentSlide++;
    if(currentSlide>pics.length-1){
        currentSlide=0
    }
    else if(currentSlide<0){
        currentSlide=pics.length-1
    }
    img.src=pics[currentSlide]
}
setInterval(main,2000)