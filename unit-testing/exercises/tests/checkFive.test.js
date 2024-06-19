const checkFive = require('../checkFive.js');
describe("checkFive", function(){
    test("should return number is less than 5", function(){
        let num=4;
        let resu = checkFive(num);
        expect(resu).toBe("4 is less than 5.");
    });
    test("should return number is equal to", function(){
       // let num=5;
        let resu=checkFive(5);
        expect(resu).toBe("5 is equal to 5.");
    });
    test("should return number is greater than", function(){
        let num=6;
        let resu = checkFive(num);
        expect(resu).toBe("6 is greater than 5.");
    });
});