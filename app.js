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
    document.getElementById("borrar__btn").removeAttribute('disabled');
    console.log(amigos);
    
    
}

//creamos funcion para sortear un amigo 
function sortearAmigo(){
    if(amigos.length!=0){

        numeroMaximo=amigos.length;
        let indice = Math.floor(Math.random()*numeroMaximo);
        console.log(indice);
        if(indice<=amigos.length){
            document.getElementById('texto').innerHTML= amigos[indice];
            console.log(amigos[indice])


        }
        
    }else{
        alert("No hay nada que sortear, por favor, inserte un nombre")

    }
    

}

function borrar(){
    if(amigos.length!=0){
        
        let lista=document.getElementById('listaAmigos');
        amigos=[];
        console.log(amigos.length);
        lista.innerHTML='';
        document.getElementById('texto').innerHTML='Sortear Amigo';
        document.querySelector('#borrar__btn').setAttribute('disabled','true');
        
    }
}



