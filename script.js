// Toggle the navbar on menu button click
document.querySelector("#menu-btn").onclick = () => {
  document.querySelector(".navbar").classList.toggle('active');
  document.querySelector("#menu-btn").classList.toggle('fa-times');
};

// Hide navbar when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.onclick = () => {
      document.querySelector(".navbar").classList.remove('active');
      document.querySelector("#menu-btn").classList.remove('fa-times');
  };
});

// Hide navbar when clicking outside of it
document.addEventListener('click', (e) => {
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");
  
  // Check if the clicked element is outside the navbar and menu button
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
      navbar.classList.remove('active');
      menuBtn.classList.remove('fa-times');
  }
});







// hide and show for btn =================================================


function toggleHide(){
    let pera = document.getElementById('pera');
    if(pera.style.display === 'none'){
      pera.style.display = 'block';
    }
    else{
      pera.style.display = 'none';
    }
  }
  
