document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	const menu = document.querySelector(".menu");
	const hamburger = document.querySelector(".menu-hamburger");

	window.addEventListener("click", evt => {
		if (!hamburger.classList.contains("active")) {
			if (evt.target === hamburger) {
				hamburger.classList.add("active");
				menu.classList.add("active");
			}
		} else {
			if (evt.target !== menu) {
				hamburger.classList.remove("active");
				menu.classList.remove("active");
			}
		}
	});

	window.addEventListener("scroll", () => {
		if (window.scrollY > 100) {
			header.classList.add("active");
		} else {
			header.classList.remove("active");
		}
	});
});
