import express from 'express';
const router = express.Router();

//Importar el modelo nota
import PrimerBd from '../models/primerBd';

//Agregar un registro

router.post('/nuevo-registro', async(req, res) => {
    const body = req.body;

    try {
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);

    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio algo inseperado',
            error
        })

    }
});

//Get busca todos los registros
router.get('/buscarTodo', async(req, res) => {

    try {
        const PrimerDB = await PrimerBd.find();
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            message: 'Error en la busqueda',
            error
        })

    }


});

//Get con parametro
router.get('/buscarParametro/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const PrimerDB = await PrimerBd.findOne({ _id });
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            message: 'Error en la busqueda de parametro',
            error
        })

    }


});

//Delete una mascota
router.delete('/eliminarParametro/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const PrimerDB = await PrimerBd.findByIdAndDelete({ _id });
        if (!PrimerDB) {
            return res.status(400).json({
                message: 'No se encontro la mascota',
                error
            })

        }
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            message: 'Ocurrio un error al eliminar el dato',
            error
        })

    }
});

//Actualizar mascota
router.get('/buscarParametro/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const PrimerDB = await PrimerBd.findOne({ _id });
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            message: 'Error en la busqueda de parametro',
            error
        })

    }


});

//Delete una mascota
router.put('/actualizarParametro/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const PrimerDB = await PrimerBd.findByIdAndUpdate(_id, body, { new: true });
        res.json(PrimerDB);

    } catch (error) {
        return res.status(400).json({
            message: 'no se logro actualizar',
            error
        })

    }
});

//Exportar la configuracion de express
module.exports = router;