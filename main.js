//funcion para la eleccion de citas filosoficas
function citaFilosofica(){ 
    let frases = [ "\"Sócrates\": La vida no examinada no merece ser vivida.", "\"Aristóteles\": La felicidad depende de nosotros mismos.", "\"Descartes\": Pienso, luego existo.", "\"Nietzsche\": Lo que no nos mata nos hace más fuertes.", "\"Kant\": La razón es el origen de todo conocimiento.", "\"Platón\": El conocimiento verdadero es saber que no sabes nada.", "\"Confucio\": La mayor gloria no es nunca caer, sino levantarse siempre.", "\"Heráclito\": No puedes bañarte dos veces en el mismo río.", "\"Epicuro\": No es tanto el ayudar a nuestros amigos como el hacerlo con placer lo que nos hace felices.", "\"Séneca\": La felicidad es no necesitarla.", "\"Cicerón\": Si tienes un jardín y una biblioteca, tienes todo lo que necesitas.", "\"Sófocles\": La vida más dulce es no pensar en nada." ];
    let indiceAleatorio = Math.floor(Math.random() * frases.length); return frases[indiceAleatorio]; 
}

//Funcion para la opcion 2 de recomendaciones de libros
function librosSeleccion(){ 
    let libros= [ "\"Sapiens\": Una fascinante exploración de la historia humana, desde el origen hasta el futuro, ofreciendo profundas reflexiones sobre nuestra especie.", "\"Mil Cerebros\": Desentraña el funcionamiento del cerebro, proponiendo una teoría revolucionaria sobre cómo pensamos y percibimos el mundo.", "\"El Universo de la Nada\": Investiga cómo el universo surgió de la nada, desafiando nuestras creencias sobre la existencia y la realidad.", "\"Amplitud\": Examina cómo las organizaciones y las personas pueden prosperar en un mundo interconectado, enfatizando la importancia de la adaptabilidad.", "\"Meditaciones\": Reflexiones filosóficas del emperador Marco Aurelio, ofreciendo sabiduría atemporal sobre la vida, la virtud y la serenidad.", "\"Una Breve Historia de Casi Todo\": Un viaje a través del tiempo y el espacio, desentrañando los misterios del universo con humor y claridad.", "\"El Aleph\": Colección de cuentos de Borges, explorando infinitos, realidades paralelas y lo desconocido, con una prosa exquisita y profunda."] 
    let indiceAleatorio = Math.floor(Math.random() * libros.length); return libros[indiceAleatorio]; 
}

// funcion para la opcion 3
function chistesSeleccion(){ 
    let chistes = [ "\"Chiste 1\": ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.", "\"Chiste 2\": ¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.", "\"Chiste 3\": ¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.", "\"Chiste 4\": ¿Qué hace una abeja en el gimnasio? Zum-ba.", "\"Chiste 5\": ¿Cómo organizas una fiesta en el espacio? ¡Planeta!", "\"Chiste 6\": ¿Qué hace una vaca con los ojos cerrados? Leche concentrada.", "\"Chiste 7\": ¿Por qué las computadoras no pueden nadar? Porque tienen un ratón dentro.", "\"Chiste 8\": ¿Qué hace un perro con un taladro? Taladrando.", "\"Chiste 9\": ¿Cuál es el colmo de Aladdín? Tener mal genio.", "\"Chiste 10\": ¿Qué le dice una piedra a otra piedra? ¡Qué dura es la vida!", "\"Chiste 11\": ¿Por qué el libro de matemáticas está triste? Porque tiene demasiados problemas.", "\"Chiste 12\": ¿Cómo se despiden los químicos? Ácido un placer." ];
    let indiceAleatorio = Math.floor(Math.random() * chistes.length); return chistes[indiceAleatorio]; 
}

