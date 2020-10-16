	const menu = document.getElementsByClassName("Menu")[0];
	const button = document.getElementsByClassName('header__mobileMenu')[0];
	const buttonSpan = button.querySelector('span');
	const links = menu.querySelectorAll('a');

let menuButton = ()=>{
	let display = getComputedStyle(menu).display;
	console.log(display);
	 if (display === 'flex'){
			menu.style.animation = 'menuClose .5s ease-in';
				buttonSpan.style.animation = 'spanOpacity .6s ease';
				button.classList.remove('header__menuActive');
			setTimeout(()=>{
				menu.style.display = '';
				console.log(button);
			},500);
	}else{
			menu.style.animation = 'menuOpen .5s ease-in';
			menu.style.display = 'flex';
			button.classList.add('header__menuActive');
			buttonSpan.style.animation = 'unset';
			console.log(buttonSpan);

	};
};
links.forEach(link=>{
link.addEventListener('click',menuButton);
});