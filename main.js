let menu = document.querySelector('.menu')
let row = document.querySelector('.row')


    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((res) => {
       res.forEach((item) => {
           row.innerHTML += `
           <div class = 'card'>
           <p class = 'name'>${item.name}</p>
           <p class = ' username'> ${item.username}</p>
           <p class = 'email'> ${item.email}</p>
           <p class = 'phone'> ${item.phone}</p>
           <p class = 'website'> ${item.website}</p>
           </div>
           `
       })
    })