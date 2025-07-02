import ProductServices from "../services/ProductServices.js";

class ProductControllers {
    
    productServices = new ProductServices();
    
    getAllProducts = async (req, res) => {
        try {
            const productsStatus = await this.productServices.getAllProducts();
            //console.log("WRONG")
            res.status(200).send(productsStatus);
        } catch (erMsg) {
            res.status(400).send({
                msjEr: erMsg.message
            })
        }
    }

    buyProduct = async (req, res) => {
        try {
            const {model, mail} = req.body;
            const buyStatus = await this.productServices.buyProduct(model, mail)
            
            res.status(200).send(buyStatus);
        } catch (erMsg) {
            res.status(400).send({
                msjEr: erMsg.message
            })
        }
    }

    getAllBoughtProducts = async (req, res) => {
        try {
            const {mail} = req.params;
            //console.log("2", mail)
            const boughtStatus = await this.productServices.getAllBoughtProducts(mail);
            res.status(200).send(boughtStatus);
        } catch (erMsg) {
            res.status(400).send({
                msjEr: erMsg.message
            });
        }
    }

    /*
    deleteProductFromUser = async () => {
        try {

        } catch (erMsg) {

        }
    }
    */
}

export default ProductControllers;