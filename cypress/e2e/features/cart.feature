Feature: Cart

    Feature Cart will work depending on the user added/removed items in the cart.

    Background:
        Given A user has successfully logged in
      
    Scenario: User is able to add item to cart 
        When A user clicks on the Add button
        Then A item will be added to the cart

    Scenario: User is able to remove item to cart
        When A user clicks on the Add button
        And A user clicks on the Remove button
        Then A item will be removed from the cart

    Scenario: User is able to Checkout 
        When A user clicks on the Add button
        And A user clicks on the CHECKOUT button
        And A user types his first name "Petar"
        And A user types his last name "Lazic"
        And A user types his zip code "34000"
        And A user clicks on the Continue button
        And A user clicks Finish button
        Then A item checkout will be successfull 
