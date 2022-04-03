
let url = `https://credo-project2.herokuapp.com/hairs`;

 async function getProducts() {
        try {
          let productsList = await fetchProducts(url); // expected response [{id:1, title:1, ...},{},{}...]
          renderProducts(productsList);
          console.log(productsList)
        } catch (error) {
          console.log(error);
        }
      }
      getProducts();

 function fetchProducts(url) {
        return fetch(url) // fetch the data from url provided;
          .then(function (res) {
            return res.json(); // collect all the data that comes in form of data packet and make it a single entity
          })
          .then(function (res) {
            return res; // returns the response;
          })
          .catch(function (err) {
            console.log(err);
          });
      }

       async function sortProducts() {
           console.log("sorttt")
        try {
         
          let productsList = await fetchProducts(url);
          // console.log(productsList)
          let sortCriteria = document.getElementById("sortButton").value; // "asc", "desc"
          let filterCriteria = document.getElementById("filterButton").value; //values expected : "0-50" , "51-150", ">150"
console.log(sortCriteria)
          if (sortCriteria) {
            console.log("yes")

            let updatedProductsList = productsList
             
              .sort(function sortFunction(prodA, prodB) {
                console.log("yes")
                if (sortCriteria === "asc") {
                  console.log("LTH")
                
                  return prodA.price - prodB.price;
                } else if (sortCriteria === "desc") {
                   console.log("HTL")
                    
                  return prodB.price - prodA.price;
                }
              });
               updatedProductsList.filter(filterFunction)
            renderProducts(updatedProductsList);
          } else {
            let updatedProductsList = productsList.filter(filterFunction);
            renderProducts(updatedProductsList);
          }

         
          function filterFunction(prod) {
           
            if (prod.typeofproduct === `${filterCriteria}`) {
              return prod.typeofproduct;
            }  
            //  else {
            //   return true;
            // }
          }
        } catch (error) {
          console.log("err  :  ",error);
        }
      }

      async function filterProducts() {
        try {
      
          let productsList = await fetchProducts(url); // [{},{}]
          let filterCriteria = document.getElementById("filterButton").value; //values expected : "0-50" , "51-150", ">150"
          let sortCriteria = document.getElementById("sortButton").value; //"asc", "desc"
          if (sortCriteria) {
            let updatedProductsList = productsList
              .filter(filterFunction)
              .sort(function sortFunction(prodA, prodB) {
                if (sortCriteria === "asc") {
                // console.log("LTH")
                  return prodA.price - prodB.price;
                } else if (sortCriteria === "desc") {
                  //  console.log("HTL")
                  return prodB.price - prodA.price;
                }
              });
            renderProducts(updatedProductsList);
          } else {
            let updatedProductsList = productsList.filter(filterFunction);
            renderProducts(updatedProductsList);
          }
          function filterFunction(prod) {
           
            if (prod.typeofproduct === `${filterCriteria}`) {
                
                console.log(prod.typeofproduct,":  vinu")
               
              return prod.typeofproduct;
              }
          }
        } catch (error) {
          console.log(error);
        }
      }


function renderProducts(Products) {
    console.log(Products);
     let container = document.getElementById("container1");
        container.innerHTML = "";

    Products.map(function (element) {
        //  console.log(element.price);

        var div = document.createElement("div");
        div.setAttribute("id", "eachdiv")

        let img = document.createElement("img");
        img.src = element.imageurl;
        
        

        let p1 = document.createElement("p");
        p1.innerText = element.Name;

        let p2 = document.createElement("p");
        p2.innerText = element.Brand;

        let p3 = document.createElement("p");
        p3.innerText = element.price;

        let div1 = document.createElement("div");
        div1.setAttribute("id", "button")

        let but = document.createElement("button");
        but.textContent = " Add to cart"
        but.onclick = () => {
            //
            let arr = JSON.parse(localStorage.getItem("Cart_Items")) || []
            arr.push(data)

            localStorage.setItem("Cart_Items", JSON.stringify(arr))
            alert("Succesfully added")

        };

        div1.append(but)
        div.append(img, p1, p2, p3, div1);
        img.onclick = () => {
            localStorage.setItem("Clicked_items", JSON.stringify(element))
            window.location.href = "product.html"

        }

        
       
       container.append(div);

    });
};
