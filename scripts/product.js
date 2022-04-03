
    let cart = JSON.parse(localStorage.getItem("Clicked_items"))||[]
    console.log(cart.name)
    let image = document.getElementById("image").src = cart.imgUrl1;
    let brand = document.getElementById("brandname").innerText = cart.brand
    let name = document.getElementById("productdetails").innerText = cart.name
    let details = document.getElementById("prodictprice").innerText = `Price: $ ${cart.price}`

let btn=document.getElementById("btn")
btn.onclick=()=>{
    let arr=JSON.parse(localStorage.getItem("Cart_Items"))||[]
                arr.push(data)

                 localStorage.setItem("Cart_Items",JSON.stringify(arr))
                alert("Succesfully added")   

}