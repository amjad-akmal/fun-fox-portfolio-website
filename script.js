const image=document.getElementById("ppic")

setInterval(prev,3000)
let reviews=[
    {
        img:'images/fox1.jpg'
    },
    {
        img:'images/fox2.jpg'
    },
    {
        img:'images/fox3.jpg'
    },
    {
        img:'images/fox4.jpg'
    },
]

window.onload=function(){
    count=0
    setrev(count)
}
function prev(){
    if(count==0){
        count=3
    }
    else{
        count--
    }
    setrev(count)
}
function setrev(cid){
    image.src=reviews[cid].img
}