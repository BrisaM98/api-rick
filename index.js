//se define una función que recibe un callback para obtener los datos de la API
function getCharacters (done) {

    //se hace la petición a la API de Rick and Morty para obtener los personajes
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    //se convierte la respuesta a formato JSON para poder trabajar con los datos
        .then (response => response.json())
        .then (data => {
            done (data)
            console.log(data);
            //se muestra el arreglo para mostrar el nombre de cada personaje en la consola
            data.results.forEach(personaje => {
                console.log(personaje.name);
            });
        });
}

// se llama la función y se procesa la información en el objeto 'data'
getCharacters (data => {
  // se recorre el arreglo de los personajes para crear una tarjeta por cada uno
  data.results.forEach(personaje => {

    // se crea un fragmento de HTML donde se insertará al personaje
    // se usa el article para agrupar la información de cada personaje individualmente
    // se inserta la imagen del personaje usando la URL que viene de la API
    // y se muestra el nombre y estado del personaje
    const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
    `);

    // se selecciona el contenedor y se agrega la tarjeta del personaje que se acaba de crear
    const main = document.querySelector("main");
    main.append(article);
  });
});