var menuButton = document.querySelector(".navbar-menu--mobile");
menuButton.addEventListener('click', function () {
    console.log("Клик по кнопке");
    document.querySelector(".navbar-menu").classList.toggle("navbar-menu--visible");
});


var accordion = document.getElementById('accordion');

accordion.addEventListener('click', change);

function change(event) {
	var targ = event.target;
	    if (targ.tagName !== 'H4') return;

		if (targ.classList.contains('select')) {
			hideAll();
		} 

        else {
			hideAll();
			targ.classList.add('select');
			showText(targ.nextElementSibling);
		}
}

function hideAll() {
	var h4El = accordion.querySelectorAll('h4');
	var ulEl = accordion.querySelectorAll('ul');
			
    for (var i = 0; i < h4El.length; i++) {
		h4El[i].classList.remove('select');
	}
	
    for (var i = 0; i < ulEl.length; i++) {
		ulEl[i].style.height = '0';
	}
}
		

function showText(textEl) {
	textEl.style.height = textEl.scrollHeight + 'px';
}



