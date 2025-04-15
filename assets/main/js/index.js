const iconClasses = [
    // Dasturlash tillari va brendlar
    "fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js", "fa-brands fa-python",
    "fa-brands fa-java", "fa-brands fa-php", "fa-brands fa-react", "fa-brands fa-node-js",
    "fa-brands fa-git-alt", "fa-brands fa-github", "fa-brands fa-linux", "fa-brands fa-docker",
    "fa-brands fa-internet-explorer", "fa-brands fa-yandex-international", "fa-brands fa-figma",
    "fa-brands fa-sketch", "fa-brands fa-google", "fa-brands fa-apple", "fa-brands fa-wordpress",
    "fa-brands fa-windows", "fa-brands fa-stack-overflow", "fa-brands fa-android", "fa-brands fa-codepen",
    "fa-brands fa-vuejs", "fa-brands fa-square-steam", "fa-brands fa-swift", "fa-brands fa-sass",

    // Ijtimoiy tarmoqlar
    "fa-brands fa-telegram", "fa-brands fa-instagram", "fa-brands fa-twitter",
    "fa-brands fa-facebook", "fa-brands fa-linkedin", "fa-brands fa-youtube",
    "fa-brands fa-tiktok", "fa-brands fa-whatsapp", "fa-brands fa-skype",
    "fa-brands fa-viber", "fa-brands fa-vk", "fa-brands fa-meta"
];

const container = document.getElementById('hexContainer');
const totalHexes = 125;

for (let i = 0; i < totalHexes; i++) {
    const hex = document.createElement('div');
    hex.className = 'hex';
    const randomIcon = iconClasses[Math.floor(Math.random() * iconClasses.length)];
    hex.innerHTML = `<i class="${randomIcon}"></i>`;
    container.appendChild(hex);
}