import neo4j, { Neo4jError, auth } from "neo4j-driver";

export default async () => {
    const NEO4J_URI: string = process.env.NEO4J_URI || '';
    const NEO4J_USER: string = process.env.NEO4J_USER || '';
    const NEO4J_PASSWORD: string = process.env.NEO4J_PASSWORD || '';

    let driver;
    
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
    await driver?.close()
}