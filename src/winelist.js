function setActive(id) {
    const activeBtn = document.querySelector('.btn.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const wineBtn = document.getElementById(id);
    wineBtn.classList.add('active');
}

function wineListItem (src, text, year) {
    const wine = document.createElement('div');
    wine.classList.add('wine');

    const wineImg = document.createElement('img');
    wineImg.setAttribute('src', src);
    wine.appendChild(wineImg);

    const discription = document.createElement('div');
    discription.classList.add('wine-discription');

    wine.appendChild(discription);

    const wineText = document.createElement('p');
    wineText.classList.add('winetxt');
    wineText.textContent = text,
    discription.appendChild(wineText);

    const wineYear = document.createElement('p');
    wineYear.classList.add('winetxt');
    wineYear.textContent = "Produced in " + year;
    discription.appendChild(wineYear);
    return wine
}

function loadWineList() {
    const content = document.getElementById('tab-content');
    content.textContent = "";

    const wineList = document.createElement('section');
    wineList.classList.add('wine-list');

    content.appendChild(wineList);

    setActive('wines');
    
    const list = [
        wineListItem('imgs/merlot.jpg', 'Merlot', 2015),
        wineListItem('imgs/riesling.jpg', 'Riesling', 2013),
        wineListItem('imgs/sauvignonblanc.jpg', 'Sauvignon Blanc', 2017),
        wineListItem('imgs/rose.jpg', 'Rose', 2018),
        wineListItem('imgs/pinogrigio.jpeg', 'Pino Grigio', 2011)
        ];

    console.log(list)

    list.forEach((wine) => {
        wineList.appendChild(wine)
    })
}

export default loadWineList