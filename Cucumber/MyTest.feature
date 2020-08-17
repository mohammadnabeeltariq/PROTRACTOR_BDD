Feature: My Tests
    @tag1
    Scenario: Validate Redirecttion
        Given Open Protractor Website
        When Click View on GitHub Button
    #   Then Verify Page is Redirected to GitHub

    @tag2
    Scenario: Validate Data
        Given Open website
        When Store the data of last row in variable to verify it on the next page
        When User click on view icon button
        Then Verify that data on the previous page are same as on this page
