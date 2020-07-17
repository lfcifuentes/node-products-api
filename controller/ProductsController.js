import Models from "../models";

export default {
    add: async (request, response, next)=>{
        try{
            const record = await Models.Product.create(request.body);
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    list:async (request, response, next)=>{
        try{
            const record = await Models.Product.find({},'name description status')
                    .populate("category",'name');

            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
}