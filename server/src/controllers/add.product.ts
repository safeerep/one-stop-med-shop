import { Request, Response } from "express";
import { createSession } from "../config/neo4j.config";
import { Session } from "neo4j-driver";

export default async (req: Request, res: Response) => {
  try {
    const session: Session = createSession();
    const product = req.body.product;
    const { specifications, schema } = product;
    const prod_title = product?.prod_title || "no name"
    const Manufacturer = specifications?.Manufacturer || "manufacturer not specified"
    const Brand = specifications?.Brand || "Brand not specified"

    const productDetails = {
      _id: product?._id,
      image: schema?.image,
      title: prod_title || "no name",
      features: product["product-features"],
      meta_title: product?.meta_title,
      meta_description: product?.meta_description,
      page_title: product?.page_title,
      prod_invoice_title: product?.prod_invoice_title,
      views: product?.views,
      created_at: product?.created_at,
    };

    // creating product node
    await session.run(
      `
        MERGE (p:Product { name: $name })
        SET p += $product
        RETURN p
        `,
      { name: prod_title, product: productDetails }
    );

    // creating manufacturer node
    await session.run(
      `
        MERGE (m:Manufacturer { name: $name })
        RETURN m
        `,
      { name: Manufacturer }
    );

    // creating brand node
    await session.run(
      `
        MERGE (b:Brand { name: $name })
        RETURN b
        `,
      { name: Brand }
    );

    // creating relationship with product and manufacturer
    await session.run(
      `
        MATCH (p:Product { title: $title }), (m:Manufacturer { name: $manufacturer })
        MERGE (p)-[:MANUFACTURED_BY]->(m)
        `,
      { title: prod_title, manufacturer: Manufacturer }
    );

    await session.run(
      `
        MATCH (p:Product { title: $title }), (b:Brand { name: $brand })
        MERGE (p)-[:BRANDED_AS]->(b)
        `,
      { title: prod_title, brand: Brand }
    );
    return res.status(201).json({
      message: "successfully added one product",
    });
  } catch (error) {
    console.log(`an error happened during adding products ${error}`);
    return res.status(501).json({
      message: "something went wrong",
      error,
    });
  }
};
