const comicsModel = require('../models/comicsModel');
const userModel = require('../models/userModel');

module.exports = class comicController{
    static async getAllComics(request, response){
        try {
            const comics = await comicsModel.find();
            if(comics != null){
                response.status(200).json(comics);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    static async getAllusers(request, response){
        try {
            const users = await userModel.find();
            if(users != null){
                response.status(200).json(users);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
}
