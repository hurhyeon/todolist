import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res:NextApiResponse) => {
    if(req.method =="GET"){
        return res.send("hello Next!");
    }


    res.statusCode=405;
    console.log(res.statusCode);
    return res.end();
};