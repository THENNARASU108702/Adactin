$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user Login To The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-to-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url In Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the Username In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In The Password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks The Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Launch_The_Url_In_Adactin_Application()"
});
formatter.result({
  "duration": 13474575100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_the_Username_In_The_Username_Field()"
});
formatter.result({
  "duration": 269829000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Password_In_The_Password_field()"
});
formatter.result({
  "duration": 268259200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_The_Login_Button()"
});
formatter.result({
  "duration": 1323943300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Navigate To Search The Adactin Application And Enters The Location",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-navigate-to-search-the-adactin-application-and-enters-the-location",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@hotelsearch"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Selects The Hotel Location In The Location Field From The Dropdown List",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Selects The Hotel In The List Of Hotels From The Drop Down List",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Selects The Room Type In The Room Type Field From Drop Down List",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Selects The Number Of Rooms In The Number Of Rooms From Drop Down List",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Clicks The Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Hotel_Location_In_The_Location_Field_From_The_Dropdown_List()"
});
formatter.result({
  "duration": 204392000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Hotel_In_The_List_Of_Hotels_From_The_Drop_Down_List()"
});
formatter.result({
  "duration": 159367700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Room_Type_In_The_Room_Type_Field_From_Drop_Down_List()"
});
formatter.result({
  "duration": 91661200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Number_Of_Rooms_In_The_Number_Of_Rooms_From_Drop_Down_List()"
});
formatter.result({
  "duration": 98498400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_The_Search_Button()"
});
formatter.result({
  "duration": 865938700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Navigated To Book Itinerary Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-navigated-to-book-itinerary-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@hotelpage"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user Clicks The Radio Button For The Confirmation Of The Booking The Hotel Room With Selected Date And Price",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Clicks The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_The_Radio_Button_For_The_Confirmation_Of_The_Booking_The_Hotel_Room_With_Selected_Date_And_Price()"
});
formatter.result({
  "duration": 167530500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_The_Continue_Button()"
});
formatter.result({
  "duration": 1263330400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User Navigated To Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-navigated-to-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@bookhotel"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user Enters The First Name In The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Enters The Last Name In The Last Name In The Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Enters The Billing Address In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Enters The Credit Card Number In The Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Selects The Credit Card Type From The Drop Down List In The Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Selects The Expiry Date ,Month,Year From The Drop Down List In The Expiry Dte Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Enter The Cvv Number In The Cvv Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Clicks Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Enters_The_First_Name_In_The_First_Name_Field()"
});
formatter.result({
  "duration": 115934800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enters_The_Last_Name_In_The_Last_Name_In_The_Last_Name_Field()"
});
formatter.result({
  "duration": 166695200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enters_The_Billing_Address_In_The_Billing_Address_Field()"
});
formatter.result({
  "duration": 305187700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enters_The_Credit_Card_Number_In_The_Credit_Card_Field()"
});
formatter.result({
  "duration": 292954200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Credit_Card_Type_From_The_Drop_Down_List_In_The_Credit_Card_Field()"
});
formatter.result({
  "duration": 217092800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selects_The_Expiry_Date_Month_Year_From_The_Drop_Down_List_In_The_Expiry_Dte_Field()"
});
formatter.result({
  "duration": 367416400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Cvv_Number_In_The_Cvv_Number_Field()"
});
formatter.result({
  "duration": 111159200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_Book_Now_Button()"
});
formatter.result({
  "duration": 125011500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User Navigated To Booking Confirmation Page Where Order Number Appears",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-navigated-to-booking-confirmation-page-where-order-number-appears",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@logouts"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user Clicks The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_The_Logout_Button()"
});
formatter.result({
  "duration": 600136500,
  "status": "passed"
});
});