# Test Cases

## Project Overview

**Application:** The Internet — Web Testing Practice Site  
**URL:** https://the-internet.herokuapp.com/  
**Testing Type:** Functional and exploratory testing  
**Purpose:** Validate common web application behaviors and document expected results.

## Test Case TC-001: Successful Login

**Objective:** Verify that a user can log in with valid credentials.

**Preconditions:**
- The login page is accessible.
- A valid test username and password are available.

**Test Steps:**
1. Navigate to the login page.
2. Enter the valid username.
3. Enter the valid password.
4. Click the Login button.

**Test Data:** Use the demo credentials provided on the website.

**Expected Result:**
- The user is successfully authenticated.
- A success message is displayed.
- The user is redirected to the secure area.

**Actual Result:** [Record the observed result after executing the test.]

**Status:** Not Run

---

## Test Case TC-002: Login With Invalid Credentials

**Objective:** Verify that invalid credentials do not grant access.

**Preconditions:**
- The login page is accessible.

**Test Steps:**
1. Navigate to the login page.
2. Enter an invalid username or password.
3. Click the Login button.

**Expected Result:**
- The user is not authenticated.
- An appropriate error message is displayed.
- The secure area remains inaccessible.

**Actual Result:** [Record the observed result after executing the test.]

**Status:** Not Run

---

## Test Case TC-003: Login With Empty Fields

**Objective:** Verify how the login form handles missing credentials.

**Preconditions:**
- The login page is accessible.

**Test Steps:**
1. Navigate to the login page.
2. Leave the username and password fields empty.
3. Click the Login button.

**Expected Result:**
- The application does not grant access.
- The application provides appropriate feedback or validation.

**Actual Result:** [Record the observed result after executing the test.]

**Status:** Not Run

---

## Test Execution Summary

| Test Case | Status | Notes |
|---|---|---|
| TC-001 | Not Run | Pending execution |
| TC-002 | Not Run | Pending execution |
| TC-003 | Not Run | Pending execution |

**Environment:** [Browser, operating system, and date tested]

**Notes:** Results should be updated after executing each test. Test cases describe expected behavior; observed results should reflect actual application behavior.
