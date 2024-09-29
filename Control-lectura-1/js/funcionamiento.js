let botonCalcular = document.getElementById('calcular');

botonCalcular.addEventListener('click', function() {
    let salarioInicial = document.getElementById('salario').value;
        if(isNaN(parseFloat(salarioInicial)) || salarioInicial < 0.01){
            return;
        }        

    let salarioDescuentos = SalarioDescuentos(salarioInicial);
    let salarioFinal = SalarioFinal(salarioDescuentos);

    let mostrarRenta = document.getElementById('sueldoFinal');
    mostrarRenta.value = "$ " + salarioFinal.toFixed(2);
});


function SalarioDescuentos(salario){
    let isss;
    let afp;
    
    isss = salario*0.03;
    afp = salario*0.0625;
    document.getElementById('isss').value = "$ " + isss.toFixed(2);
    document.getElementById('afp').value = "$ " + afp.toFixed(2);
    
    return descuentos = salario - afp - isss;
} 

function SalarioFinal (salarioDescuentos){

    let renta; 

    if(salarioDescuentos >= 0.01 && salarioDescuentos <= 472){
        document.getElementById('explicacion').textContent = "Se encuentra en el TRAMO I, es decir, no tiene retención de impuesto sobre la renta";

        document.getElementById('renta').value ="Sin retención";

        return salarioDescuentos;

    } else if(salarioDescuentos >= 472.01 && salarioDescuentos <= 895.24){
        document.getElementById('explicacion').textContent = "Se encuentra en el TRAMO II, es decir, se le aplica el 10% sobre el exceso de $472, más una cuota fija de $17.67";
        
        renta =(salarioDescuentos - 472)*0.10 + 17.67;

        document.getElementById('renta').value ="$ " + renta.toFixed(2);

        return (salarioDescuentos - renta) ;
    } else if(salarioDescuentos >= 895.25 && salarioDescuentos <= 2038.10){
        document.getElementById('explicacion').textContent = "Se encuentra en el TRAMO III, es decir, se le aplica el 20% sobre el exceso de $895.24, más una cuota fija de $60.00";
        
        renta =(salarioDescuentos - 895.24)*0.20 + 60;

        document.getElementById('renta').value ="$ " + renta.toFixed(2);

        return (salarioDescuentos - renta) ;
    } else if(salarioDescuentos >= 2038.11){
        document.getElementById('explicacion').textContent = "Se encuentra en el TRAMO IV, es decir, se le aplica el 30% sobre el exceso de $2,038.10, más una cuota fija de $288.57";
        
        renta =(salarioDescuentos - 2038.10)*0.30 + 288.57;

        document.getElementById('renta').value ="$ " + renta.toFixed(2);

        return (salarioDescuentos - renta) ;
    }
        
}

let botonLimpiar = document.getElementById('limpiar');

botonLimpiar.addEventListener('click', function(){
    document.getElementById('afp').value = "";
    document.getElementById('isss').value = "";
    document.getElementById('renta').value = "";
    document.getElementById('sueldoFinal').value = "";
    document.getElementById('explicacion').textContent = "";
    document.getElementById('salario').value = "";
})

