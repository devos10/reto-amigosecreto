// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//comentario

//creamos un array para almacenar nombres
let amigos= [];


//creamos una funcion para agregar amigos 

function agregarAmigo(){

    let nombre =document.getElementById('amigo').value;
    if(nombre==''){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value='';
        recorrerListaAmigo();
    }
}
//creamos una funcion que recorra el arreglo y muestre los nombres en una lista 
function recorrerListaAmigo(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML='';
    for(i=0; i<amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    console.log(amigos);
}

//creamos funcion para sortear un amigo 
function sortearAmigo(){
    if(amigos.length!=0){

        numeroMaximo=amigos.length;
        let indice = Math.floor(Math.random()*numeroMaximo);
        console.log(indice);
        document.getElementById('texto').innerHTML= amigos[indice];

    }
    

}
