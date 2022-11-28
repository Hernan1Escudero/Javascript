import  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js'



// variable en la que se basa el algoritmo: comprobar mediante comparacion con este array si lo que se ingresa es una escala
let allNotes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

//consulta result funciona como contenedor de la respuesta y como variable de control para hacer validaciones conta allNotes
let consultaResult = "";

//TrueScales Almacena las escalas que son verdaderas para poder hacer sonar la ultima cargada, 
//el hecho de que sea un array es porque en un futuro quiero agregarle la funcionalidad de 
//buscar escalas repetidas pero por ahora no es la finalidad ,
// sino que quiero que solo valide si lo que entra es o  no una escala de 12 notas
let trueScales =[];
// truth es un tambien valor de control para contar la cantidad de notas no repetidas
let truth = 0;
//lie valida cuantas notas o valores repetidos que hay 
let lie = 0;
let count=1;


let notScale ="no ha ingresado una escala";
let isScale = "lo ingresado coincide con una escala musical";
// creamos una alerta

// alerta para cuando no hay escala
 let alert = document.getElementById("forAlert");
 

 // funcion para cerrar la alerta
 let close= ()=>{
  alert.innerHTML =""
     
 }
 alert.addEventListener("click",close)

let bars= (a,b)=>
{
  
    if( a == "danger" )
    {
      alert.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+b+'<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    }
    if(a == "success")
    {
      alert.innerHTML = '<div class="alert alert-primary alert-dismissible fade show" role="alert">'+b+'<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
    }
}
// Obtiene las notas en cifrado americano, osea en letras mayusculas(toUpperCase) y las mete dentro del array de comprobacion 

let obtenerDatosIngreso = document.getElementById('exampleInputEmail1');


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
    if (lie >0){
      bars("danger","La escala contiene valores que no son")
      break
      
    }
    

}

};



 //Lo que quiero con esta funcion final es que, las funciones solo se ejecuten cuando yo las llame
let notesMessage=()=>
{
  

  let notes = document.getElementById("exampleInputEmail1")
  consultaResult = notes.value.toUpperCase().split('');
  
 countRepetitions()
  //Al final se hacen las validaciones en base a una variable que me dira si se ingresa o no una escala en base a la cantidad de valores 
 //Una escala musical minimamente consta de 5 notas, en caso de ingresar menos de 4(por ejemplo se ingresaron numeros o palabras,pero las letras fueron menores a 5 la respuesta va a ser no hay escala)
 
 if(consultaResult.length== 0){
  bars("danger",notScale)

  consultaResult ="";
  truth = 0
  lie = 0
 }

 else if (truth<5 ){
   
   bars("danger",notScale)
   consultaResult ="";
   truth = 0
  lie = 0
}
else if (truth >=5 ){
  bars("success",isScale)
// agregamos el banner 
let container =[]
consultaResult.map(function(verd)
  {
  let valueRange =verd+"4";
  
  container.push(valueRange);
    
  })

trueScales.push(container)
  consultaResult = "";
  truth = 0
  lie = 0
  
  
}   

setTimeout(close,6000)

};



// Mandamos a buscar el boton y ejecutamos las funciones  para que nos responda si es escala
let comprobar = document.getElementById('btn');
comprobar.addEventListener("click",(e)=>{

 e.preventDefault()
 notesMessage();

});


//Obtenemos el switch para el modo oscuro con su clase css
let element = document.getElementById("flexSwitchCheckChecked");

// funcion para tener separado lo que hace el click de su llamado
let  darkMode =()=> {
  //togleamos entre verdado y falso para agregar o quitar la clase
  document.body.classList.toggle("darkMode");

  if( document.body.classList.contains("darkMode") == true){
     element.setAttribute("checked","")
     //guardamos en el local storage para recordar si el modo oscuro esta seleccionado asi permanece en el futuro
    localStorage.setItem("LightMode","Dark")
  }
  if( document.body.classList.contains("darkMode") == false){
    element.removeAttribute("checked","")
    localStorage.setItem("LightMode","Light")
  }
}

