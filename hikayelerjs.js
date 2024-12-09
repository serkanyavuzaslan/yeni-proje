// HİKAYELERDEKİ ONAYLA BEĞENME KISMI

// Butonları seç
const tickButton = document.getElementById("tick-button");
const heartButton = document.getElementById("heart-button");

// Sayfa yüklendiğinde tıklanmış durumlarını kontrol et
document.addEventListener("DOMContentLoaded", function () {
  // Tick butonun durumu
  const isTickClicked = localStorage.getItem("tickButtonClicked");
  if (isTickClicked === "true") {
    tickButton.classList.add("active");
  }

  // Heart butonun durumu
  const isHeartClicked = localStorage.getItem("heartButtonClicked");
  if (isHeartClicked === "true") {
    heartButton.classList.add("active");
  }
});

// Tick butona tıklama olayını ekle
tickButton.addEventListener("click", function () {
  if (tickButton.classList.contains("active")) {
    tickButton.classList.remove("active");
    localStorage.setItem("tickButtonClicked", "false");
  } else {
    tickButton.classList.add("active");
    localStorage.setItem("tickButtonClicked", "true");
  }
});

// Heart butona tıklama olayını ekle
heartButton.addEventListener("click", function () {
  if (heartButton.classList.contains("active")) {
    heartButton.classList.remove("active");
    localStorage.setItem("heartButtonClicked", "false");
  } else {
    heartButton.classList.add("active");
    localStorage.setItem("heartButtonClicked", "true");
  }
});

// İKİNCİ

// Butonları seç
const tickikiButton = document.getElementById("tickiki-button");
const heartikiButton = document.getElementById("heartiki-button");

// Sayfa yüklendiğinde tıklanmış durumlarını kontrol et
document.addEventListener("DOMContentLoaded", function () {
  // Tick butonun durumu
  const isTickikiClicked = localStorage.getItem("tickikiButtonClicked");
  if (isTickikiClicked === "true") {
    tickikiButton.classList.add("active");
  }

  // Heart butonun durumu
  const isHeartikiClicked = localStorage.getItem("heartikiButtonClicked");
  if (isHeartikiClicked === "true") {
    heartikiButton.classList.add("active");
  }
});

// Tick butona tıklama olayını ekle
tickikiButton.addEventListener("click", function () {
  if (tickikiButton.classList.contains("active")) {
    tickikiButton.classList.remove("active");
    localStorage.setItem("tickikiButtonClicked", "false");
  } else {
    tickikiButton.classList.add("active");
    localStorage.setItem("tickikiButtonClicked", "true");
  }
});

// Heart butona tıklama olayını ekle
heartikiButton.addEventListener("click", function () {
  if (heartikiButton.classList.contains("active")) {
    heartikiButton.classList.remove("active");
    localStorage.setItem("heartikiButtonClicked", "false");
  } else {
    heartikiButton.classList.add("active");
    localStorage.setItem("heartikiButtonClicked", "true");
  }
});




// ÜÇÜNCÜ

// Butonları seç
const tickucButton = document.getElementById("tickuc-button");
const heartucButton = document.getElementById("heartuc-button");

// Sayfa yüklendiğinde tıklanmış durumlarını kontrol et
document.addEventListener("DOMContentLoaded", function () {
  // Tick butonun durumu
  const isTickucClicked = localStorage.getItem("tickucButtonClicked");
  if (isTickucClicked === "true") {
    tickucButton.classList.add("active"); 
  }

  // Heart butonun durumu
  const isHeartucClicked = localStorage.getItem("heartucButtonClicked");
  if (isHeartucClicked === "true") {
    heartucButton.classList.add("active");
  }
});

// Tick butona tıklama olayını ekle
tickucButton.addEventListener("click", function () {
  if (tickucButton.classList.contains("active")) {
    tickucButton.classList.remove("active");
    localStorage.setItem("tickucButtonClicked", "false");
  } else {
    tickucButton.classList.add("active");
    localStorage.setItem("tickucButtonClicked", "true");
  }
});

// Heart butona tıklama olayını ekle
heartucButton.addEventListener("click", function () {
  if (heartucButton.classList.contains("active")) {
    heartucButton.classList.remove("active");
    localStorage.setItem("heartucButtonClicked", "false");
  } else {
    heartucButton.classList.add("active");
    localStorage.setItem("heartucButtonClicked", "true");
  }
});



// DÖRDÜNCÜ

// Butonları seç
const tickdortButton = document.getElementById("tickdort-button");
const heartdortButton = document.getElementById("heartdort-button");

// Sayfa yüklendiğinde tıklanmış durumlarını kontrol et
document.addEventListener("DOMContentLoaded", function () {
  // Tick butonun durumu
  const isTickdortClicked = localStorage.getItem("tickdortButtonClicked");
  if (isTickdortClicked === "true") {
    tickdortButton.classList.add("active");
  }

  // Heart butonun durumu
  const isHeartdortClicked = localStorage.getItem("heartdortButtonClicked");
  if (isHeartdortClicked === "true") {
    heartdortButton.classList.add("active");
  }
});

// Tick butona tıklama olayını ekle
tickdortButton.addEventListener("click", function () {
  if (tickdortButton.classList.contains("active")) {
    tickdortButton.classList.remove("active");
    localStorage.setItem("tickdortButtonClicked", "false");
  } else {
    tickdortButton.classList.add("active");
    localStorage.setItem("tickdortButtonClicked", "true");
  }
});

// Heart butona tıklama olayını ekle
heartdortButton.addEventListener("click", function () {
  if (heartdortButton.classList.contains("active")) {
    heartdortButton.classList.remove("active");
    localStorage.setItem("heartdortButtonClicked", "false");
  } else {
    heartdortButton.classList.add("active");
    localStorage.setItem("heartdortButtonClicked", "true");
  }
});



