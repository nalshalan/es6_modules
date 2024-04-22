import Wishlist from "./wishlist.js";

const form = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeBtn = document.querySelector("#removeBtn");
const wishlistUl = document.querySelector("#wishlistUl");

const wishlist = new Wishlist();

function showCarDetails(car) {
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    while(wishlistUl.firstChild) {
        wishlistUl.removeChild(wishlistUl.firstChild);
    }

    wishlist.list.forEach(car => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        wishlistUl.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();
    if(makeInput.value && modelInput.value && yearInput.value) {
        wishlist.add(makeInput.value, modelInput.value, yearInput.value);
        updateDOMList();
    } else {
        console.log("All input fields must be filled out.");
    }
}

function removeCar() {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeBtn.disabled = true;
}

form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);