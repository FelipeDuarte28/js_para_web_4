const viviendas = [
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500
    }
];

let arreglo = ''
for (let hogar of viviendas) {
    arreglo += `<div class="propiedad">
                <div class="img" style="background-image: url('${hogar.src}')"></div>
                <section>
                    <h5>${hogar.nombre}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${hogar.cuartos}</p>
                        <p>Metros: ${hogar.metros}</p>
                    </div>
                    <p class="my-3">${hogar.descripcion}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>`
}

const props = document.querySelector(".propiedades")
props.innerHTML = arreglo

document.getElementById("totalcasas").innerHTML = viviendas.length

function filtro() {

    minM = document.querySelector("#minMetros").value    
    maxM = document.querySelector("#maxMetros").value    
    numC = document.querySelector("#numCuartos").value

    if (minM == "" || maxM == "" || numC == "") {
        alert("Faltan campos por llenar en el filtro");
    }

    else {
    let arregloFiltrado = ''
        i = 0

        for (let hogar of viviendas) {
            if (hogar.metros >= parseInt(minM) && hogar.metros <= parseInt(maxM) && hogar.cuartos == parseInt(numC)) {
                
                i = i + 1

                document.getElementById("totalcasas").innerHTML = i
                
                arregloFiltrado += `<div class="propiedad">
                                        <div class="img" style="background-image: url('${hogar.src}')"></div>
                                        <section>
                                            <h5>${hogar.nombre}</h5>
                                            <div class="d-flex justify-content-between">
                                                <p>Cuartos: ${hogar.cuartos}</p>
                                                <p>Metros: ${hogar.metros}</p>
                                            </div>
                                            <p class="my-3">${hogar.descripcion}</p>
                                            <button class="btn btn-info ">Ver más</button>
                                        </section>
                                    </div>`
            }
        }

        if (arregloFiltrado.length == 0) {
            document.getElementById("totalcasas").innerHTML = 0
        }
        props.innerHTML = arregloFiltrado
    }
}