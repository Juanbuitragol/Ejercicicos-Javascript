var cadena = prompt("Introduce un Texto:");
        var numchar = cadena.length;
        var i;
        var car;
        var salida = "";
        for (i = 0; i < numchar; i++) {
            car = cadena.charAt(i);    
            salida = car + salida;
        }
        document.write(salida);

