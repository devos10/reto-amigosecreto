// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//comentario

//creamos un array para almacenar nombres



//creamos una funcion para agregar amigos 

function agregarAmigo(){
    let amigos= [];
    let nombre =document.getElementById('amigo').value;
    if(nombre==''){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value='';

    }
}
