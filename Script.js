

let allNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

let consultaResult = [];


let truth = 0;


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


let notesMessage=()=>{
 notes();
 
 count()
if (truth<5){
   console.log("no ha ingresado una escala")
}
};


notesMessage()


