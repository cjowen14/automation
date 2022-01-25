const { TestScheduler } = require("jest");
const {Builder, Capabilities} = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {crossMovie, deleteMovieNotification, movieDisappear} = require("./functions.js");

beforeAll(async() => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html');
})

afterAll(async() => {
    await driver.quit();
})

test('Cross off watched movie from list', async () =>{
    await crossMovie(driver);
    await driver.sleep(5000);
})

// test('Delete movie notification shows up', async () => {
//     await deleteMovieNotification(driver);
//     await driver.sleep(5000);
// })

test('Deleted movie disappears from the list', async() => {
    await movieDisappear(driver);
    await driver.sleep(5000);
})