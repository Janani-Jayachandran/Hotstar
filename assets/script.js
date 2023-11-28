window.onload=function(){

    let m1=1324.4;
    let fullwidth=document.getElementById('silder').offsetWidth;
    let remainingwidth=fullwidth;

    document.getElementById("swipe-left").addEventListener("click", function(){
        
        
    
    }) 
    
    document.getElementById("swipe-right").addEventListener("click",function(){
       
        if(remainingwidth>m1)
        {
            document.getElementById('slider').style.marginLeft=-m1+"px";
            remainingwidth=remainingwidth-1324.5;
            m1=m1+1324.5;
        }
       else if(remainingwidth<m1){
        document.getElementById('slider').style.marginLeft=-remainingwidth+"px";
       }
    })
}

