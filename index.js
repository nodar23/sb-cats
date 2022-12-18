console.log("work");

const $wr = document.querySelector('[data-wr]');

const getCatHTML = (cat) => {
    return `        
    <div class="card mb-2" style="width: 18rem;">
    <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
    <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">
        ${cat.description}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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