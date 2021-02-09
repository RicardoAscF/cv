const navSide = () =>{
    const burgerMenu = document.querySelector('.menu');
    const navMenu = document.querySelector('.header__barra-nav');
    const links = document.querySelectorAll('.header__barra-nav ul li a');
   
    burgerMenu.addEventListener('click', ()=>{
        
        navMenu.classList.toggle('menu-activo');
        burgerMenu.classList.toggle('activo');

        //Animate
        links.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation= "";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;   
            }
        });
        
    });

    links.addEventListener('click',()=>{
        alert(hello);
    });

   

  

}


navSide();
