import { Request, Response } from "express";
import { createSession } from "../config/neo4j.config";

export default async (req: Request, res: Response) => {
    try {
        // we will be getting the product's id in params;
        const productId: string = req.params.productId;
        const session = createSession();
        const result = await session.run(
            `
            MATCH (p:Product)-[:BRANDED_AS]->(b: Brand),
            (p:Product)-[:MANUFACTURED_BY]->(m: Manufacturer)
            WHERE p._id = ${productId}
            RETURN p, b, m
            `
        )

        if (result?.records?.length) {
            const product = result.records[0].get("p").properties;
            const brand = result.records[0].get("b").properties;
            const manufacturer = result.records[0].get("m").properties;
            return res.json({
                message: "successfully fetched the details of a specific product",
                productDetails: product,
                brand,
                manufacturer
            })
        } else {
            return res.json({
                message: "there is no product with specified id"
            })
        }
    } catch (error) {
        console.log(error);
        
        return res.status(503).json({
            message: "something went wrong during fetchin one product details",
            error
        })
    }
}