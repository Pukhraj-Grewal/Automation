const SkinLogin = async ()=>{

    const x = 275; 
    const y = 500; 

    await browser.execute('mobile: tap', {///tap on allow button for notification pop-up by fetchin screen co-ordinates
        
        x: x,
        y: y,
    
    });

    const el1=await $('//XCUIElementTypeTextField[@value="Security key"]')///Interact with Security key
    await el1.setValue('NIH2024');

    const el2=await $('//XCUIElementTypeButton[@name="SUBMIT"]')//click on submit button
    await el2.click();

    const el3=await $('//XCUIElementTypeTextField[@value="Email ID"]')///interact with email address text field
    await el3.setValue('pukhraj.grewal@redblink.com');

    const el4=await $('//XCUIElementTypeSecureTextField[@value="Password"]')///interact with password text field
    await el4.setValue('Password@1');

    const el15=await $('//XCUIElementTypeButton[@name="Done"]')//interact with keyboard's done button
    await el15.click();

    const el5=await $('//XCUIElementTypeButton[@name="Login"]')//interact with login(submit) button
    await el5.click();

    const el6=await $('//XCUIElementTypeStaticText[@name="pukhraj.grewal@redblink.com"]')///select email for OTP verification
    await el6.click();

    const el7=await $('//XCUIElementTypeButton[@name="CONTINUE"]')//confirm the continual of processs
    await el7.click();

    const el8=await $('//XCUIElementTypeApplication[@name="SkinTracker-NIH"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[1]')
    await el8.setValue('2');//enter otp digits

    const el9=await $('//XCUIElementTypeApplication[@name="SkinTracker-NIH"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[2]')
    await el9.setValue('0');//enter otp digits

    const el10=await $('//XCUIElementTypeApplication[@name="SkinTracker-NIH"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[3]')
    await el10.setValue('2');//enter otp digits

    const el11=await $('//XCUIElementTypeApplication[@name="SkinTracker-NIH"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField[4]')
    await el11.setValue('4');//enter otp digits

    const el12=await $('//XCUIElementTypeButton[@name="SUBMIT"]')
    await el12.click();//click on submit button

    const el13=await $('//XCUIElementTypeButton[@name="YES"]')
    await el13.click();//allow sync with apple             

    const x1 = 70;  
    const y1 = 370; 

    await browser.execute('mobile: tap', {///click on all for apple health
        
        x: x1,
        y: y1,
    
    });

    const x2=356;
    const y2=88;

    await browser.execute('mobile: tap',{///click on allow
        x:x2,
        y:y2

    })

    console.log("login was Succesfull")
}

describe("SkinTracker-NIH",()=>{

it.skip("Login",async()=>{

   await SkinLogin();
   
})

it("My Tasks",async()=>{

    await SkinLogin();    

   const el17 = await $('//XCUIElementTypeTable/XCUIElementTypeCell[1]//XCUIElementTypeStaticText[4]')// Get the text of the element

   const text = await el17.getText();  
    
   ////console.log(text);

   const el16 = await $("//XCUIElementTypeTable/XCUIElementTypeCell[1]") ////Interaction with the Surveys start from here

   await el16.click()

   const el22 = await $("//XCUIElementTypeStaticText[starts-with(@name, 'Question')]")//for getting count of the total no of questions in MCQ category

   await el22.waitForExist({ timeout: 5000 }); //timeout so that screen loads properly

   var text1 = await el22.getText();///get text

   let str=text1//storing the text in empty variable

   let parts = str.split(" ");//splittin the text in form of an array

   let value = parseInt(parts[3]);//calling last index of array which contains the total count

   console.log(value)

   for(let i=1; i<value; i++)///Loop for iteration and loop would always run one value less that the total no of questions

   {

    var el18 = await $('//XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther')//select option in form of radio button
    await el18.click();

    const el20 = $('//XCUIElementTypeButton[@name="Next"]')///click on next
    await el20.click()

   }

   var el18 = await $('//XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther')//select final option
   await el18.click();

   const el21=$('//XCUIElementTypeButton[@name="Submit"]')//click on submit
   await el21.click()

   const el23=$('(//XCUIElementTypeButton[@value="1"])[1]')//click on completed tab
   await el23.click()

   const el24=$('//XCUIElementTypeTable/XCUIElementTypeCell[1]//XCUIElementTypeStaticText[4]')//get text for the completed survey
   const text2 =await el24.getText()

   if(text==text2)///match if text matches

   {

    console.log("Survey was completed succesfully")///if text matches

   }

   else
   {

    console.log("Survey didn't completed succesfully")///if text does not matches

   }

})

})