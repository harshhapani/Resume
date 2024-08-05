document.addEventListener('DOMContentLoaded',() => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click',function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if(window.scrollY>300){
            backToTopButton.style.display='block';
        }else{
            backToTopButton.style.display='none';
        }
    });
    backToTopButton.addEventListener('click',() => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });
});