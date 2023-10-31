Feature: Hotel Booking in Adactin Application
@login
Scenario: user Login To The Web Application
Given user Launch The Url In Adactin Application
When user Enter the Username In The Username Field
And user Enter The Password In The Password field
Then user Clicks The Login Button
@hotelsearch
Scenario: User Navigate To Search The Adactin Application And Enters The Location
When user Selects The Hotel Location In The Location Field From The Dropdown List
And user Selects The Hotel In The List Of Hotels From The Drop Down List
And user Selects The Room Type In The Room Type Field From Drop Down List
And user Selects The Number Of Rooms In The Number Of Rooms From Drop Down List

Then user Clicks The Search Button
@hotelpage
Scenario: User Navigated To Book Itinerary Hotel Page
When user Clicks The Radio Button For The Confirmation Of The Booking The Hotel Room With Selected Date And Price

Then user Clicks The Continue Button
@bookhotel
Scenario: User Navigated To Book A Hotel
When user Enters The First Name In The First Name Field
And user Enters The Last Name In The Last Name In The Last Name Field
And user Enters The Billing Address In The Billing Address Field
And user Enters The Credit Card Number In The Credit Card Field
And user Selects The Credit Card Type From The Drop Down List In The Credit Card Field
And user Selects The Expiry Date ,Month,Year From The Drop Down List In The Expiry Dte Field
And user Enter The Cvv Number In The Cvv Number Field
Then user Clicks Book Now Button
@logouts
Scenario: User Navigated To Booking Confirmation Page Where Order Number Appears

Then user Clicks The Logout Button
 
  