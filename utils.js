const fillIconOnClick = iconsSelector =>{
    const icons = document.querySelectorAll(iconsSelector)
    icons.forEach(btn=> btn.addEventListener('click',()=>btn.classList.toggle('icon-filled')))
}

const togglePageMenu = () => {
    const toggleBtn = document.querySelector('.page-menu-btn');
    const pageMenu = document.querySelector('.page-menu');
    document.body.addEventListener('click', e => {
        if(e.target.className.includes('page-menu-btn')){
            pageMenu.classList.toggle('active')
        } else{
            pageMenu.classList.remove('active');
        }
    })
}

const toggleFilterSidebar = () => {
    const filterToggleBtn = document.querySelector('.filter-btn');
    const filterSidebar = document.querySelector('aside.filters');
    filterToggleBtn.addEventListener('click',()=>{
        filterToggleBtn.classList.toggle('fa-filter');
        filterToggleBtn.classList.toggle('fa-times');
        filterSidebar.classList.toggle('active');
    })
}