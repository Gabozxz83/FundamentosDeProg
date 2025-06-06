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
        const { figura, base, altura, radio, lado } = request.body;
        let resultado;
            if(figura==='cuadrado'){
                resultado= this.figuraServices.calcularAreaCuadrado(lado);
            } else if (figura=== 'triangulo'){
                resultado= this.figuraServices.calcularAreaTriangulo(base, altura);
            } else if (figura=== 'circulo'){
                resultado= this.figuraServices.calcularAreaCirculo(radio);
            }
            reponse.render('area' , { resultado });
    }
     
    calcularResultadoPerimetroFiguras(request, reponse) {
        const { figura,radio, lado, lado1, lado2, lado3 } = request.body;
            if(figura==='cuadrado'){
                resultado= this.figuraServices.calcularPerimetroCuadrado(lado);
            } else if (figura=== 'triangulo'){
            resultado= this.figuraServices.calcularPerimetroTriangulo(lado1, lado2, lado3);
            } else if (figura=== 'circulo'){
                resultado= this.figuraServices.calcularPerimetroCirculo(radio);
            }   
            reponse.render('perimetro' , { resultado });
        }
    }



export default FiguraController;

