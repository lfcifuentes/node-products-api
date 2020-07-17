import Models from "../models";

export default {
    add: async (request, response, next)=>{
        try{
            const record = await Models.Category.create(request.body);
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    query:async (request, response, next)=>{
        try{
            const record = await Models.Category.findOne({
                _id:request.query._id
            });
            if(!record){
                response.status(404).send({
                    message:"Registro no existe"
                });
            }else{
                response.status(200).json(record);
            }
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    list:async (request, response, next)=>{
        try{
            const record = await Models.Category.find({}, 'name description status createAt');
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    update:async (request, response, next)=>{
        try{
            const record = await Models.Category.findByIdAndUpdate(
                {_id:request.body._id},
                {
                    name:request.body.name,
                    description:request.body.description
                }
            )
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    remove:async (request, response, next)=>{
        try{
            const record = await Models.Category.findByIdAndDelete(
                {_id:request.body._id}
            );
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    activate:async (request, response, next)=>{
        try{
            const record = await Models.Category.findByIdAndUpdate(
                {_id:request.body._id},
                {
                    status:1
                }
            )
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
    deactivate:async (request, response, next)=>{
        try{
            const record = await Models.Category.findByIdAndUpdate(
                {_id:request.body._id},
                {
                    status:0
                }
            )
            response.status(200).json(record);
        }catch (e) {
            response.status(500).send({
                message:"Es el error"
            });
            next(e);
        }
    },
}