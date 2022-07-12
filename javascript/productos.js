const contenedorProductos = document.querySelector('.container .row')

console.log(contenedorProductos);

stock.forEach((producto) => {
    const article = document.createElement('article')
    article.classList.add('card', 'col-4', 'm-2')
    article.id = `${producto.id}`
    
    article.innerHTML = `
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.name} </h5>
            <p class="card-text">precio: ${producto.precio} </p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
        `
    contenedorProductos.append(article)
})