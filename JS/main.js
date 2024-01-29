document.getElementById("menuicon").innerHTML.on('click',function(){
    let width= document.getElementById("inner").innerHTML.outerWidth()
    document.getElementById("sidebar").innerHTML.animate({left:`-${width}px`},2000)
})