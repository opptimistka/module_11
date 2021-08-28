@smoke
Feature: Telerik site menu verification

@menu
Scenario Outline: Check menu item: <URL>
  Given I open 'https://www.telerik.com/' url
  Then I highlight '<xpath>'
When I wait for 2 seconds
  Then I click '<element_name>' by xpath '<xpath>'
When I wait for 2 seconds
  Then I check current landing page is matching the '<Expected url>'
  Then Page title should be '<Page title>'
When I wait for 3 seconds

  Examples:
  |element_name   | xpath                                       | Expected url                                     | Page title                                                               |
  |Demos          | //*[@id="js-tlrk-nav-drawer"]/ul[1]/li[1]/a | https://www.telerik.com/support/demos            | Telerik Product Demos, Examples and Tutorials for all Telerik products   |
  |Services       | //*[@id="js-tlrk-nav-drawer"]/ul[1]/li[2]/a | https://www.telerik.com/services                 | App Development, Consulting, Training and Outsourcing Services - Telerik |
  |Blogs          | //*[@id="js-tlrk-nav-drawer"]/ul[1]/li[3]/a | https://www.telerik.com/blogs                    | What\'s New in .NET and JavaScript Developer Tooling - Telerik Blogs     |
  |Docs & Support | //*[@id="js-tlrk-nav-drawer"]/ul[1]/li[4]/a | https://www.telerik.com/support                  | Support and Learning \| Telerik                                          |
  |Pricing        | //*[@id="js-tlrk-nav-drawer"]/ul[1]/li[5]/a | https://www.telerik.com/purchase.aspx?filter=web | Purchase Telerik Software Development Tools                              |