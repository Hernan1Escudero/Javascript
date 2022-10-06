
// variable en la que se basa el algoritmo: comprobar mediante comparacion con este array si lo que se ingresa es una escala
let allNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

//consulta result funciona como contenedor de la respuesta y como variable de control para hacer validaciones conta allNotes
let consultaResult = [];

// truth es un tambien valor de control para contar la cantidad de notas repetidas ya que una escala no repite sus notas
//en un futuro este programa tendrá mas validaciones
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
    
        //Agrega los valores a la variable de control
      let pusher = consultaResult.push(consulta);
      
      }
      
    
  
  }



// let notesQuantity =()=>{
//     let index = consultaResult.length;
//     console.log(consultaResult+" " +index);

// };

 // count , hace la cuenta de cuantos valores del array de notas(counsultaResult) esta dentro de la escala cromatica(allNotes) , la cual contiene todas las notas posibles en el sistema occidental
 let countRepetitions =()=>{ 
    
    for(let i=0; i<= (allNotes.length)-1;i++)
    {

  if(allNotes.indexOf(consultaResult[i]) > -1){
    //console.log("contiene la nota")
     truth +1
    };
     //INTENTO FALLIDO
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
  let notScale ="no ha ingresado una escala";
  let isScale = "lo ingresado coincide con una escala musical";
   
  //Defino el iniciador/cancelador
  if( welcome() == false){ 
    alert("A decidido no ingresar valores.Que tenga un buen día")
    console.log(notScale);
    }
     
      else{ 
  // en caso de confirmar se ejecutan las funciones ya explicadas
 notes();
 
 countRepetitions()
  //Al final se hacen las validaciones en base a una variable que me dira si se ingresa o no una escala en base a la cantidad de valores 
 //Una escala musical minimamente consta de 5 notas, en caso de ingresar menos de 4(por ejemplo se ingresaron numeros o palabras,pero las letras fueron menores a 5 la respuesta va a ser no hay escala)
if (truth<5){
   console.log(notScale);
   alert(notScale);
}
else{
  console.log( isScale);
  alert( isScale);
}
      
}
};


notesMessage()


