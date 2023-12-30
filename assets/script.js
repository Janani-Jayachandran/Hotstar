// window.onload=function(){

//     let m1=1324.4;
//     let fullwidth=document.getElementById('silder').offsetWidth;
//     let remainingwidth=fullwidth;

//     document.getElementById("swipe-left").addEventListener("click", function(){
        
        
    
//     }) 
    
//     document.getElementById("swipe-right").addEventListener("click",function(){
       
//         if(remainingwidth>m1)
//         {
//             document.getElementById('slider').style.marginLeft=-m1+"px";
//             remainingwidth=remainingwidth-1324.5;
//             m1=m1+1324.5;
//         }
//        else if(remainingwidth<m1){
//         document.getElementById('slider').style.marginLeft=-remainingwidth+"px";
//        }
//     })
// }


// video cards

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();

    });
    item.addEventListener("mouseleave", () =>{
        let video = item.children[1];
        video.pause();
    });
});

// slider


// let cardContainers =  [...document.querySelectorAll(".card-container")];
// let preBtns = [...document.querySelectorAll(".pre-btn")];
// let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

// cardContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtns[i].addEventListener("click", () => {
//         item.scrollLeft += containerWidth - 200;

//     });

//     preBtns[i].addEventListener("click", () => {
//         item.scrollLeft -= containerWidth + 200;
//     });

// });

// ------------------------  subscription page---------------------

        
const dropdowns = document.querySelectorAll('.dropdown');

//  loop through all dropdown elements

dropdowns.forEach(dropdown =>{

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const manu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        manu.classList.toggle('menu-open');
    });

    options.forEach(option =>{
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option =>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});



let slider= tns({
    container : ".my-slider",
    "sliderBy": "1",
    "speed":900,
    "nav":false,
    autoplay:true,
    controls:false,
    autoplayButtonOutput: false,
    responsive: {
        1600:{
            items:4,
            gutter:10
        },
        1024:{
            items:3,
            gutter:10
        },

        768:{
            items:2,
            gutter:10
        },
        480 :{
            items:1,
            gutter:10
        }
    }
})