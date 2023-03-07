describe('Amazon Application',async()=>
{

    it('Login scenario for amazon account',async()=>
    {
       await browser.url("https://www.amazon.in/")
        await expect(browser).toHaveTitleContaining("Amazon Application")

         await browser.waitUntil(async()=>await (await $("//a[contains(@aria-label,'Amazon.in')]")).getAttribute('id')=== 'nav-logo-sprites',
         {
             timeout: 5000,
             timeoutMsg: 'Amazon Page is not open yet'
         })
         await (await $("//div[@id='nav-tools']//child::a[contains(@href, 'https://www.amazon.in/ap/signin?')]")).click()
         await browser.waitUntil(async()=>await (await $("//input[@type='email']")).getAttribute('name')=== 'email',
         {
             timeout: 5000,
             timeoutMsg: 'Error message is not showing up'
         })
         browser.closeWindow()


 
        })
 










})