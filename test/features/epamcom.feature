Feature: EPAM

@smoke
Scenario: Page title epam
  Given I open "https://www.epam.com/" url
  Then Page title should be "EPAM \| Enterprise Software Development, Design & Consulting"
#   When I wait for "3" seconds