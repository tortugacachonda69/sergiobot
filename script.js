const interrogacion = ["yo q se tus muertos", "callate ya ermano me tienes ya asta la polla", "si si claro ajajajaj"];

const hola = ["ni hola ni hostias","hola caracola","ey","hasta luego"];
const acho = ["no soy un robot soy un bebe aquí atrapado", "que dices yo me llamo Serg.io","vale si soy un bot que pasa?"];
const follar = ["no se que es eso de follar","la tengo enorme","soy un bebé no me hables de eso pederasta"];
const bb = ["si soy un bebé","soy un bb acabo de nacer"];
const otraCosa = ["lo que tu digas","seguro?","ok boomer","bueno vale callate","dame de comer","me parece perfecto","ya..."];

function cadenaRandom(nombreCadena) {
return nombreCadena[Math.floor(Math.random() * nombreCadena.length)];
}

function bebe() {
  let mensaje = document.getElementById("entrada").value;
  
  if (mensaje.includes("hola")){
    reply = cadenaRandom(hola);
  }
  else if (mensaje.includes("follar")){
    reply = cadenaRandom(follar);
  }
  else if (mensaje.includes("bebe")){
    reply = cadenaRandom(bb);
  }
  else if (mensaje.includes("?")) {
    reply = cadenaRandom(interrogacion);
  }
  else {
    reply = cadenaRandom(otraCosa);
  }
  document.getElementById("respuesta").innerHTML = reply;
  document.getElementById("entrada").value = "";
}

