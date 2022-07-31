let map;
let marker;
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
