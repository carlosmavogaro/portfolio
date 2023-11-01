const moreAboutMeList = document.getElementById('more-about-me__list');
const moreAboutMeButton = document.getElementById('more-about-me__button');
let isShowing = false;

const changeView = () => {
    if (isShowing) {
        moreAboutMeList.style.display = 'none';
        isShowing = false;
    } else {
        moreAboutMeList.style.display = 'block';
        isShowing = true;
    }
}

moreAboutMeButton.addEventListener('click', changeView);