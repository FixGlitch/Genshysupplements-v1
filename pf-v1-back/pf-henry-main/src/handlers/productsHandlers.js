const {addProduct} = require('../controllers/productsControllers');


const addProductHandler = async (req, res) => {
    const {title, price, category, stock, sold, diet, flavor, weight} = req.body;
    try {
        if(!title || !price || !category || !stock || !sold || !diet || !flavor || !weight) {
            res.status(400).json({
                ok: false,
                message: `Missing request data`
            })
        }else{
            const newProduct = await addProduct(req.body);
            console.log(newProduct);
            if(newProduct) return res.status(201).json({ok:true, newProduct})
            else return res.status(500).json({ok:false, error:`Server error`})
        }
    }catch(err){
        res.status(500).json({ok:false, error: err.message})
    }
}

module.exports = {addProductHandler}