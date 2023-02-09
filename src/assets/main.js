// Se establece la API de la que se van a obtener los datos
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-aq-I3dnjepD7Ms9G6DN7A&part=snippet%2Cid&order=date&maxResults=9';

// Se obtiene el elemento con id 'content'
const content = null || document.getElementById('content');

// Se definen las opciones que se utilizarán para la petición HTTP
const options = {
	method: 'GET', // Método GET
	headers: {
		'X-RapidAPI-Key': '16152e71c5mshcac9a5bc7921c0ep18f358jsn6f80e53f2c1b', // Clave de la API
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' // Host de la API
	}
};

// Función para hacer una petición a la API y obtener los datos en formato JSON
async function fetchData (urlApi) {
    // Se hace la petición a la API con los argumentos 'urlApi' y 'options'
    const response = await fetch(urlApi, options);  
    // Se procesa la respuesta en formato JSON
    const data = await response.json();
    // Se devuelve la data obtenida
    return data;
}

// Se ejecuta la función principal de manera asíncrona
(async () => {
    try {
        // Se obtienen los videos de la API
        const videos = await fetchData(API);
        // Se crea una variable que tendrá la vista (el HTML) que se mostrará en el contenido
        let view = `
            ${videos.items.map(video =>`
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}    
        `;
        // Se muestra la vista en el contenido
        content.innerHTML = view;
    } catch (error) {
        // En caso de haber un error, se muestra en la consola
        console.log(error);
    }
})();

// El siguiente código es un ejemplo de código JavaScript que hace una llamada a una API de YouTube utilizando el método fetch y permite mostrar en una página web los últimos 9 vídeos subidos a un canal de YouTube específico.

// Primero, se establece una constante llamada API que almacena la URL de la API de YouTube. La URL incluye los parámetros necesarios para realizar la búsqueda, como el canal específico que se desea buscar y el número máximo de resultados que se desea obtener.

// La constante "content" almacena un elemento HTML con el ID "content", que es donde se colocará el contenido resultante de la llamada a la API. Si no se encuentra ningún elemento con ese ID, la constante "content" se establecerá en null.

// La constante "options" es un objeto que almacena la configuración para la llamada a la API. Incluye el método "GET" para la solicitud y los encabezados "X-RapidAPI-Key" y "X-RapidAPI-Host" que se requieren para la API.

// La función "fetchData" es una función asíncrona que acepta una URL y devuelve los datos resultantes de la llamada a la API. La función usa el método fetch para hacer la llamada y luego usa el método "json" para obtener los datos en un formato legible.

// Finalmente, se utiliza una función autoinvocada (async () => {})() para realizar la llamada a la API y mostrar los resultados en la página web. En el interior de la función, se hace una llamada a la función "fetchData" y se asigna el resultado a una constante llamada "videos". Luego, se usa una expresión template para crear una cadena HTML con los vídeos resultantes y se asigna a una variable llamada "view". Finalmente, se establece el contenido de la constante "content" como el contenido de "view".

// En caso de que se produzca un error en la llamada a la API, se captura en un bloque "try...catch" y se muestra el error en la consola.