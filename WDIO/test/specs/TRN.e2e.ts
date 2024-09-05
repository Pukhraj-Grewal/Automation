describe('TRN Global', () => {
    it.only('Login', async () => {

        const el = await $('//android.widget.TextView[@text="Login"]'); // Replace with your element selector
        await el.click();
        
        const el2 =await $('//android.widget.EditText[@resource-id="username"]')
        const contexts  = await browser.getContexts()
        await browser.switchContext;
        await el2.waitForDisplayed({ timeout: 5000 });
        await el2.click();
        await el2.setValue('grewal.pukhraj@gmail.com')

        const el3= await $('//android.widget.EditText[@resource-id="password"]')
        await el3.click()
        await el3.setValue('Password@1')
       /// console.log("Hello")
    });
});