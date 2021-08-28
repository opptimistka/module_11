@all
Feature: Telerik search test

@search
Scenario: Check home page elements content: <URL>
  Given I open 'https://www.telerik.com/' url
  Then I highlight Search field by xpath '//*[@id="js-tlrk-nav-search-link"]'
When I wait for 2 seconds
  Then I click search field by xpath '//*[@id="js-tlrk-nav-search-link"]'
When I wait for 2 seconds
  Then Page title should be 'Search Results'
When I put mouse cursor to search field by xpath '//*[@id="GeneralContent_C006_Col00"]/section[1]/div/div/div/tk-site-search/div/div/input'
  Then I put the keyword 'Fiddler Everywhere' to the field
  Then I hit Enter
When I wait for 5 seconds
  # Then I verify search results are non-zero by xpath '//*[@id="js-results-wrapper"]/div[3]/div'