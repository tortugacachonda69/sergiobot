const interrogacion = ["yo q se tus muertos", "callate ya ermano me tienes ya asta la polla", "que me la barnices","no no..."
                      ,"la verdad que no","yo q se a mi que me cuentas?"];
const otraCosa = ["lo que tu digas","seguro?","ok boomer","bueno vale callate","dame de comer","me parece perfecto","ya..."
                  ,"a mi que me vas a contar","ya he visto de todo","no pasa nada"];

const hola = ["ni hola ni hostias","hola caracola","ey","hasta luego","que tal?","buenas"];
const bot = ["no soy un robot soy un bebe aquí atrapado", "que dices yo me llamo Serg.io","vale si soy un bot que pasa?"];
const follar = ["no se de qué me estás hablando","soy un bebé no me hables de eso pederasta"];
const bb = ["si soy un bebé","soy un bb acabo de nacer"];
const quieres = ["bueno venga vale","yo ya no quiero nada","que si quiero o que si tengo?"];



function cadenaRandom(nombreCadena) {
return nombreCadena[Math.floor(Math.random() * nombreCadena.length)];
}

function bebe() {
  let mensaje = document.getElementById("entrada").value;
  
  if (mensaje.includes("follar")){
    reply = cadenaRandom(follar);
  }
  else if (mensaje.includes("hola")){
    reply = cadenaRandom(hola);
  }
  else if (mensaje.includes("bot")){
    reply = cadenaRandom(bot);
  }
  else if (mensaje.includes("quieres")){
    reply = cadenaRandom(quieres);
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

