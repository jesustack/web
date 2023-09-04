// Cuando el usuario hace scroll 20px hacia abajo desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// Cuando el usuario hace clic en el botón, vuelve arriba de la página
function topFunction() {
	document.body.scrollTop = 0; // Para Safari
	document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
