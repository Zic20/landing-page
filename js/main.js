let map;
let marker;
const features = document.querySelectorAll('.item');
let activeFeature = 0;

function initMap() {
  // my location
  const location = { lat: 6.2692796412937986, lng: -10.724455078483835 };
  map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 14,
    center: location,
  });

  marker = new google.maps.Marker({ position: location, map: map });
}

window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  let links = document.querySelectorAll("#navbar ul li a");
  if (window.scrollY <= 150) {
    // navbar.style.background = "#F0EDEE";
    navbar.style.background = "#FEF9EF";
    navbar.style.color = "black";
    links.forEach((link) => {
      link.style.color = "black";
    });
  } else {
    navbar.style.background = "black";
    navbar.style.color = "#F0EDEE";
    links.forEach((link) => {
      link.style.color = "#F0EDEE";
    });
  }
});

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});


if(document.getElementById('slider-right')){
  document.getElementById('slider-right').addEventListener('click',()=>{
    if(activeFeature >= features.length -1){
      activeFeature = 0;
    }else{
      activeFeature++;
    }
    features.forEach(feature =>{
      feature.classList.remove('active');
    })

    features[activeFeature].classList.add('active');
  })
}

if(document.getElementById('slider-left')){
  document.getElementById('slider-left').addEventListener('click',()=>{
    if(activeFeature === 0){
      activeFeature = 1;
    }else{
      activeFeature--;
    }
    features.forEach(feature =>{
      feature.classList.remove('active');
    })

    features[activeFeature].classList.add('active');
  })
}
