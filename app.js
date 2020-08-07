var tl = gsap.timeline();


tl.from('span',{
    duration:2,
    opacity:0,
    y:-100,
    stagger:0.25, 
})
tl.from('p,button',{
    duration:1,
    opacity:0,
    y:100,
    stagger:0.2
},"=-2.2")

tl.from('aside',{
    duration:2,
    opacity:0,   
},"-=1.5")


tl.from('.swirl',{
    duration:1,
    opacity:0,
    y:50
},"-=2")

document.querySelector('button').addEventListener('click',()=>{
    tl.reverse();
})




