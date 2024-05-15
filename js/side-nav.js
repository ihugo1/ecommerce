document.getElementById("nav-bar-right__side-nav-btn").addEventListener("click", 
    function() {
        document.getElementById("side-nav").classList.toggle("side-nav-active");
        if(document.body.style.overflow == ""){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = "";
        }
    }
);