//Funcion para la opcion 4
function discosSeleccion(){ 
    let reseñasDeDiscos = [ "\"Kind of Blue\": Una obra maestra del jazz de Miles Davis, explorando la improvisación modal con un sonido único y evocador.", "\"A Love Supreme\": John Coltrane fusiona espiritualidad y música, creando un álbum trascendental y profundamente emotivo, lleno de intensidad y devoción.", "\"Djesse 3\": Jacob Collier despliega su genio musical en un álbum ecléctico, fusionando géneros con maestría y creatividad desbordante.", "\"We Live Here\": Pat Metheny Group ofrece una mezcla única de jazz, funk y world music, creando paisajes sonoros envolventes y sofisticados.", "\"Dark Side of the Moon\": Pink Floyd crea una obra atemporal, explorando temas profundos con innovaciones sonoras y producción impecable.", "\"Abbey Road\": The Beatles se despiden con un álbum icónico, lleno de armonías perfectas, melodías inolvidables y experimentación sonora.", "\"Innuendo\": Queen muestra su diversidad musical en un álbum poderoso y emotivo, lleno de mensajes profundos y momentos épicos.", "\"Off the Wall\": Michael Jackson fusiona disco, pop y funk en un álbum vibrante, estableciendo su legado como el Rey del Pop.", "\"El Amor Después del Amor\": Fito Páez ofrece una oda al amor y la vida en un álbum cargado de pasión, melancolía y genialidad lírica." ];
    let indiceAleatorio = Math.floor(Math.random() * reseñasDeDiscos.length); return reseñasDeDiscos[indiceAleatorio]; 
}

//Funcion dejar propina
function dejarPropina(){
    let siGusto = confirm("Desearía dejar alguna propina al programador?😁")
    if(siGusto){
        let cuanto = Number(prompt("Cuantos $ le gustaría dar?:"))
        if(cuanto <= 0){
            alert("Tacaño/a 😛");
        }else if(cuanto >=1 && cuanto <= 30){
            alert("Tacaño pero generoso 😛")
        }else if (isNaN(cuanto)){
            alert("Operación cancelada. Tenías que ingresar un numero nomas 💩");
        }else if(cuanto > 30 && cuanto < 100){
            alert("Muchas Gracias por el aporte 😁")
        }else if(cuanto > 100){
            alert("Gracias Sr millonario 🤑😜")
        }
    }else{
        alert("No hay problema 😒.Nos vemos!")
    }
    
}
//Funcion contraseña
function pedirContraseña(){
    let contraseñaUsuario = prompt("Antes de empezar. Cree una contraseña")
    if (contraseñaUsuario === null){
        alert("Operación cancelada. No se ha creado una contraseña."); return;
    }

    let intentos = 0
    let maxIntentos = 4;

    while(intentos < maxIntentos){
        let contraseña = prompt("Compruebe la contraseña");
        if (contraseña === null) { alert("Operación cancelada."); 
        return;
        } 
        if(contraseña === contraseñaUsuario){
            alert("Contraseña correcta! has ingresado a la matrix 😎"); break;
        }else{
            alert("La contraseña es incorrecta");
            intentos++;
        }
    } 
    if (intentos === maxIntentos) { alert("Has excedido el número máximo de intentos.");
        return;
    }
    
    
}

//El programa arranca pidiendo al usuario crear una contraseña antes de arrancar
//el programa pide que ingrese un nombre para nombrarle y darle las opciones de lo que puede hacer

function principal(){
    pedirContraseña();

    let nombre = prompt("Ingrese su nombre");
    if (nombre === null){ 
        alert("Operación cancelada.");
        return;
    }
    let seguir = true
    while (seguir){
        let inicio = Number(prompt(`Hola! ${nombre}!\nElegí una de las opciones del 1 al 4\n1. Cita filosofica para el día de hoy\n2. Recomendacion de libros\n3. Un chistesin\n4. Recomendacion de discos`));
    if (isNaN(inicio)){
        alert("Operación cancelada. Tenías que ingresar un numero nomas 💩");
        seguir = confirm("Queres ver el menu de vuelta?");
        continue;
        }
        switch(inicio){
            case 1:
            alert(citaFilosofica())
            alert("Espero que esto te haya hecho reflexionar 😌")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 2:
            alert(librosSeleccion())
            alert("Espero tus comentarios del libro 🤸‍♂️")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 3:
            alert(chistesSeleccion())
            alert(" 🤣 🤸‍♂️")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        case 4:
            alert(discosSeleccion())
            alert("Espero tus comentarios del disco 😎")
            seguir = confirm("Queres ver el menu de vuelta?")
            break
        default:
            alert("Opcion no valida. Tenes que ingresar un numero del UNO AL CUA TRO 😫")
            seguir = confirm("Queres ver el menu de vuelta?")
            break;
    }   
    }
    dejarPropina();
    alert("Adios pequeño saltamontes 🤸‍♂️") 
}
principal();