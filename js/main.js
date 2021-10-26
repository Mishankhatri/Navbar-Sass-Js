const  menu_btn= document.querySelector('.menu-btn')
const menu_bar= document.querySelector('.bar')
const nav_items = document.querySelector('.nav-items')
const list = document.querySelectorAll('.list')
const links = document.querySelectorAll('.nav-links')

let showMenu = false;

menu_btn.addEventListener("click", ()=>{
    if(!showMenu){
        menu_bar.classList.add("open");
        nav_items.classList.add('show');
        list.forEach(item => item.classList.add('show'));
        showMenu = true;
    }
    else {
        menu_bar.classList.remove("open");
        nav_items.classList.remove('show');
        list.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
});


for (var i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    var f = document.querySelector(".navbar ul li a.active");
    if (f){ 
        f.classList.remove("active");
    }
    this.classList.add('active');
  };
}

