var database = [
  ["MOSTLY CLOUDY","CRACOV, POLAND",15],
  ["MOSTLY RAIN", "OPOLE, POLAND",10],
  ["MOSTLY SNOW", "KIELCE, POLAND",0],
  ["MOSTLY SUNNY","WARSAW, POLAND",25],
  ["MOSTLY SUNNY","SZCZECIN, POLAND",20]
];

 
var weather = [
  ["cloud.svg"],
  ["rain.svg"],
  ["snow.svg"],
  ["sun.svg"]
];

var activ = 0;


function gradechange(id){

    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    var temp = document.getElementById("temp");
    var grade = document.getElementById("grade");



    if(id=="celsius"){

       if(!celsius.classList.contains("activC")){
            celsius.className += " activC";
            fahrenheit.classList.remove("activF");
            temp.innerHTML  = toCelius(temp.textContent);
            grade.innerHTML  = "C";
            activ = 0;
       }

    }

    else{

        if(!fahrenheit.classList.contains("activF")){
            fahrenheit.className += " activF";
            celsius.classList.remove("activC");
            temp.innerHTML  = tofahrenheit(temp.textContent);
            grade.innerHTML  = "F";
            activ = 1;
       }

    }

 

}


function changelocation(value){
    //var location = document.getElementById("location");
   
    console.info(value+"  Localalization was changed");
}



function tofahrenheit(fahre){
    return cel = Round((fahre * 1.8) + 32,2);
}


function toCelius(celius){

  return fahre = Round((celius -32) /1.8,2);

}


function Round(n, k) 
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}


function randomplace(){
  var position = Math.floor(Math.random()*5);

  var location = document.getElementById("location");
  var image =  document.getElementById("img");
  var inf = document.getElementById("info");
  var temp = document.getElementById("temp");

  location.value = database[position][1];
  inf.innerHTML = database[position][0];
 
  console.info(database[position][0]);    

  if(database[position][0]==="MOSTLY CLOUDY"){
    image.src = "img/" + weather[0]; 
  }
  else if(database[position][0]==="MOSTLY RAIN"){
    image.src = "img/" + weather[1]; 
  }
  else if(database[position][0]==="MOSTLY SNOW"){
    image.src = "img/" + weather[2]; 
  }
  else if(database[position][0]==="MOSTLY SUNNY"){
    image.src = "img/" + weather[3]; 
  }

  if(activ===0){
    temp.innerHTML = database[position][2];
  }
  else{
    temp.innerHTML = tofahrenheit(database[position][2]);
  }
}


