import "./styles/style.scss";

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__item');

// show hide navigation
const handleBtnClick = () => {
	nav.classList.remove('nav--show')
	document.body.classList.remove('body--scroll__disable');
};

openBtn.addEventListener('click', () => {
	nav.classList.add('nav--show')
	document.body.classList.add('body--scroll__disable');
	for (let item of navItem) {
		item.addEventListener('click', handleBtnClick)
	}
});

closeBtn.addEventListener('click', handleBtnClick);