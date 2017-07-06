var linkForm = document.querySelector(".about-us-map-btn");
var contacts = document.querySelector(".about-us-form");
var linkMap = document.querySelector(".about-us-map-img");
var mapPopup = document.querySelector(".modal-map");
var linksBuy = document.querySelectorAll(".catalog-items-item-action-buy");
var addCartPopup = document.querySelector(".page-add-cart");
var formClose = document.querySelector(".about-us-form-close");
var mapClose = document.querySelector(".modal-map-close");
var addCartClose = document.querySelector(".page-add-cart-close");

if (linkForm && linkMap) {
  linkForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    contacts.classList.remove("js-form-hidden");
  });

  formClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    contacts.classList.add("js-form-hidden");
  });

  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("js-form-hidden");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("js-form-hidden");
  });
} else {};

for (var i = 0; i < linksBuy.length; i++) {
  if (linksBuy[i].nextSibling.length !== null) {
    linksBuy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      addCartPopup.classList.remove("js-form-hidden");
    });

    addCartClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      addCartPopup.classList.add("js-form-hidden");
    });
  }
}
