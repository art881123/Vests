const refs = {
  form: document.getElementById("form"),
  btnSend: document.getElementById("sendOrder"),
  spanName: document.getElementById("spanName"),
  spanSize: document.getElementById("spanSize"),
  spanPhone: document.getElementById("spanPhone"),
};
console.log(refs.form);

const clearForm = () => {
  refs.form.elements.name.value = "";
  refs.form.elements.size.value = "";
  refs.form.elements.phone.value = "";
};

const changeLocation = (name, size, phone) => {
  console.log((window.location.pathname = "/order.html"));
  console.log(refs.spanName);
  refs.spanName.textContent = name;
  refs.spanSize.textContent = size;
  refs.spanPhone.textContent = phone;
};

const onSubmit = (e) => {
  e.preventDefault();
  const name = `name: ${refs.form.elements.name.value}`;
  const size = `size: ${refs.form.elements.size.value}`;
  const phone = `tel ${refs.form.elements.phone.value}`;
  fetch(
    `https://api.telegram.org/bot5852273758:AAEZkD4kXtvBJfsquWAv5wIVODU4rybToe4/sendMessage?chat_id=-674095525&parse_mode=html&text=${name}%0A${size}%0A${phone}`,
    {
      method: "POST",
    }
  )
    .then(clearForm())
    .then(changeLocation())
    .then(console.log("done"));
};
refs.btnSend.addEventListener("click", onSubmit);
