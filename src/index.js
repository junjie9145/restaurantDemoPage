import loadPage from './loadpage';
import loadhome from './home';
import loadWineList from './winelist';
import loadContact from './contact';

function navBtns() {
    const home = document.getElementById('home');
    const wines = document.getElementById('wines');
    const contact = document.getElementById('contact');

    home.addEventListener('click', loadhome);
    wines.addEventListener('click', loadWineList);
    contact.addEventListener('click', loadContact)

}


function init () {
    loadPage() 
    loadhome()
    navBtns()
};

init();
