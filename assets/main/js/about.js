const iconClasses = [
  // Dasturlash tillari va brendlar
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-js",
  "fa-brands fa-python",
  "fa-brands fa-java",
  "fa-brands fa-php",
  "fa-brands fa-react",
  "fa-brands fa-node-js",
  "fa-brands fa-git-alt",
  "fa-brands fa-github",
  "fa-brands fa-linux",
  "fa-brands fa-docker",
  "fa-brands fa-internet-explorer",
  "fa-brands fa-yandex-international",
  "fa-brands fa-figma",
  "fa-brands fa-sketch",
  "fa-brands fa-google",
  "fa-brands fa-apple",
  "fa-brands fa-wordpress",
  "fa-brands fa-windows",
  "fa-brands fa-stack-overflow",
  "fa-brands fa-android",
  "fa-brands fa-codepen",
  "fa-brands fa-vuejs",
  "fa-brands fa-square-steam",
  "fa-brands fa-swift",
  "fa-brands fa-sass",

  // Ijtimoiy tarmoqlar
  "fa-brands fa-telegram",
  "fa-brands fa-instagram",
  "fa-brands fa-twitter",
  "fa-brands fa-facebook",
  "fa-brands fa-linkedin",
  "fa-brands fa-youtube",
  "fa-brands fa-tiktok",
  "fa-brands fa-whatsapp",
  "fa-brands fa-skype",
  "fa-brands fa-viber",
  "fa-brands fa-vk",
  "fa-brands fa-meta",
];

const container = document.getElementById("hexContainer");
const totalHexes = 119;

for (let i = 0; i < totalHexes; i++) {
  const hex = document.createElement("div");
  hex.className = "hex";
  const randomIcon =
    iconClasses[Math.floor(Math.random() * iconClasses.length)];
  hex.innerHTML = `<i class="${randomIcon}"></i>`;
  container.appendChild(hex);
}

const hexes = document.querySelectorAll(".hex");

// Takrorlanmaydigan tasodifiy indexlar olish funksiyasi
function getRandomIndexes(length, count) {
  const indexes = new Set();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * length));
  }
  return Array.from(indexes);
}

// Har 2 soniyada 3 ta tasodifiy hexagonni "active" qilish
setInterval(() => {
  hexes.forEach((hex) => hex.classList.remove("active"));

  const activeIndexes = getRandomIndexes(hexes.length, 3);
  activeIndexes.forEach((index) => {
    hexes[index].classList.add("active");
  });
}, 2000);

const textEl = document.getElementById("animated-text");
const text = textEl.innerText;
textEl.innerHTML = "";

// Harflarni span ichiga o'raymiz
const spans = [...text].map((char, i) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  textEl.appendChild(span);
  return span;
});

const duration = 0.4; // har bir harfga animatsiya uzunligi (soniyada)
const delayBetween = 0.1; // harflar orasidagi kechikish (s)
const totalDuration = spans.length * delayBetween + duration;

function animateWave() {
  spans.forEach((span, i) => {
    span.style.animation = "none";
    void span.offsetWidth; // force reflow
    span.style.animation = `waveColor ${duration}s ease-in-out`;
    span.style.animationDelay = `${i * delayBetween}s`;
  });
}

animateWave();
setInterval(animateWave, totalDuration * 1000);

const iconList = [
  "fa-brands fa-python",
  "fa-brands fa-js",
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-github",
  "fa-brands fa-docker",
  "fa-brands fa-react",
  "fa-brands fa-vuejs",
  "fa-brands fa-node-js",
  "fa-brands fa-telegram",
  "fa-brands fa-linkedin",
  "fa-brands fa-instagram",
];

const hexGrid = document.getElementById("aboutHexGrid");

// 66 ta hex yaratish
for (let i = 0; i < 66; i++) {
  const hex = document.createElement("div");
  hex.classList.add("about_hex");
  const icon = document.createElement("i");
  icon.className = iconList[Math.floor(Math.random() * iconList.length)];
  hex.appendChild(icon);
  hexGrid.appendChild(hex);
}

// Funksiya: takrorlanmaydigan tasodifiy indexlar olish
function getRandomIndexes(arrayLength, count) {
  const indexes = new Set();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * arrayLength));
  }
  return Array.from(indexes);
}

// Animatsiya: har 2 soniyada 3 ta tasodifiy hex aktiv bo‘ladi
setInterval(() => {
  const hexes = document.querySelectorAll(".about_hex");

  // Hammasini tozalaymiz
  hexes.forEach((hex) => {
    hex.classList.remove("active");
    hex.querySelector("i").style.color = "#000"; // Default icon rangi
  });

  // 3 tasodifiy hex faollashtiramiz
  const activeIndexes = getRandomIndexes(hexes.length, 3);
  activeIndexes.forEach((i) => {
    const selected = hexes[i];
    selected.classList.add("active");
    selected.querySelector("i").style.color = "#000"; // Active icon rangi
  });
}, 2000);

// =======================================================================================

const skills = document.querySelectorAll(".circle-container");

const animateProgress = (container) => {
  const circle = container.querySelector(".progress");
  const text = container.querySelector(".percentage");
  const target = +container.dataset.percentage;

  let current = 0;
  const update = () => {
    const offset = 314 - (314 * current) / 100;
    circle.style.strokeDashoffset = offset;
    text.textContent = `${current}%`;
    current++;
    if (current <= target) {
      requestAnimationFrame(update);
    }
  };
  update();
};

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgress(entry.target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

skills.forEach((skill) => observer.observe(skill));

// ===============================================================================


const birthYear = 1993;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.getElementById("myAge").textContent = age;

// =======================================================================================