

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
                console.log('Data Fatched')
                createDomElements(json)
            })



function createDomElements(data){console.log(data)
    data.forEach(product=>{
        createElement(product)
    })
}            

function createElement(product){
    
    let mainProductDiv = document.querySelector(".products")
    let productDiv = document.createElement('div')
    productDiv.classList.add("card", "border", "border-black", "shadow-2xl", "w-44", "p-4", "mt-6", "rounded-lg")
    let productImage = document.createElement('img')
    productImage.src = product.image;
    productImage.classList.add("rounded", "mb-4")
    let productName = document.createElement('h4')
    productName.classList.add("font-bold", "text-xl")
    let productDiscription = document.createElement('p')
    let productPrice = document.createElement('p')



    productName.innerHTML = product.title;
    productDiscription.innerHTML = product.description;
    productPrice.innerHTML = product.price;


    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDiscription);
    productDiv.appendChild(productPrice);

    mainProductDiv.appendChild(productDiv);


}

