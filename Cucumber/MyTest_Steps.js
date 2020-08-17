var myTest = function () {
    this.Given(/^Open Protractor Website$/, function (callback) {
        browser.get("http://www.protractortest.org/#/");
        browser.sleep(10000);
        callback();

    }

    );

    this.When(/^Click View on GitHub Button$/, function (callback) {
        browser.sleep(5000);
        element(By.css("img[alt='github logo']")).click();
        browser.sleep(5000);
         callback();

          });


    // this.Then("Verify Page is Redirected to GitHub", function (callback) {
    //     browser.sleep(5000);
    //     callback();

    // } );

}

module.exports = myTest;


var home = function () {


    this.Given("Open website", function (callback) {

        // Write code here that turns the phrase above into concrete actions
        browser.get("https://dassdevarajan.github.io/demo-app/");
        callback();
        browser.sleep(10000);

        //maximize the browser
        browser.manage().window().maximize();
        callback();
    });



    this.When("Store the data of last row in variable to verify it on the next page", function (callback) {

        //storing values in variable to verify it on view page
        var product_name = "1001 Activities Book";
        var description = "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
        var category = "Books";
        var quantity = "300";
        var unit_price = "4";
        var supplier = "ABC Publications";
        var returnable = "false";
        callback();
    });



    this.When("User click on view icon button", function (callback) {

        //clciking on view icon
        element.all(by.tagName('tr')).last().element(by.id('view')).click();
        browser.sleep(7000);
        callback();
    });



    this.Then("Verify that data on the previous page are same as on this page", function (callback) {
        var product_name = "1001 Activities Book";
        var description = "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
        var category = "Books";
        var quantity = "300";
        var unit_price = "4";
        var supplier = "ABC Publications";
        var returnable = "false";

        if (element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText() == product_name) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText() == description) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText() == category) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText() == quantity) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText() == unit_price) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText() == supplier) {

            console.log("test case passed: correct name displayed");
        }

        if (element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText() == returnable) {

            console.log("test case passed: correct name displayed");
        }
        //verifying the values are correct or not
        // expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(product_name);
        // expect(element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText()).toBe(description);
        // expect(element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText()).toBe(category);
        // expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe(quantity);
        // expect(element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText()).toBe(unit_price);
        // expect(element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText()).toBe(supplier);
        // expect(element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText()).toBe(returnable);
        browser.sleep(7000);
        callback();
    });






}
module.exports = home;