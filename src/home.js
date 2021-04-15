function createHome () {
    const home = document.createElement('section');
    home.classList.add('home-section');

    const intro = document.createElement('p');
    intro.textContent = "Walla Walla Valley's Finest"
    home.appendChild(intro);

  
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    home.appendChild(imgDiv);

    const img = createImg('/src/imgs/homeimg.jpg');
    imgDiv.appendChild(img);

    const about = document.createElement('p');
    about.textContent = 'Producing award winning wines since 1982';
    home.appendChild(about);
    return home;
}

function createImg(src) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    return img;
}

function setActive(id) {
    const activeBtn = document.querySelector('.btn.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome() {
    const content = document.getElementById('tab-content');
    content.textContent = "";

    setActive('home');
    
    const homeContent = createHome();
    content.appendChild(homeContent); 
}

export default loadHome; 