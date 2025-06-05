import { Router } from 'express';
import FiguraController from '../controllers/FiguraController.js';
const router = Router();

const figuraController = new FiguraController();

router.get('/', figuraController.formularioCalcularArea);
router.post('/calcular', figuraController.calcularResultadoAreaFiguras);

router.get('/cuadrado',figuraController.vistaCuadrado);

router.get('/triangulo',figuraController.vistaTriangulo);

router.get('/circulo',figuraController.vistaCirculo);



export default router;