import foodData from "../../data/foodData.json" with {
    type: "json"// got an error without specifying json as type
};

export const foodControllerV1 = {
    /**
     * @param {import("express").Request} req Request
     * @param {import("express").Response) res Response
     */
    "/": (req, res) => {
       //res.send("Hello");
        //res.json({ message: "world" });
        res.json(foodData);
    }
}
