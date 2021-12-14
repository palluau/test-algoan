Feature: Test the algoan front page
  Scenario: Searching for title and open request for demo page
    Given I go to Algoan web page
    Then I can see "Algoan | Credit decisioning as a service" in title
    When I go to demo page
    Then I can see form
    
