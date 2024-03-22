import User from '../models/user.js'
//CREATE
    const createUser = async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            res.json(newUser);
        }
        catch(error){
            res.status(500).json({
                msg: 'Error al crear usuario',
                error,
            });
        }
};
//READ

export { createUser }