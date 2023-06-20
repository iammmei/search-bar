let products = {
  data: [
    {
      productName: "Regular white shirt ",
      category: "Topwear",
      price: "30",
      image: "whiteshirt.jfif",
    },
    {
      productName: "Beige Short Skirt  ",
      category: "Bottomwear",
      price: "30",
      image: "beigeshort.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },

    {
      productName: "Black Leather Jacket",
      category: "Topwear",
      price: "29",
      image: "black-leather.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create card
  let card = document.createElement("div");
  //Adding category and classs and stay hidden initiallyy
  card.classList.add("card", i.category, "hide");

  //img div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  //img tag

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //price

  let price = document.createElement("h6");
  price.innerText = i.price;
  container.appendChild(document.createTextNode("€" + price.innerText));
  // container.appendChild("€" + price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}

//parameter passed from  button (parameter same as category)
function filterProduct(value) {
  //button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards

  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //check if element contains category class
      if (element.classList.contains(value)) {
        //displays element based on category
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  // loop through all elements
  elements.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
