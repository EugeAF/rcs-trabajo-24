let libros = ['Secretos Imperfectos', 'Errantes', 'Alguien esta mintiendo', 'Amnesia'];
const content = document.getElementById('container');

function listado() {
    content.innerHTML = ""
    /*libros.forEach(function (item, index) {
        content.innerHTML += `
            <tr>
              <th scope="row">${index}</th>
              <td>${item}</td>
              <td><button onclick="eliminar(${index})">Eliminar</button></td>
              <td><button onclick="editar(${index})">Editar</button></td>
            </tr>`
    })*/

    /*for (let i = 0; i < libros.length; i++) {
        content.innerHTML += `
            <tr>
              <th scope="row">${i}</th>
              <td>${libros[i]}</td>
              <td><button onclick="eliminar(${i})">Eliminar</button></td>
              <td><button onclick="editar(${i})">Editar</button></td>
            </tr>`
        
    }*/

    let i = 0;

    while (i < libros.length) {
        content.innerHTML += `
            <tr>
              <th scope="row">${i}</th>
              <td>${libros[i]}</td>
              <td><button onclick="eliminar(${i})">Eliminar</button></td>
              <td><button onclick="editar(${i})">Editar</button></td>
            </tr>`
        i++
    }
}

function agregar() {
    let libro = prompt('Agregar un libro')
    if (libro) {
        libros.push(libro)
        listado()
    }
}

function eliminar(index) {
    libros.splice(index, 1)
    listado()
}

function editar(index) {
    libros[index] = prompt('Ingrese un titulo')
    listado()
}

listado();



