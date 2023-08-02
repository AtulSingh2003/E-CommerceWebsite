const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentImg = document.querySelector(".productImg");
const currentTitle = document.querySelector(".productTitle");
const currentPrice = document.querySelector(".productPrice");
const currentColors = document.querySelectorAll(".color");
const currentSize = document.querySelectorAll(".size");


const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

let choosenProduct = product[0];

menuItems.forEach((items, index) => {
    items.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = product[index];

        currentImg.src = choosenProduct.colors[0].img;
        
        currentTitle.textContent = choosenProduct.title;

        currentPrice.textContent = `$` + choosenProduct.price;

        currentColors.forEach((color , index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentColors.forEach((color , index) =>{
    color.addEventListener("click", ()=>{
        currentImg.src = choosenProduct.colors[index].img;
    })
});

currentSize.forEach((size) =>{
    size.addEventListener("click",() =>{

        currentSize.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })

        size.style.backgroundColor = "black";
    size.style.color = "white";    })
})

const productBtn = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const closeBtn = document.querySelector(".close");

productBtn.addEventListener("click",() =>{
    payment.style.display = "flex";
})

closeBtn.addEventListener("click",() =>{
    payment.style.display = "none";
})
