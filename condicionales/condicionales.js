function calcularTasaInteres(ingresoAnual) {
    if (ingresoAnual < 300000) {
        return 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        return 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        return 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        return 13;
    } else {
        return 12;
    }
}

function calcularCapacidadPago(edad, ingresos, egresos) {
    let sobrante = ingresos - egresos;
    if (edad > 50) {
        return sobrante * 0.30;
    } else {
        return sobrante * 0.40;
    }
}

function calcularDescuento(precio, cantidad) {
    let total = precio * cantidad;
    let descuento = 0;
    
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03;
    } else if (cantidad >= 12) {
        descuento = 0.04;
    }
    
    return total - (total * descuento);
}

function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Casi óptimo, o por encima del óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite superior del rango normal";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}

function validarClave(clave) {
    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    }
    return false;
}

function esMayuscula(caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    }
    return false;
}

function esMinuscula(caracter) {
    let ascii = caracter.charCodeAt(0);
    if ((ascii >= 97 && ascii <= 122) || ascii === 164 || ascii === 225 || ascii === 233 || ascii === 237 || ascii === 243 || ascii === 250 || ascii === 241) {
        return true;
    }
    return false;
}

function esDigito(caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        return true;
    }
    return false;
}

function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    }
    return false;
}

function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    }
    return false;
}

function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true;
    }
    return false;
}