package com.adactin.stepdefinition;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.adactin.runner.Runnerclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
	public static WebDriver driver= Runnerclass.driver;
	@Given("^user Launch The Url In Adactin Application$")
	public void user_Launch_The_Url_In_Adactin_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");
	}

	@When("^user Enter the Username In The Username Field$")
	public void user_Enter_the_Username_In_The_Username_Field() throws Throwable {
		WebElement input2 = driver.findElement(By.id("username"));
		input2.sendKeys("Sathish1826");
	}

	@When("^user Enter The Password In The Password field$")
	public void user_Enter_The_Password_In_The_Password_field() throws Throwable {
		WebElement input3 = driver.findElement(By.id("password"));
		input3.sendKeys("Sathish3456");
	}

	@Then("^user Clicks The Login Button$")
	public void user_Clicks_The_Login_Button() throws Throwable {
		driver.findElement(By.id("login")).click();
	}

	@When("^user Selects The Hotel Location In The Location Field From The Dropdown List$")
	public void user_Selects_The_Hotel_Location_In_The_Location_Field_From_The_Dropdown_List() throws Throwable {
		driver.findElement(By.id("location")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
	}

	@When("^user Selects The Hotel In The List Of Hotels From The Drop Down List$")
	public void user_Selects_The_Hotel_In_The_List_Of_Hotels_From_The_Drop_Down_List() throws Throwable {
		driver.findElement(By.id("hotels")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
	}

	@When("^user Selects The Room Type In The Room Type Field From Drop Down List$")
	public void user_Selects_The_Room_Type_In_The_Room_Type_Field_From_Drop_Down_List() throws Throwable {
		driver.findElement(By.id("room_type")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
	}

	@When("^user Selects The Number Of Rooms In The Number Of Rooms From Drop Down List$")
	public void user_Selects_The_Number_Of_Rooms_In_The_Number_Of_Rooms_From_Drop_Down_List() throws Throwable {
		driver.findElement(By.id("room_nos")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
	}

	@Then("^user Clicks The Search Button$")
	public void user_Clicks_The_Search_Button() throws Throwable {
		driver.findElement(By.id("Submit")).click();
	}

	@When("^user Clicks The Radio Button For The Confirmation Of The Booking The Hotel Room With Selected Date And Price$")
	public void user_Clicks_The_Radio_Button_For_The_Confirmation_Of_The_Booking_The_Hotel_Room_With_Selected_Date_And_Price() throws Throwable {
		driver.findElement(By.id("radiobutton_0")).click();
	}

	@Then("^user Clicks The Continue Button$")
	public void user_Clicks_The_Continue_Button() throws Throwable {
		driver.findElement(By.id("continue")).click();
		
	}

	@When("^user Enters The First Name In The First Name Field$")
	public void user_Enters_The_First_Name_In_The_First_Name_Field() throws Throwable {
		driver.findElement(By.id("first_name")).sendKeys("THENN");
	}

	@When("^user Enters The Last Name In The Last Name In The Last Name Field$")
	public void user_Enters_The_Last_Name_In_The_Last_Name_In_The_Last_Name_Field() throws Throwable {
		driver.findElement(By.id("last_name")).sendKeys("ARASU 007");
	}

	@When("^user Enters The Billing Address In The Billing Address Field$")
	public void user_Enters_The_Billing_Address_In_The_Billing_Address_Field() throws Throwable {
		driver.findElement(By.id("address")).sendKeys("5, JAVA NAGAR,SELENIUM HIGH ROAD,TIRUNELVELI");
	}

	@When("^user Enters The Credit Card Number In The Credit Card Field$")
	public void user_Enters_The_Credit_Card_Number_In_The_Credit_Card_Field() throws Throwable {
		driver.findElement(By.id("cc_num")).sendKeys("1234567891234567");
	}

	@When("^user Selects The Credit Card Type From The Drop Down List In The Credit Card Field$")
	public void user_Selects_The_Credit_Card_Type_From_The_Drop_Down_List_In_The_Credit_Card_Field() throws Throwable {
		driver.findElement(By.id("cc_type")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
	}

	@When("^user Selects The Expiry Date ,Month,Year From The Drop Down List In The Expiry Dte Field$")
	public void user_Selects_The_Expiry_Date_Month_Year_From_The_Drop_Down_List_In_The_Expiry_Dte_Field() throws Throwable {
		driver.findElement(By.id("cc_exp_month")).click();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		driver.findElement(By.id("cc_exp_year")).click();
		
	}

	@When("^user Enter The Cvv Number In The Cvv Number Field$")
	public void user_Enter_The_Cvv_Number_In_The_Cvv_Number_Field() throws Throwable {
		driver.findElement(By.id("cc_cvv")).sendKeys("123");
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		
	}

	@Then("^user Clicks Book Now Button$")
	public void user_Clicks_Book_Now_Button() throws Throwable {
		driver.findElement(By.id("book_now")).click();
		
	}

	@Then("^user Clicks The Logout Button$")
	public void user_Clicks_The_Logout_Button() throws Throwable {
		driver.findElement(By.xpath("//a[text()='Logout']")).click();
	}
}
