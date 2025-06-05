import { response } from "express";
import FiguraService    from "../models/FiguraService.js";
class FiguraController{

    figuraServices=null;
    constructor(){
        this.figuraService=new FiguraService();
        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.formularioCalcularPerimetro = this.formularioCalcularPerimetro.bind(this);
        this.vistaCuadrado = this.vistaCuadrado.bind(this);
        this.vistaTriangulo = this.vistaTriangulo.bind(this);
        this.vistaCirculo = this.vistaCirculo.bind(this);
        this.calcularResultadoAreaFiguras = this.calcularResultadoAreaFiguras.bind(this);
        this.calcularResultadoPerimetroFiguras = this.calcularResultadoPerimetroFiguras.bind(this);
    }


    formularioCalcularArea(request,reponse){
        reponse.render('area');

    }

    formularioCalcularPerimetro(request,reponse){
        reponse.render('perimetro');

    }

    vistaCuadrado(request,reponse){
        reponse.render('Cuadrado');

    }

    vistaTriangulo(request,reponse){
        reponse.render('Triangulo');
    
    }

    vistaCirculo(request,reponse){
        reponse.render('Circulo');
    
    }

    calcularResultadoAreaFiguras(request, reponse) {
        const { figura, base, altura, radio, lado1, lado2, lado3 } = request.body;

        let resultados = {
            area: null,
            perimetro: null,
            figura: figura
        };

        try {
            switch(figura) {
                case 'cuadrado':
                    resultados.area = this.figuraService.calcularAreaCuadrado(base);
                    resultados.perimetro = this.figuraService.calcularPerimetroCuadrado(base);
                    break;

                case 'triangulo':
                    resultados.area = this.figuraService.calcularAreaTriangulo(base, altura);
                    resultados.perimetro = this.figuraService.calcularPerimetroTriangulo(lado1, lado2, lado3);
                    
                case 'circulo':
                    resultados.area = this.figuraService.calcularAreaCirculo(radio);
                    resultados.perimetro = this.figuraService.calcularPerimetroCirculo(radio);
                    break;
                default:
                    throw new Error('Figura no reconocida');

        }
        
        reponse.render('resultados', { resultados });
    }catch (error) {
            response.status(400).render('error', { 
                mensaje: 'Error en el cálculo: ' + error.message 
            });
        }
    }
}

export default FiguraController;