// evento para cuando clickeamos el switch
element.addEventListener("click", darkMode)

// estos condicionales son por si ya seleccionamos el modo oscuro y lo recuerde
if( localStorage.getItem("LightMode") == "Dark"){
  document.body.classList.add("darkMode")
  element.setAttribute("checked","")
  
}
if( localStorage.getItem("LightMode") == "Light"){
  document.body.classList.remove("darkMode")
  element.removeAttribute("checked","")
}

//array para contener todas las escalas
let toStorage = [];

//constructor para  guardar la escala facilmente 
class escala{
  constructor(){
    let last = (trueScales.length)-1
  this.nombre = document.getElementById("saveScale").value;
  this.escala =trueScales[last].toString();
   }
 }

 //obtenemos el text area
 let getTextarea = document.getElementById("savedScales")
 let saveinStorage="";
  
  // y agregamos todo para ejecutar al guardar 
 savebtn.addEventListener("click",(e)=>{
  //evitamos que se refresque la pagina (aunque haga calor)
  e.preventDefault()
  
  let  escalo= new escala( )
  toStorage.push(escalo)
  //pasamos todo lo que se cargue en el sesion a string para poder metero
  let tojson = JSON.stringify(toStorage)
  let saveinStorage= sessionStorage.setItem("escalas",tojson)
 
  //no queremos las escalas que se usan en el momento , solo las guardadas por eso vamos a buscar en el session y las parseamos
let getUploadedScales = JSON.parse(sessionStorage.escalas)
// tomamos los valores anteriores del text area para recordarlos y no perder el anterior
// ya que al cargar uno nuevo lo borra  y con += te agrega el anterior y va a tener datos repetidos
 let remember =getTextarea.value;

  for( let i=0;i< getUploadedScales.length; i++){
    
     
     getTextarea.value = remember+( `\n${ getUploadedScales[i].nombre} = ${getUploadedScales[i].escala.replace(/,/g, "-")}`)
    
  
    }
 
 })


 let request =
  async()=>
  {
    let output = "";
    let request = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&&api_key=live_q2ey7pOHnhFk6ZjCAjky4nfDmjjZmH3TucY2PVZmh7xuFrhpRvo24OWGwPOO3mr3")
    .then(response =>  response.json())
    .then( data  => output =(data[0]))

    return (output);
  }

 
 let makeSound = ()=>{
  Tone.start();
  const synth = new Tone.Synth().toDestination();
  let now = Tone.now();
  
  let last = (trueScales.length)-1
  let getScale =trueScales[last]
  if( getScale != undefined)
  {
  
  for(let i=0; i<= getScale.length;i++)
  {
    
    synth.triggerAttackRelease( getScale[i], "8n", now+i)
    
  }
}else
 {
  return ( bars("danger","Debe ingresar una escala/dato para validar"));
 }
 
}
 

 const btn = document.getElementById("carreta");

  btn.addEventListener("click",  (e) => {
  e.preventDefault();
   debugger;
   
 setTimeout(()=>{

   let popo = async()=>{
    let response = await request();
     
    return new Promise((resolve, reject) => {
      if ( response == undefined)
      {
        reject ("reject")
      }
      if ( response != undefined)
      {

        resolve( "resolve")

      }
      
    } )

   }
   
   
     
       popo("resolve").then(async(data)=>{
         let response = await request()
        let  url = response.url;
         let img = document.getElementById("respuesta");
         debugger;
         img.innerHTML="";
         img.innerHTML = '<img src='+url+'></img><span> Si te gusta esta aplicacion <br>podes donar aqui <br> (proximamente)</span>'

       })

    },500)
     
    
   
    

  
  
  makeSound()


 
  
  
  let culo = "";
  

  
});
 
