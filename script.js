const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Мен IT саласында дамып, жаңа жобалар жасағым келеді! 🚀";
    button.textContent = "Рақмет!";
});
