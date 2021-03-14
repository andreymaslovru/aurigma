// menu open 

var menuButton = document.querySelector(".navbar-menu--mobile");
menuButton.addEventListener('click', function () {
    console.log("Клик по кнопке");
    document.querySelector(".navbar-menu").classList.toggle("navbar-menu--visible");
});





// accordion in footer
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





// animation content

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 800);
}



