import * as DB from "../../db/index2"

export const findAll = (req,res) =>{
    return res.json({
        ok:true,
        data: DB.findAll(),
    })
};

