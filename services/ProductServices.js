import {Product, User, UserProducts, Discount} from '../models/index.js';

class ProductServices {

    getAllProducts = async () => {
        return await Product.findAll();
    }

    buyProduct = async (model, mail) => {
        const user = await User.findOne({
            where:{
                mail
            }
        });
        if (!user) throw new Error ("User not found");
        let product = await Product.findOne({
            where:{
                model
            }
        });
        if (!product) throw new Error ("Product not found");
        const disc = await Discount.findByPk(product.DiscountDiscName)
        product.price = product.price * disc;
        const end = await user.addProduct(product)
        console.log(end);
        return end;
    }
    
    getAllBoughtProducts = async (mail) => {
        const user = await User.findOne({
            where: {
                mail
            }
        });
        if (!user) throw new Error ("User not found");
        
        const prods = await UserProducts.findAll({
            where: {
                UserId:user.id
            }
        })

        let foundProds = [];

        if(prods.length > 0){
            for(let i= 0; i < prods.length; i++){
            foundProds.push(await Product.findOne({
                where: {
                    id: prods[i].ProductId
                }
                }))
            }
        }
        return foundProds;
    }

    deleteProductFromUser = async () => { //solo productos de usuario

    }

}

export default ProductServices;