let click = JSON.parse(localStorage.getItem("Clicked_items"))||[]
// console.log(cart.name)
let image = document.getElementById("image").src = click.imageurl;
let brand = document.getElementById("brandname").innerText = click.Brand
let name = document.getElementById("productdetails").innerText = click.Name
let details = document.getElementById("prodictprice").innerText = `Price: $ ${click.price}`
let type = document.getElementById("type").innerText =`Product Category: ${click.typeofproduct}`;

let btn=document.getElementById("btn")
btn.onclick=()=>{
    // let arr=JSON.parse(localStorage.getItem("Cart_Items"))||[]
    
    // let obj={
    //     image:image,
    //     brand:brand,
    //     name:Name,
    //     details:details,
    // }
    
    // arr.push(obj)
    //  localStorage.setItem("Cart_Items",JSON.stringify(arr))
            alert("Succesfully added")   

}