export const foodControllerV1 = {
    /**
     * @param {import("express").Request} req Request
     * @param {import("express").Response) res Response
     */
    "/": (req, res) => {
        res.send("hello world");
    }
}
