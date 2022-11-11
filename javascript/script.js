
// variable en la que se basa el algoritmo: comprobar mediante comparacion con este array si lo que se ingresa es una escala
let allNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

//consulta result funciona como contenedor de la respuesta y como variable de control para hacer validaciones conta allNotes
let consultaResult = "";

// truth es un tambien valor de control para contar la cantidad de notas no repetidas
let truth = 0;
//lie valida cuantas notas o valores repetidos que hay 
let lie = 0;


// Obtiene las notas en cifrado americano, osea en letras mayusculas(toUpperCase) y las mete dentro del array de comprobacion 

let obtenerDatosIngreso = document.getElementById('exampleInputEmail1');
obtenerDatosIngreso.addEventListener("change",(e)=>{

  e.preventDefault()
  let notes = document.getElementById("exampleInputEmail1")
  consultaResult = notes.value.toUpperCase().split('');

 });

 // count , hace la cuenta de cuantos valores del array de notas(counsultaResult) esta dentro de
 //la escala cromatica(allNotes) , la cual contiene todas las notas posibles en el sistema occidental
 let countRepetitions =()=>{  
    for(let i=0; i<= (allNotes.length)-1;i++)
    {
   if(allNotes.includes(consultaResult[i])){
    //console.log("contiene la nota")
      truth +=1
    }

    else {

      //console.log("no contiene la nota")
       lie +=1;

    } 

}

};


 //Lo que quiero con esta funcion final es que, las funciones solo se ejecuten cuando yo las llame
let notesMessage=()=>{
  
  let notScale ="no ha ingresado una escala";
  let isScale = "lo ingresado coincide con una escala musical";
   
  
  // en caso de confirmar se ejecutan las funciones ya explicadas
  
   
 
 countRepetitions()
  //Al final se hacen las validaciones en base a una variable que me dira si se ingresa o no una escala en base a la cantidad de valores 
 //Una escala musical minimamente consta de 5 notas, en caso de ingresar menos de 4(por ejemplo se ingresaron numeros o palabras,pero las letras fueron menores a 5 la respuesta va a ser no hay escala)
 let alert = document.getElementById("forAlert");
 let alertBarDanger = alert.innerHTML = '<div class="alert alert-danger" role="alert">'+notScale+'</div>';
 if(consultaResult.length== 0){
  alert.innerHTML = alertBarDanger
  truth = 0;
   lie = 0;
 }

 else if (truth<5 ){
   console.log(notScale);
   alert.innerHTML = alertBarDanger
   truth = 0;
   lie = 0;
}
else if (truth >=5){
  console.log( isScale);
  
alert.innerHTML = '<div class="alert alert-primary" role="alert">'+isScale+'</div>'; 
truth = 0;
lie = 0;
}   

};

let comprobar = document.getElementById('btn');
comprobar.addEventListener("click",(e)=>{

 e.preventDefault()
 
 notesMessage();


});

let coca =document.getElementById("flexSwitchCheckChecked");
coca.setAttribute('value','checked')


coca.addEventListener("click",()=>{
  if (coca.value == 'unchecked'){
    document.body.classList.add("darkMode")
    coca.removeAttribute('value','unchecked')
    coca.setAttribute('value','checked')}
    else{

      document.body.classList.remove("darkMode")
      coca.removeAttribute('value','checked')
    coca.setAttribute('value','unchecked')}
    }



)









//butt.addEventListener("click",saludo)

///////////////////////////////////////////////

// localStorage.setItem("cliente","pepe")

