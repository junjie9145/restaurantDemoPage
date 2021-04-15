
function setActive(id) {
    const activeBtn = document.querySelector('.btn.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const contactBtn = document.getElementById(id);
    contactBtn.classList.add('active');
}

function socialBtn(link, fas) {
    const socialMedialink = document.createElement('a');
    socialMedialink.setAttribute('href', link);
    const span = document.createElement('span');
    span.setAttribute('class', fas);
    socialMedialink.appendChild(span)
    

    return socialMedialink
}

function makeImg (src) {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');

    const img = document.createElement('img');
    img.setAttribute('src', src);

    imgDiv.appendChild(img);
    return imgDiv
}

function detailFactory (address, phone, email) {
    const details = document.createElement('div');
    details.classList.add('details');


    const streetAddress = document.createElement('p');
    streetAddress.textContent = address;

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = phone;

    const mail = document.createElement('p');
    mail.textContent = email;

    details.appendChild(streetAddress);
    details.appendChild(phoneNumber);
    details.appendChild(mail);

    return details;
}

function loadContact() {
    setActive('contact')
    const content = document.getElementById('tab-content')
    content.textContent = "";

    const contactSection = document.createElement('section');
    contactSection.classList.add('contact-section');
    content.appendChild(contactSection);

    const title = document.createElement('h3');
    title.textContent = "Please Contact Us!";

    contactSection.appendChild(title);

    const winery = makeImg('imgs/winery.jpg');
    contactSection.appendChild(winery);

    const contactInfo = detailFactory('5 Old Coutry RD', '(555)555-5555', 'wallaSquared@fake.wine')
    contactSection.appendChild(contactInfo);

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('socialdiv');
    contactSection.appendChild(socialMediaDiv);

    const socialMedia = [
        socialBtn('https://www.facebook.com', 'fab fa-facebook fa-3x'),
        socialBtn('https://www.instagram.com', 'fab fa-instagram fa-3x'),
        socialBtn('https://www.yelp.com', 'fab fa-yelp fa-3x'),
    ]

    socialMedia.forEach(link => {
        socialMediaDiv.appendChild(link);
    })
}

export default loadContact