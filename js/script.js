var linkFeedback = document.querySelector(".feedback-link");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = document.querySelector(".close-feedback");
var nameFeedback = popupFeedback.querySelector(".feedback-name");
var emailFeedback = popupFeedback.querySelector(".feedback-post");
var textFeedback = popupFeedback.querySelector(".feedback-textarea");
var formFeedback = popupFeedback.querySelector(".feedback-form");
var storageName = localStorage.getItem("nameFeedback");
var storageEmail = localStorage.getItem("emailFeedback");
var isStorageSupport = true;
var storage = "";

var clickBuyItem = document.querySelectorAll(".buy-item");
var addToCart = document.querySelector(".order-status");
var closeOrder = document.querySelector(".close-order");

var clickMap = document.querySelector(".map");
var popupMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".close-map");

var focusDeliveryLink = document.querySelector(".delivery-link");
var focusWarrantyLink = document.querySelector(".warranty-link");
var focusCreditLink = document.querySelector(".credit-link");
var deliverySlide = document.querySelector(".delivery-slide");
var warrantySlide = document.querySelector(".warranty-slide");
var creditSlide = document.querySelector(".credit-slide");

// popup Добавлено в корзину
clickBuyItem.forEach(function (entry) {
  entry.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCart.classList.remove("close-cart");
    addToCart.classList.add("modal-show-cart");
  });
});

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToCart.classList.add("close-cart");
  setTimeout (function(){
    addToCart.classList.remove("modal-show-cart");
  }, 500);
});

// popup  Обратная связь
linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show-feedback");
  nameFeedback.focus();
  if (storageName) {
    nameFeedback.value = storageName;
    emailFeedback.focus();
  }
  if (storageEmail) {
    emailFeedback.value = storageEmail;
    textFeedback.focus();
  }
});

formFeedback.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !emailFeedback.value || !textFeedback.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("fields-error");

    setTimeout(function () {
      popupFeedback.classList.add("fields-error");
    }, 100);

  } else if (isStorageSupport) {
    localStorage.setItem("nameFeedback", nameFeedback.value);
    localStorage.setItem("emailFeedback", emailFeedback.value);
  }
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show-feedback");
  popupFeedback.classList.remove("fields-error");
});

try {
  storage = localStorage.getItem("storageName");
} catch (err) {
  isStorageSupport = false;
}

// popup Добавлено в корзину
clickBuyItem.forEach(function (entry) {
  entry.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCart.classList.remove("close-cart");
    addToCart.classList.add("modal-show-cart");
  });
});

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToCart.classList.add("close-cart");
  setTimeout (function(){
    addToCart.classList.remove("modal-show-cart");
  }, 500);
});

//popup Карта
clickMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show-map");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show-map");
});

// slider Сервисы
focusDeliveryLink.addEventListener("focus", function (evt) {
  evt.preventDefault();
  warrantySlide.classList.remove("modal-show");
  creditSlide.classList.remove("modal-show");
  deliverySlide.classList.add("modal-show");
});
focusWarrantyLink.addEventListener("focus", function (evt) {
  evt.preventDefault();
  focusDeliveryLink.classList.remove("servise-current");
  deliverySlide.classList.remove("modal-show");
  creditSlide.classList.remove("modal-show");

  warrantySlide.classList.add("modal-show");
});
focusCreditLink.addEventListener("focus", function (evt) {
  evt.preventDefault();
  focusDeliveryLink.classList.remove("servise-current");
  deliverySlide.classList.remove("modal-show");
  warrantySlide.classList.remove("modal-show");
  creditSlide.classList.add("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-show-feedback")) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-show-feedback");
      popupFeedback.classList.remove("fields-error");
    }
    if (popupMap.classList.contains("modal-show-map")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show-map");
    }
    if (addToCart.classList.contains("modal-show-cart")) {
      evt.preventDefault();
      addToCart.classList.add("close-cart");
      setTimeout (function(){
        addToCart.classList.remove("modal-show-cart");
      }, 500);
    }
  }
});
