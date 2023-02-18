const target = document.querySelector('.active-feature').addEventListener('click', () => {
    document.getElementById('feature').classList.toggle('hidden');
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('rotatey');
})

document.querySelector('.active-company').addEventListener('click', () => {
    document.getElementById('company').classList.toggle('hidden');
    const arrowCompany = document.getElementById('arrow-company');
    arrowCompany.classList.toggle('rotatey');
})

const btnClose = document.getElementById('close');
btnClose.addEventListener('click', () => {
    document.getElementById("collapsed").style.display='none';
})

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
    document.getElementById('collapsed').style.display='block';
})

function showMobileMenuF() {
    document.querySelector('.collapsed-f-arrow').classList.toggle('rotatey');
    // document.querySelector('.feature-list-menu').style.display==='block';
    const featureListMenu = document.querySelector('.feature-list-menu');
    featureListMenu.style.display==='none' ? featureListMenu.style.display='block' : featureListMenu.style.display='none';
}

function showMobileMenuC() {
    const arrow = document.querySelector('.collapsed-c-arrow');
    const companyListMenu = document.querySelector('.company-list-menu');
    arrow.classList.toggle('rotatey');
    companyListMenu.style.display==='none' ? companyListMenu.style.display='block' : companyListMenu.style.display='none'
}

