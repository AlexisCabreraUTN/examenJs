function verificarCadenaVacia(c){
    if(c){
        return c.length > 0;
    }
    else{
        return false;
    }   
}
function obtenerNombre(texto){
    nombre = prompt(texto);
    if(verificarCadenaVacia(nombre)){
        return nombre;
    }
    else{
        return obtenerNombre("El nombre no puede estar vacio.\nIntentelo de nuevo");
    }
}
function obtenerEdad(texto){
    edad = parseInt(prompt(texto));
    if(!isNaN(edad)){
        return edad;
    }
    else{
        return obtenerEdad("La edad tiene que ser un numero entero.\nIntentelo de nuevo");
        
    }
}
function obtenerSexo(texto){
    sexo = prompt(texto);
    if(verificarCadenaVacia(sexo) && (sexo == "F" || sexo == "M" || sexo == "f" || sexo == "m")){
        return sexo;
    }
    else{
        return obtenerSexo("El sexo tiene que ser una letra.\nF para femenino.\nM para masculino.\nIntentelo de nuevo");
    }
}
function obtenerPuntuacion(texto){
    puntuacion = parseInt(prompt(texto));
    if(!isNaN(puntuacion) && ((puntuacion >= 5 && puntuacion <= 10) || puntuacion == 0)){
        return puntuacion;
    }
    else{
        return obtenerPuntuacion("La puntuacion solamente puede ser:\nDesde 5 (siendo la peor) hasta 10 (siendo la mejor)\nTambien puede ser 0 en caso de que haya errado\nIntentelo de nuevo");
    }
}
function obtenerParticipantes(){
    var participantes = [];
    var cargaTerminada;
    do {
        participante = {
            nombre: obtenerNombre("Ingrese el nombre"),
            edad: obtenerEdad("Ingrese la edad"),
            sexo: obtenerSexo("Ingrese el sexo (F o M)"),
            puntuacion: obtenerPuntuacion("Ingrese la puntuacion")
        };
        participantes.push(participante);
        cargaTerminada = confirm("Termino de cargar a los participantes?");
    } while (!cargaTerminada);
    return participantes;
}
function obtenerInforme(participantes){
    var numeroParticipantes = participantes.length;
    var mejoresParticipantes = [];
    var peoresParticipantes = [];
    var cantidadHombres = 0, cantidadMujeres = 0, cantidadMenores = 0, mayorEdad = 0,masViejo;
    for(i = 0;participantes.length > i;i++){
        p = participantes[i];
        if(p.puntuacion == 10){
            mejoresParticipantes.push(p.nombre);
        }
        if(p.puntuacion == 5){
            peoresParticipantes.push(p.nombre);
        }
        if(p.sexo == "M" || p.sexo == "m"){
            cantidadHombres++;
        }
        if(p.sexo == "F" || p.sexo == "f"){
            cantidadMujeres++;
        }
        if(p.edad < 18){
            cantidadMenores++;
        }
        if(p.edad > mayorEdad){
            mayorEdad = p.edad;
            masViejo = p.nombre;
        }
    }
    informe = "Informe: \n\
    Numero de participantes: "+numeroParticipantes+"\n\
    Mejores participantes: "+mejoresParticipantes+"\n\
    Peores participantes: "+peoresParticipantes+"\n\
    Cantidad de hombres: "+cantidadHombres+"\n\
    Cantidad de mujeres: "+cantidadMujeres+"\n\
    Cantidad de menores de edad: "+cantidadMenores+"\n\
    El participante mas viejo: "+masViejo+"\n";
    alert(informe);
}

obtenerInforme(obtenerParticipantes());