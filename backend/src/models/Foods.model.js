import { DataTypes } from "sequelize";
import { db } from "../providers/db.provider.js";

export const FoodsModel = db.define("User", {
    Matvare: {
        type: DataTypes.STRING
    },
    EnergiKj: {
        type: DataTypes.STRING
    },
    EnergiKcal: {
        type: DataTypes.STRING
    },
    Fett: {
        type: DataTypes.STRING
    },
    Karbohydrat: {
        type: DataTypes.STRING
    },
    Kostfiber: {
        type: DataTypes.STRING
    },
    Protein: {
        type: DataTypes.STRING
    },
    VitaminA: {
        type: DataTypes.STRING
    },
    VitaminD: {
        type: DataTypes.STRING
    },
    VitaminE: {
        type: DataTypes.STRING
    },
    VitaminB1: {
        type: DataTypes.STRING
    },
    VitaminC:{
        type: DataTypes.STRING
    },
    Jern: {
        type: DataTypes.STRING
    },
    Sink: {
        type: DataTypes.STRING
    },
})
