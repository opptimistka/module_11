Feature: EPAM

Scenario: Page title
    Given I open epam.com
    Then Page title should be 'EPAM | Enterprise Software Development, Design & Consulting'
    When I wait for 10 seconds