import { describe, it, expect } from "vitest";
import compare from "./src/tools/compare.js";

describe("compare(a, b)", () => {
    it ("decimal and decimal", () => {
        expect(  compare(3.4, 9.6)  ).toBe( (9.6 - 3.4) );
    });
    it ("numberDecimal and integer", () => {
        expect(  compare("2,4", 7) ).toBe( (7 - 2.4) );
    });

    it ("text", () => {
        expect(  compare( "mat", "fisk" )  ).toBeTypeOf("number");
    });

    it("zero and 0.1", () => {
        expect(  compare( 0, 0.1 )  ).toBe( (0.1 - 0) );
    });
});
