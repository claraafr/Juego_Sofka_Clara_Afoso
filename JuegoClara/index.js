let preguntasAleatorias = true;
let juegoTerminado = true; // cambiado de mostrar_pantalla_juego_terminado
let marcadorReiniciado= true; // cambio de reiniciar_puntos_al_reiniciar_el_juego

    window.onload = function () {
    preguntasBase = readText('bd.json');
    preguntasBd = JSON.parse(preguntasBase);
    escogerPreguntaAleatoria();
                                }

let pregunta;
let posiblesRespuestas; // posibles_respuestas
let botonesRespuestas = [ // btn_correspondiente
    select_id("btn1"), 
    select_id("btn2"), 
    select_id("btn3"), 
    select_id("btn4")
                        ];
let npreguntas = [];

let contestadas = 0; //preguntas_hechas
let correctas = 0; // preguntas_correctas
let puntaje = 0; // valor

//Nombre del jugador

    Swal.fire({
    title: "Por favor, ingrese su nombre: ",
    input: "text",
    confirmButtonText: "Aceptar",
                })

// Preguntas aleatorias
    function escogerPreguntaAleatoria(){
    let p = 0;
        if (preguntasAleatorias) {
         p = Math.floor(Math.random() * this.preguntasBd.length);
                                }   
        else {
         p = 0;
            }

            while (npreguntas.includes(p - 20)) { 
                p++;
            if(p > 24) { 
             p=0;
                        }
            if (npreguntas.length == 24) {
            //Inicia en pregunta 1
             n++;
             //Juego se termina
                if(juegoTerminado) {
                puntaje = (correctas * 10);
                 swal.fire({
                 title: "Resultado",
                text: "Puntaje: " + correctas + "/" + contestadas-1 + " Score: " + puntaje,
                confirmButtonText: "Guardar",
                }); 
                                    }
                // Juego reiniciado
                if (marcadorReiniciado) {
                 correctas = 0
                    contestadas = 0
                                        }
                 return npreguntas = [];
                                        }
                                                }
    
    // Se guardan en el array
    npreguntas.push(p);
    contestadas++;

    escogerPregunta(p);
   //Cierre de escoger aleatoria 
    }
    // Escoger la pregunta según corresponda
    function escogerPregunta(p) {
     pregunta = preguntasBd[p];
        select_id("ronda").innerHTML = this.pregunta.ronda;
        select_id("categoria").innerHTML = this.pregunta.categoria;
        select_id("pregunta").innerHTML = this.pregunta.pregunta;
    
        
        let pc = correctas;
    //Incrementa puntaje 
        if (contestadas > 1){
        select_id("puntaje").innerHTML = pc + "/" + (contestadas - 1);
        }else {
        select_id("puntaje").innerHTML = "";
        }
        // Estilo de imagenes 
     style("imagen").objectFit = pregunta.objectFit;
     if(pregunta.imagen) {
         select_id("imagen").setAttribute("src", pregunta.imagen);
         style("imagen").height = "200px";
         style("imagen").width = "100%";
     } else {
         style("imagen").height = "0px";
         style("imagen").width = "0px";
         setTimeout(() => {
             select_id("imagen").setAttribute("src", "");
         }, 500);
}
        if(correctas >= 5 && contestadas < 24){
        //Iniciar en pregunta 1
        npreguntas.length[1];
    
      function EsNulo(puntaje){
         if(isNaN(puntaje)){
         return 0 ;
         }else{
            return puntaje;
            }
        }
            puntaje=EsNulo(puntaje);

        //Juego terminado
        valor = (preguntas_correctas * 100);
        swal.fire({
        title: "Resultado",
        text: "Puntaje: " + preguntas_correctas + "/" + preguntas_hechas + " Dinero: " + valor,
        confirmButtonText: "Guardar",
            })

        return npreguntas = [];
     }
     
    //Botones de las respuestas
    select_id("btn1").innerHTML = posiblesRespuestas[0];
    select_id("btn2").innerHTML = posiblesRespuestas[1];
    select_id("btn3").innerHTML = posiblesRespuestas[2];
    select_id("btn4").innerHTML = posiblesRespuestas[3];

    
    let suspenderBotones = false;

    function oprimir(i) {
        if (suspenderBotones) {
          return;
                            }
        suspenderBotones = true;
        if (posiblesRespuestas[i] == pregunta.respuesta) {
          correctas++ && contestadas -1;
          return botonesRespuestas[i].style.background = "green";
                                                        } 
        else {
            botonesRespuestas[i].style.background = "red";
            contestadas = 0;
            correctas = 0;
            puntaje = puntaje - 100;   
            }
  
        Swal.fire({
        title: "Resultado",
        text: "Has contestado de forma incorrecta tu puntaje es:" + puntaje ,
        confirmButtonText: "Guardar",
        })
                      
        
        for (let j = 0; j < 4; j++) {
          if (posibles_respuestas[j] == pregunta.respuesta) {
            botonesRespuestas[j].style.background = "green";
            break;
          }
        }
    } 
    } 
        function readText(ruta_local) {
            var texto = null;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", ruta_local, false);
            xmlhttp.send();
            if(xmlhttp.status == 200) {
                texto = xmlhttp.responseText;
            }
            return texto;
}

           

