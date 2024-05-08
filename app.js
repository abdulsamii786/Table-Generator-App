function getValue() {
  let number = document.querySelector("#number");
  let range = document.querySelector("#range");
  let text = document.querySelector("#text");
  for (let i = 1; i <= range.value; i++) {
    let result = `${number.value} x ${i} = ${number.value * i}\n`;
    text.innerText += result;
  }
  if (number.value === "" && range.value === "") {
    Swal.fire({
      title: "Error",
      text: "Please enter valid input.",
      icon: "warning",
    });
  }
  number.value = "";
  range.value = "";
}
