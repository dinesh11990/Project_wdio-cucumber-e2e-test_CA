import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import { isAwaitExpression } from "typescript";

Given(/^Google page is opened$/,async function(){

    console.log('Before opening browser....')
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log('After opening browser');

})

    When(/^Search with (.*)$/,async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")

})

    Then(/^Click on the first search result$/, async function () {
        
        let ele =await $(`<h3>`)
        ele.click()
})

    Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
    
})

//Web Interactions

Given(/^A web page is opened$/, async function(){

    await browser.url("/tables")
    await browser.setTimeout({implicit:15000, pageLoad: 10000})
    //await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function(){

    /*
     * 1. Input Box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just addvalue
     * 3. Click and type
     * 4. Slow typing
     * 
     */

    //let num = 12345
    //let strNum = num.toString()

    //let ele = $(`[type=number]`)
                    //await ele.scrollIntoView() - you can use instead of click()
    //await ele.click()
                    //await ele.setValue(strNum)

                    //It will not clear the field which is present in the textfield by default
                    //addValue is used in the file upload
                    //await ele.addValue(strNum)

                    //await browser.pause(3000)

    /*for(let i = 0; i < strNum.length; i++){

        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }

    await browser.debug()*/

    /************************************************************************************************* */

    /*
     * 2. Dropdown
     * Actions:
     * 1. Assert default option is selected
     * 2. Select by attribute, text. index
     * 3. Get a list of options
     */

    /*1. Assert default option is selected*/ 
    /*let ele = await $('//select/option[@selected="selected"]')
    let val = await ele.getText()
    chai.expect(val).to.equal("Please select an option")
    await browser.debug()*/

    // 2. Select by attribute, text. index
    //let ddEle = await $('//select[@id="dropdown"]')
    //await ddEle.selectByIndex(2)

    //await browser.debug()

    //**3. Get a lsit of options */

   /* let eleArr = await $$(`select > option`)
    let arr = []
    for(let i=0; i<eleArr.length; i++){

        let ele = eleArr[i]
        let val = await ele.getText()
        arr.push(val)
        console.log(val)
    }
    console.log(`>> Options Array: ${arr}`);*/

    /********************************************************************************************* */

    /*
     * 3. Checkbox
     * Actions:
     * 1. Select an option
     * 2. Unselect an option (if selected)
     * 3. Assert if option is selected
     * 4. Select all options
     * 
     */

    // In order to select multiple elements you need to give $$
    // let eleArr1 = await $$(`//form[@id='checkboxes']/input`)

    // if(!await ele.isSelected()){

    //     await ele.click()
    // }

    // let isChecked = await ele.isSelected()
    // chai.expect(isChecked).to.be.false*/
    // //await browser.debug()

    // for(let i=0; i < eleArr1.length; i++){

    //     let ele = eleArr1[i]

    //     if(!await ele.isSelected()){

    //         ele.click()
    //     }
    // }


    // /**
    //  * 4. Window Handling
    //  * Steps:
    //  * 1. Launch the browser
    //  * 2. Open another windows
    //  * 3. Switch to the window based on title
    //  * 4. Switch back to the main window
     
    //  * Methods used:
    //  * 1. getTitle()
    //  * 2. getWindowHandle()
    //  * 3. getWindowHandles()
    //  * 4. switchToWindow()
    //  * /
     

    /*//Opening the window

     await $(`=Click Here`).click()
     await $(`=Elemental Selenium`).click()

     let currentWindTitle = await browser.getTitle()
     let parentWindHandle = await browser.getWindowHandle()

     console.log(`>> currentWinTitle: ${currentWindTitle}`);
     //await browser.debug()
    
     //Switch to specific window

    let winHandles =await browser.getWindowHandles()

    for(let i =0; i=winHandles.length; i++){

        console.log(`>> Win Handle: ${winHandles[i]}`)
        await browser.switchToWindow(winHandles[i])

        currentWindTitle = await browser.getTitle()

        if(currentWindTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro")
        {
            await browser.switchToWindow(winHandles[i])
            let headerTxtEleSel = await $(`<h1>`).getText()
            console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);
            break
        }
        

    }
    //Switch back to parent window
    await browser.switchToWindow(parentWindHandle)
    let parentWindHeaderTxt = await $(`<h3>`).getText()
    console.log(`>> parentWinHeaderTxt: ${parentWindHeaderTxt}`)

    await browser.debug()*/

    /**
     * 4. Handling Alerts : Methods Used:
     * 1. isAlertOpen()
     * 2. acceptAlert()
     * 3. dismissAlert()
     * 4. getAlertText()
     * 5. sendAlertText()
     * 
     */

    //Case 1
    /*await $(`button=Click for JS Alert`).click()

    if (await browser.isAlertOpen()) {
        await browser.acceptAlert()
    }


    await browser.debug()*/

    //Case 2

   /* await $(`button=Click for JS Alert`).click()

    if (await browser.isAlertOpen()) {
        await browser.dismissAlert()
        await browser.pause(2000)
    }


    await browser.debug()*/

    //Case 3

    /*await $(`button=Click for JS Prompt`).click()

    if(await browser.isAlertOpen()){

        let alertText = await browser.getAlertText()
        console.log(`>> alertText: ${alertText}`)

        await browser.sendAlertText('Hello JS Prompt')
        await browser.acceptAlert()
        await browser.pause(2000)
    }*/

    /**
     * File Upload
     */

    /*await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
    await $(`#file-submit`).click()

    await browser.debug()*/

    /*
    6. Frames
    Method used:
    1. switchToFrame
    2. switchToParentFrame
    */

    /*await $(`=iFrame`).click()

    let ele = await $(`#mce_0_ifr`)
    await browser.switchToFrame(ele)

    //Interaction with frame

    await $(`#tinymce`).setValue(`Dinesh KRISHNA`)
    await browser.switchToParentFrame()

    await browser.debug()*/

/*
    7. KeyPress
    Method used:
    1. switchToFrame
    2. switchToParentFrame
    */

    /*await $(`=iFrame`).click()

    let ele = await $(`#mce_0_ifr`)
    await browser.switchToFrame(ele)

    //Interaction with frame
    
    await $(`#tinymce`).click()
    await browser.keys(["Meta","A"])
    await browser.pause(1000)
    await browser.keys("Delete")


    await $(`#tinymce`).setValue(`Dinesh KRISHNA`)
    await browser.switchToParentFrame()

    await browser.debug()*/

/*
    8. Basic Scrolling
    Method used: (Element methods)
    1. scrolIntoView
    */

    /*await (await $(`span=Best Sellers in Books`)).scrollIntoView()

    //To scroll down
    //await (await $(`span=Best Sellers in Books`)).scrollIntoView(false)*/

    /**
     * Web table:
     * What are going to cover
     * 1. Check number of rows and columns
     * 
     */
    /*let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length
    chai.expect(rowCount).to.equal(4)
    console.log(`>> Number of rows: ${rowCount}`)

    let colCount = await $$('//table[@id="table1"]/thead/tr/th').length
    chai.expect(colCount).to.equal(6)
    console.log(`>> Number of cols: ${colCount}`)*/

    /**2. Get whole table data */

    /*let arr = []

    for(let i = 0; i < rowCount; i++){

        

        let personObj = {
            lastname: "",
            firstname: "",
            email: "",
            due: "",
            web: "",
        }
        for(let j = 0; j < colCount; j++){

        let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j +1}]`).getText()
        //console.log(`>> Cell Value: ${cellVal}`)

        if(j === 0) personObj.lastname = cellVal
        if(j === 1) personObj.firstname = cellVal
        if(j === 2) personObj.email = cellVal
        if(j === 3) personObj.due = cellVal
        if(j === 4) personObj.web = cellVal
        }

        arr.push(personObj)
    }
    console.log(`Whole table: ${JSON.stringify(arr)}`);*/

    /**3. Get single row [based on a condition]*/

    /*let arr = []

    for(let i = 0; i < rowCount; i++){

        

        let personObj = {
            lastname: "",
            firstname: "",
            email: "",
            due: "",
            web: "",
        }
        for(let j = 0; j < colCount; j++){

        let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j +1}]`).getText()
        let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText()
        //console.log(`>> Cell Value: ${cellVal}`)
        
        if(firstname === "Jason"){
            if(j === 0) personObj.lastname = cellVal
            if(j === 1) personObj.firstname = cellVal
            if(j === 2) personObj.email = cellVal
            if(j === 3) personObj.due = cellVal
            if(j === 4) personObj.web = cellVal
        }
    }
    if(personObj.firstname){

        arr.push(personObj)
    }
}
    console.log(`Whole table: ${JSON.stringify(arr)}`);*/

    //**4. Get single column */

    /*let arr = []
    for(let i = 0; i < rowCount; i++){

        let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText()
        arr.push(cellVal)
    }
    console.log(`>> Single col values: ${arr}`)*/

    /**
     * Get single cell value [based on another cell] 
     */

    /*let arr = []

    for(let i=0; i <rowCount; i++){

        let price = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText()
        let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText()
        if(+(price.replace("$", "")) > 50){
        arr.push(firstname)
            
        }
    }
    console.log(`>> Single cell values: ${arr}`)*/

    /**
     * Scrolling
     * 
     * Visible portion
     * Window object
     * 
     * 1. ScrollBy
     * Y -> [-] window.innerHeight
     * 
     */

    //Scroll down
    /*await browser.execute(() => {
        window.scrollBy(0, window.innerHeight)
    })
    await browser.pause(2000)

    //Scroll top
    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight)
    })
    await browser.pause(2000)

    //Scroll top
    await browser.execute(() => {

        window.scrollBy(0, -window.innerHeight)
    })*/


   /**
     * Scrolling
     * 
     * Invisible portion
     * Window object
     * 
     * 1. ScrollTo
     * Y -> document.body.scrollTop[scrolHeight]
     * 
     */

    /*await browser.pause(2000)
    await browser.execute(() => {

        window.scrollTo(0, document.body.scrollHeight)
})

await browser.pause(2000)
await browser.execute(() => {

    window.scrollTo(0, document.body.scrollTop)
})*/


    /*workout*/

   /* let colCount1 = await $$(`//table[@id="table1"]/thead/tr/th`).length
    chai.expect(colCount1).to.equal(6)
    console.log(`>> No. of columns: ${colCount1}`)

    let rowCount1 = await $$(`//table[@id="table1"]/tbody/tr`).length
    chai.expect(rowCount1).to.equal(4)
    console.log(`>>No of Rows: ${rowCount1}`)*/


    /*//whole table - chai.expect(eleArr.length).to.equal(parseInt(noOfProdutcs))

    let arr = []
    for(let i = 0; i < rowCount1; i++){

        let personobj1 = {


            lastname: "",
            firstname: "",
            email: "",
            due: "",
            web: "",
        }

         for(let j = 0; j < colCount1; j++){
            let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText()
            //console.log(`>>Cell value: ${cellVal}`)
            if (j === 0) personobj1.lastname = cellVal
            if (j === 1) personobj1.firstname = cellVal
            if (j === 2) personobj1.email = cellVal
            if (j === 3) personobj1.due = cellVal
            if (j === 4) personobj1.web = cellVal
        }
            arr.push(personobj1)
        
        }    
        console.log(`>>Whole Table: ${JSON.stringify(arr)}`)*/
    
       /* let arr = []
        for (let i =0 ; i < rowCount1 ; i++){

            let price = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText()
            let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText()

            if(+(price.replace("$", "")) > 50){

                arr.push(firstname)

            }
        }
        console.log(`>> Single cell value: ${arr}`)*/


    //await browser.debug()

    /*workout*/
})
