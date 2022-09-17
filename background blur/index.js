const containerE1 = document.querySelector(".container");

const btnE1 = document.querySelector("btn");

const popupContainerE1 = document.querySelector(".popup-container");

const closeIconE1 = document.querySelector(".close-icon");

btnE1.addEventListener("click", () => {
containerE1.classList.add("active");
popupContainerE1.classList.remove("active");
});


closeIconE1.addEventListener("click", () => {
      containerE1.classList.remove("active");
popupContainerE1.classList.add("active");
});



btnE1.addEventListener("mouseover",(event) => {
      const x = (event.pageX-btnE1.offsetLeft);
      const y = (event.pageY-btnE1.offsetTop);

      btnE1.style.setProperty("--xPos", x + "px")
      btnE1.style.setProperty("--yPos", y + "px")
});