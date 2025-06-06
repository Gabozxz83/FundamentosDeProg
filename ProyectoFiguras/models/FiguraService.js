class FiguraService{

    // CUADRADO
    calcularAreaCuadrado(lado=0) {
        if (lado <= 0) throw new Error('El lado debe ser positivo');
        let= resultado= lado * lado;
        return resultado;
    }


    calcularPerimetroCuadrado(lado=0) {
        if (lado <= 0) throw new Error('El lado debe ser positivo');
        let= resultado= 4* lado;
        return resultado;
    }
     
    // TRIÁNGULO
    calcularAreaTriangulo(base=0, altura=0) {
        if (base <= 0 || altura <= 0) throw new Error('El lado debe ser positivo');
        let = resultado= (base * altura) / 2;
        return resultado;      
    }

    calcularPerimetroTriangulo(lado1=0, lado2=0, lado3=0) {
        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) throw new Error('Todos los lados deben ser positivos');        
        let =resultado= lado1 + lado2 + lado3;
        return resultado;
    }

    // CÍRCULO
    calcularAreaCirculo(radio=0) {
        if (radio <= 0) throw new Error('El radio debe ser positivo');
        let =resultado= Math.PI * radio ** 2
        return resultado;
    }

    calcularPerimetroCirculo(radio=0) {
        if (radio <= 0) throw new Error('El radio debe ser positivo');
        let =resultado= 2 * Math.PI * radio
        return resultado;
    }
}
export default FiguraService