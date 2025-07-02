import UserServices from "../services/UserServices.js";

class UserControllers{

    userServices = new UserServices();

    getAllUsers = async (req, res) => {

        try {
            const allUsers = await this.userServices.getAllUserService();
            //console.log('all', allUsers)
            //console.log('all')
            res.status(200).send({
                allUsers
            })
        } catch(erMsg){
            //console.log('all err', erMsg)
            res.status(400).send(erMsg.message)
        }
    }

    getUserById = async (req, res) => {
        try {
            const {id} = req.params;
            const userFound = await this.userServices.getUserById(id);
            //console.log('id', userFound)
            if(userFound === null){
                res.status(200).send({
                    msj: "no user found"
                });
            } else {
                res.status(200).send(userFound);
            }
        } catch(erMsj){
            //console.log('err id', erMsj)
            res.status(400).send({
                erMsj
            })
        }
    }

    createUser = async(req, res) => {
        try {
            let {name, mail, pass, RoleId} = req.body;
            RoleId = parseInt(RoleId);
            const userCreated = await this.userServices.createUser({name, mail, pass, RoleId})
            //console.log('user created ', userCreated)
            res.status(200).send({
                userCreated
            })
        } catch(erMsj){
            //console.log('err create', erMsj)
            res.status(400).send({
                erMsj
            })
        }
    }

    /*
    updateUser = (req, res) => {
        //stand by
        res.status(200).send({
            enController: true
        })
    }

    deleteUser = (req, res) => {
        //stand by
        res.status(200).send({
            enController: true
        })
    }
    */

    login = async (req, res) => {
        try {
            let {mail, pass} = req.body;
            const loginState = await this.userServices.login({mail, pass})
            //console.log('user created ', userCreated)
            res.cookie("token", loginState);
            res.status(200).send({
                msg: "inicio de sesion exitoso"
            })
        } catch(erMsj){
            //console.log('err create', erMsj.message)
            res.status(400).send(
                erMsj.message
            )
        }
    }
}

export default UserControllers;
