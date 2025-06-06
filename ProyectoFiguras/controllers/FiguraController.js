class FiguraController {
    figuraService = null;

    constructor() {
        this.figuraService = new FiguraService();
        
    }   

    calcularResultadoAreaFiguras(request, response) {
        const { figura, base, altura, radio, lado } = request.body;
        let resultado;
        
        try {
            if(figura === 'cuadrado') {
                resultado = this.figuraService.calcularAreaCuadrado(lado);
            } else if (figura === 'triangulo') {
                resultado = this.figuraService.calcularAreaTriangulo(base, altura);
            } else if (figura === 'circulo') {
                resultado = this.figuraService.calcularAreaCirculo(radio);
            }
                        
            response.json({ success: true, resultado });
        } catch (error) {
            response.status(400).json({ success: false, message: error.message });
        }
    }
    
}