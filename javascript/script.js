

let allNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

let consultaResult = [];


let truth = 0;
//saludo inicial para poder saber si ejecutar los pasos o cancelar el total
let welcome= ()=> {
    let confirmation =confirm("Presione un boton 'aceptar' para proseguir, o 'cancelar' para no hacer  nada");
    return confirmation;
  }

// Obtiene las notas en cifrado americano, osea en letras mayusculas(toUpperCase) y las mete dentro del array de comprobacion 
let notes=( )=>{
   
   
      for(let i=0; i< 7 ; i++){
        let consulta = prompt("Ingrese las notas para saber si es una escala en cifrado americano").toUpperCase(); 
    
      let pusher = consultaResult.push(consulta);
      
      }
      
    
  
  }



// let notesQuantity =()=>{
//     let index = consultaResult.length;
//     console.log(consultaResult+" " +index);

// };

 // count , hace la cuenta de cuantos valores del array de notas esta dentro de la escala cromatica , la cual contiene todas las notas posibles en el sistema occidental
 let count =()=>{ 
    
    for(let i=0; i<= (allNotes.length)-1;i++)
    {

  if(allNotes.indexOf(consultaResult[i]) > -1){
    //console.log("contiene la nota")
     truth +1
    };

    // if(allNotes.includes(consultaResult[i])){
    //   alert("No se pueden ingresar letras repetidas")
    //   break;

    // };

   //oh  
  
    if (allNotes.indexOf(consultaResult[i])){

      //console.log("no contiene la nota")
      truth-1;

      
    } 

}
};

 //Lo que quiero con esta funcion final es que, las funciones solo se ejecuten cuando yo las llame
let notesMessage=()=>{
  if( welcome() == false){ 
    alert("A decidido no ingresar valores.Que tenga un buen día")
    
    }
     
      else{ 
 notes();
 
 count()

 //Una escala musical minimamente consta de 5 notas, en caso de ingresar menos de 4(por ejemplo se ingresaron numeros o palabras,pero las letras fueron menores a 5 la respuesta va a ser no hay escala)
if (truth<5){
   console.log("no ha ingresado una escala");
   alert("no ha ingresado una escala");
}
else{
  console.log("lo ingresado coincide con una escala musical");
  alert("lo ingresado coincide con una escala musical");
}
      
}
};


notesMessage()


