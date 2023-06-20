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
      image: "sporty-smartwatch. jpg",
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

for(let i of products.data) {
//Create card
    let card = document.createElement("div")
//Adding category and classs
card.classList.add("card", "i.category");

//img div 
let imgContainer= document.createElement("div");
imgContainer.classList.add("image-container");

//img tag

let image= document.createElement("img");
image.setAttribute("src",i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
//container
let container = document.createElement("div")
container.classList.add("container")
//product name 
let name = document.creayeElement("h5");
name.classList.add("product-name")
name.innerText = i.productName.toUpperCase();
container.appendChild(name);

//price

let price = document.createElement("h6")
price.innerText =i.price;
container.appendChild(""+ price);



card.appendChild(container);


document.getElementById("products").appendChild(card);






}
