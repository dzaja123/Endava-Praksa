import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

import cartPage from "../../pages/cartPage";
import loginPage from "../../pages/loginPage";

const username = "standard_user"
const password = "secret_sauce"

Given('A user has successfully logged in', () => {
    cy.visit('/');
    loginPage.submitLogin(username, password);
});

When('A user clicks on the {string} button', (button) => {
    cartPage.clickButton(button)
});

Then('A item will be added to the cart', () => {
    cartPage.clickButton("Cart");
    cartPage.cartItemDisplayed();
});

Then('A item will be removed from the cart', () => {
    cartPage.clickButton("Cart");
    cartPage.cartItemNotDisplayed();
});

When('A user types his first name {string}', (firstName) => {
    cartPage.enterFirstName(firstName);
});

When('A user types his last name {string}', (lastName) => {
    cartPage.enterLastName(lastName);
});

When('A user types his zip code {string}', (zipCode) => {
    cartPage.enterZipCode(zipCode);
});

Then('A item checkout will be successfull', () => {
    cartPage.checkoutComplete();
});

Then('The error message {string} will be displayed', (errorMessage) => {
    loginPage.checkErrorMessage(errorMessage);
});