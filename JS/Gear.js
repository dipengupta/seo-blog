var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
	showDivs(slideIndex += n);
}

function showDivs(n) 
{
	var i;
	var x = document.getElementsByClassName("pics");

	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}

	for (i = 0; i < x.length; i++) 
	{
		x[i].style.display = "none";  
	}

	x[slideIndex-1].style.display = "block";

	if (x[slideIndex-1].id == "g1")
		guitar_info_1() ;
	else if (x[slideIndex-1].id == "a1")
		amp_info_1() ;
	else if (x[slideIndex-1].id == "g2")
		guitar_info_2() ;
	else if (x[slideIndex-1].id == "a2")
		amp_info_2() ;
	else if (x[slideIndex-1].id == "p1")
		proc_info() ;
	else if (x[slideIndex-1].id == "g3")
		guitar_info_3() ;
	else if (x[slideIndex-1].id == "b1")
		bass_info() ;
}


function guitar_info_1()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2009-2016 : Hobmer Acoustic Guitar" ;
}

function amp_info_1()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2009 : Marshall MG 10 CD" ;
}

function guitar_info_2()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2010 : Ibanez SA 220 FM" ;
}

function amp_info_2()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2010 : Marshall MG 30 DFX" ;
}

function proc_info()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2010 : Digitech RP 255" ;
}


function guitar_info_3()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2016 : Epiphone Les Paul Standard" ;
}

function bass_info()
{
	var x = document.getElementById("header") ;
	x.innerHTML = "2016 : Fender Squier Jazz V" ;
}
