// Масив послуг
const services = [
  { name: 'Кава еспресо', price: 50 },
  { name: 'Капучино', price: 70 },
  { name: 'Чай зелений', price: 40 },
  { name: 'Чай чорний', price: 40 },
  { name: 'Десерт чизкейк', price: 90 },
  { name: 'Круасан', price: 60 },
  { name: 'Кава з собою', price: 55 }
];

let total = 0;

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("services-list");
  if(list){
    services.forEach((service, index) => {
      const div = document.createElement("div");
      div.classList.add("service-item");
      div.innerHTML = `
        <h3>${service.name}</h3>
        <p>Ціна: ${service.price} грн</p>
        <button onclick="addToCart(${index})">Додати</button>
      `;
      list.appendChild(div);
    });
  }

  const form = document.getElementById("contact-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("form-response").innerText = "Дякуємо за повідомлення! Ми скоро зв'яжемося з вами.";
      console.log({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
      });
      form.reset();
    });
  }
});

function addToCart(index){
  total += services[index].price;
  document.getElementById("cart-total").innerText = "Сума: " + total + " грн";
}
