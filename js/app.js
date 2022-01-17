document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
})

function cargarPortafolio() {
    fetch('datos.json')
        .then( (respuesta) => {
            return respuesta.json();
        })
        .then( (datos) => {
            let html = '';

            datos.portafolio.forEach(portafolio => {
                 //Crear el Templeate

                 html+=`
                 <div class="elementos">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                    <h3>${portafolio.nombre}</h3>
                    <p>${portafolio.desc}</p>
                    </div>
                 </div>
                 `;
            });

            //despues de crear el templeate, inyectar al HTML
            document.querySelector('#listado').innerHTML = html;
        })

}