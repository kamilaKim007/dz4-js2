let menu = document.querySelector('.menu')
let row = document.querySelector('.row')


const getProducts = () => {
    fetch(`https://fakestoreapi.com/products?limit=2`)
    .then((res) => res.json())
    .then((res) => {
       res.forEach((item) => {
           row.innerHTML += `
           <div class = 'card'>
           <img class = 'cardImg' src='${item.image}' alt = ''>
           <h2 class = 'cardTitle'>${item.title}</h2>
           <p class = 'cardSubtitle'>${item.description}</p>
           <p class = ' cardPrice'> price: ${item.price}</p>
           <p class = 'cardRating'> rating: ${item.rating.rate}</p>
           </div>
           `
       })
    })
}
getProducts('all')


getCategories()
