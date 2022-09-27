const qrDiv = document.getElementById("qrcode");
const groupId = new URLSearchParams(window.location.search);
let id = "";

for (const param of groupId) {
    id = param;
}

const code = new QRCode(qrDiv, {
    text: id[1],
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
});
