// KESİF KISMI

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
