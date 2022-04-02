import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProdutcs){

        if(!noOfProdutcs) throw Error(`Invalid product count provided: ${noOfProdutcs}`)
        let eleArr = await $$(`.inventory_item_name`)
        //parseInt will convert string to number
        chai.expect(eleArr.length).to.equal(parseInt(noOfProdutcs)) // ===


})
/**
 * Steps:
 * 1. Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0
 */


Then(/^Validate all products have valid price$/, async function(){

    // 1. Get price list

    let eleArr = await $$(`.inventory_item_price`)
    let priceStrArr = []

    for(let i=0; i < eleArr.length; i++)
    {
        let priceStr = await eleArr[i].getText()
        priceStrArr.push(priceStr)
    }
    console.log(`>> Price with $: ${priceStrArr}`);


    //**2. Convert string to number */
    let priceNumArr = priceStrArr.map(ele => +ele.replace("$", ""));
    console.log(` >> Price in numbers: ${priceNumArr}`);

    //**3. Assert if any value is <=0 */
    let invalidPriceArr = priceNumArr.filter((ele) => ele<=0);
    chai.expect(invalidPriceArr.length).to.equal(0)


})