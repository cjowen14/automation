const {By} = require("selenium-webdriver");

const crossMovie = async(driver) => {
    // Adding a movie to the list to cross off the list
    await driver.findElement(By.xpath('//input')).sendKeys('The Last Jedi');
    await driver.findElement(By.xpath('//button')).click();

    // Using xpath, select span element that contains movie title and click
    await driver.findElement(By.xpath('//span')).click();

    // Using xpath, check if the span element now contains the checked class
    const movie = await driver.findElement(By.xpath('//span[contains(@class,"checked")]'));
    expect(movie).toBeTruthy();
}

const deleteMovieNotification = async(driver) => {
    // Adding a movie to the list to cross off the list
    await driver.findElement(By.xpath('//input')).sendKeys('The Notebook');
    await driver.findElement(By.xpath('//button')).click();

    // Using xpath, select and click the delete button
    await driver.findElement(By.xpath('//button[contains(@id, "TheNotebook")]')).click();

    // Checking to see if notification is displayed that movie has been deleted
    const movie = await driver.findElement(By.xpath('//aside[text()="The Notebook deleted!"]'));
    expect(movie).toBeTruthy();
}

const movieDisappear = async(driver) => {
    // Adding a movie to the list to cross off the list
    await driver.findElement(By.xpath('//input')).sendKeys('Apollo 18');
    await driver.findElement(By.xpath('//button')).click();

    // Using xpath, select and click the delete button
    await driver.findElement(By.xpath('//button[contains(@id, "Apollo18")]')).click();

    const movies = await driver.findElements(By.xpath('//span'));
    const deletedMovie = await driver.findElements(By.xpath('//span[text()="Apollo 18"]'));
    expect(movies).not.toEqual(deletedMovie);
}


module.exports = {
    crossMovie,
    deleteMovieNotification,
    movieDisappear
}

