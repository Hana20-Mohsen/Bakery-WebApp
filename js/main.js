let navbar=document.querySelector('nav');
let navIcons=document.querySelectorAll('nav .rightPart ul span');
let navLogo=document.querySelector('nav .container .leftPart')
let BlogLink=document.querySelector('.Blog_Link');
let blogList=document.querySelector('.blogList');
let blogAlert=document.querySelector('.blogAlert');
let closeButton=document.querySelector('.closeButton');

// navLogo.style.backgroundImage="url('Bakery_images/images/bakery-light-1.png')";
// navbar.style.backgroundSize = '10% ';
// navbar.style.backgroundRepeat = 'no-repeat';

window.addEventListener('scroll' , ()=>{
    if(window.scrollY>0){
        navbar.classList.add('bg-white');
        navIcons.forEach(el=>el.style.color='black');
        navLogo.style.backgroundImage="url('Bakery_images/images/bakery-color.png')";

    }
    else{
        navbar.classList.remove('bg-white');
        navIcons.forEach(el=>el.style.color='white');
        navLogo.style.backgroundImage="url('Bakery_images/images/bakery-light-1.png')";
    }

    
})

BlogLink.addEventListener('mouseover' , ()=>{
    blogList.classList.remove('d-none');
    
});
// document.body.addEventListener('click',()=>{
//     blogList.classList.add('d-none');
// })
closeButton.addEventListener('click' , ()=>{
    blogList.classList.toggle('d-none');
})