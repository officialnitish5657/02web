// let area =document.querySelector("#con1");
// area.addEventListener("mouseenter", function(){
//     // alert("hello")
//     gsap.to("#con1 img",{
//     opacity:1,
//     scale:1
//     })
// })
// // area.addEventListener("mousemove", function(e){
// //     // alert("hello")
// //     gsap.to("#play", {
// //         left: e.x +0,
// //         top: e.y - 3
// //     })
// // })

// area.addEventListener("mouseleave", function(){
//     // alert("hello")
//     gsap.to(".con img",{
//     opacity:0,
//     // scale:0
//     })
// })
// area.addEventListener("mousemove", function(e){
//     // alert("hello")
//     gsap.to("#con1 img", {
//         left:e.x - 720,
//         top:e.y - 280,
        
//     })
// })

document.querySelector(".icon").addEventListener("mouseenter", function(){

    gsap.from(".icon", {
        y:-3,
        x:3
    })
})
document.querySelector(".icon").addEventListener("mouseleave", function(){

   
    gsap.from(".icon", {
        color:"#666",
        y:3,
        x:-3
    })
})