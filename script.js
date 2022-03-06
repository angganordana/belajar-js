let operasi = "";
let angka1 = 0;
let angka2 = 0;
const input = document.getElementById("nilai");
const button = document.getElementsByClassName("button");
const reset = document.getElementById("clear");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (
      button[i].innerText === "+" ||
      button[i].innerText === "-" ||
      button[i].innerText === "*" ||
      button[i].innerText === "/"
    ) {
      operasi = button[i].innerText;
      angka1 = input.value;
      input.value = 0;
    } else if (button[i].innerText === "=") {
      angka2 = input.value;

      if (operasi === "+")
        input.value = parseInt(angka1) + parseInt(angka2);
      if (operasi === "-")
        input.value = parseInt(angka1) - parseInt(angka2);
      if (operasi === "*")
        input.value = parseInt(angka1) * parseInt(angka2);
      if (operasi === "/")
        input.value = parseInt(angka1) / parseInt(angka2);
    } else {
      const currentValue = parseInt(input.value);
      if (currentValue === 0) {
        input.value = button[i].innerText;
      } else {
        input.value = currentValue + button[i].innerText;
      }
    }
  });
}

reset.addEventListener("click", function () {
  operasi = "";
  angka1 = 0;
  angka2 = 0;
  input.value = 0;
});