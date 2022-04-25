import {MongoClient,} from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const client = new MongoClient();

await client.connect("mongodb+srv://pablo:pascual1@lavoro.elux2.mongodb.net/ecommerce?retryWrites=true&w=majority&authMechainism=SCRAM-SHA-1")

const db = client.database('ecommerce')

export default db;