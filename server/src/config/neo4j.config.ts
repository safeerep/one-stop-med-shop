import neo4j, { Driver, Neo4jError } from "neo4j-driver";

let driver: Driver;

export default async () => {
    const NEO4J_URI: string = process.env.NEO4J_URI || '';
    const NEO4J_USER: string = process.env.NEO4J_USER || '';
    const NEO4J_PASSWORD: string = process.env.NEO4J_PASSWORD || '';
    
    try {
        driver = neo4j.driver( NEO4J_URI, neo4j.auth.basic(
            NEO4J_USER,
            NEO4J_PASSWORD
        ))
        const serverInfo = await driver.getServerInfo()
        console.log(`successfully established connection with neo4j server \n`, serverInfo);
    } catch (error: Neo4jError | any) {
        console.log(`an error happened during connecting with neo4j ${error}`);
        await driver?.close();
        process.exit(1)
    }
    
    process.on("exit", async () => {
        await driver?.close()
    })
}

export const createSession = () => {
    return driver?.session()
}