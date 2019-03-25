const status = require('http-status');

let _brand;

//Consultar todos
const getAll = (req, res) => {
    _brand.find({})
        .then(brands => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: brands
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
};

//Insertar
const create = (req, res) => {
    const brand = req.body;
    console.log(req);
    _brand.create(brand)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "Saved!!!",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar!!!",
                detail: error
            });
        });
};

//Eliminar
const deleteBrand = (req, res) => {
    const { id } = req.params;
    _brand.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó!!!",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó!!!",
                detail: error
            });
        });
};

//Consultar por Id
const getById = (req, res) => {
    const id = req.params.id;
    _brand.findOne({ _id: id })
        .then(brand => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: brand
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}


//Actualizar

const updateBrand=(req,res)=>{
    const {id} = req.params;
   _brand.update({_id:id},req.body)
    .then(data=>{
        req.status(200);
        res.json({
            code:200,
            msg:"Se modifico",
            detail:data
        });
    })
    .catch(error=>{
        req.status(400);
        res.json({
            code:400,
            msg:"Error",
            detail:data
        });
    });
}

module.exports = (Brand) => {
    _brand = Brand;
    return ({
        getAll, create, deleteBrand, getById,updateBrand
    });
}