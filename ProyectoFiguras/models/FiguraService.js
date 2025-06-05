class FiguraService{

    // CUADRADO
    calcularAreaCuadrado(lado) {
        if (lado <= 0) throw new Error('El lado debe ser positivo');
        return lado * lado;
    }

    calcularPerimetroCuadrado(lado) {
        if (lado <= 0) throw new Error('El lado debe ser positivo');
        return 4 * lado;
    }
     
    // TRIÁNGULO
    calcularAreaTriangulo(base, altura) {
        if (base <= 0 || altura <= 0) throw new Error('Base y altura deben ser positivas');
        return (base * altura) / 2;
    }

    calcularPerimetroTriangulo(lado1, lado2, lado3) {
        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) throw new Error('Todos los lados deben ser positivos');
        return lado1 + lado2 + lado3;
    }

    // CÍRCULO
    calcularAreaCirculo(radio) {
        if (radio <= 0) throw new Error('El radio debe ser positivo');
        return Math.PI * Math.pow(radio, 2);
    }

    calcularPerimetroCirculo(radio) {
        if (radio <= 0) throw new Error('El radio debe ser positivo');
        return 2 * Math.PI * radio;
    }
}
export default FiguraService