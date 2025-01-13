// Punto1: Alternar borde rojo
const image = document.getElementById("toggle-image");

image.addEventListener("click", () => {
    console.log("Imagen clickeada"); // Depuración
    if (image.classList.contains("red-border")) {
        image.classList.remove("red-border");
    } else {
        image.classList.add("red-border");
    }
});

// Punto2: Verificar cantidad de stickers
const buttonStickers = document.getElementById("check-stickers");
const resultStickers = document.getElementById("result");

buttonStickers.addEventListener("click", () => {
    console.log("Botón clickeado"); // Depuración

    // Leer valores de los inputs
    const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    console.log(`Valores leídos: Sticker1 = ${sticker1}, Sticker2 = ${sticker2}, Sticker3 = ${sticker3}`); 

    const total = sticker1 + sticker2 + sticker3;

    // Mostrar el resultado
    if (total <= 10) {
        resultStickers.textContent = `Llevas ${total} stickers.`;
    } else {
        resultStickers.textContent = "Puedes llevar máximo 10 stickers.";
    }
});

// Punto3: Verificar contraseña
const buttonPassword = document.getElementById('check-password');
const resultPassword = document.getElementById('password-result');

buttonPassword.addEventListener('click', () => {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    const password = digit1 + digit2 + digit3;

    if (password === '911') {
        resultPassword.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultPassword.textContent = 'Password 2 correcto';
    } else {
        resultPassword.textContent = 'Password incorrecto';
    }
});
