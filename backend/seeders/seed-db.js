import foods from "./foodData.seed-data.json" with {type: "json"};

import { FoodsModel } from "../src/models/Foods.model.js";

import { db } from "../src/providers/db.provider.js";

async function seedDb() {
    try {
        console.log("Syncing with db");
        await db.sync();
        console.log(`Inserting ${foods.length} records to sqlite`);
        const insertedFood = await FoodsModel.bulkCreate(foods);
        console.log(`Success inserted ${insertedFood.length}`);
        
    } catch(err) {
      console.error("Error inserting data", err); 
    } finally {
        await db.close();
    }
}

seedDb();
