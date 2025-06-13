earth = document.querySelector('.earth')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

earth.addEventListener('click', ()=>{
   rightNav.classList.toggle('v-class');
   navList.classList.toggle('v-class');
   navbar.classList.toggle('h-nav');
})


function home()
{
    location.replace("Home.html");
}


function Donation()
{
    location.replace("Home.html");
}


function I(){
    document.getElementById('1').src="Images/download.jpg";
    document.getElementById('2').src="Images/01.jpg";
    document.getElementById('3').src="Images/02.jpg";
    document.getElementById('4').src="Images/03.jpg";
    document.getElementById('5').src="Images/04.jpg";
    document.getElementById('6').src="Images/05.jpg";
    document.getElementById('7').src="Images/06.jpg";
    document.getElementById('8').src="Images/07.jpg";
    document.getElementById('9').src="Images/08.jpg";
    }

function Videos()
{
    location.replace("Home.html");
}

function About()
{
    location.replace("Home.html");
}

