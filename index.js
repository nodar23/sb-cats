console.log("work");

const $wr = document.querySelector('[data-wr]');

const getCatHTML = (cat) => {
    return `        
    <div class="card mb-2 mx-2" style="width: 18rem;">
    <img src="${cat.image}" class="card-img-top" alt="${cat.name}" height="250">
    <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">
        ${cat.description}
        </p>
        <button type="button" class="btn btn-primary">more</button>
        <button type="button" class="btn btn-danger">delete</button>
    </div>
</div>
`
}

fetch('https://cats.petiteweb.dev/api/single/nodar23/show/')
    .then((res) => res.json())
    .then((data) => {

        $wr.insertAdjacentHTML('afterbegin', data.map(cat => getCatHTML(cat)).join(''))

        console.log({ data })

    })

// const showModalCat = (cat) => `<div data-card-show>
//     <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
  
//     <div class="card__info"> 
//       <h3 class="card-title mt-2">${cat.name}</h3>
//       <p class="card-text text-center p-3">${cat.description}</p>
//     </div>
    
// </div>`;

