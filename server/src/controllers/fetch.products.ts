import { Request, Response } from "express";
import { createSession } from "../config/neo4j.config";

export default async (req: Request, res: Response) => {
    try {
        const session = createSession();
        const result = await session.run(`
            MATCH (p: Product) 
            RETURN p
            LIMIT 7
        `)

        if (result) {
            const products = result?.records?.map((record) => {
                const productNode = record.get('p')
                return productNode?.properties;
            })

            return res.status(200).send({
                message: "successfully fetched the products",
                products
            })
        } else {
            return res.status(501).send({
                message: "something went wrong in querying products"
            })
        }
        
    } catch (error) {
        return res.json({
            message: "something went wrong",
            error
        })
    }
}