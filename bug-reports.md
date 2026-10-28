# Bug Reports

## Purpose

This document demonstrates a structured approach to documenting software defects. Each report should include enough information for another person to reproduce and investigate the issue.

**Note:** The examples below are illustrative templates. They are not claims that these defects exist in the referenced application. Replace them with observed defects if you discover any during testing.

---

## Bug Report BR-001: Error Message Does Not Clearly Explain Invalid Login

**Status:** Example — Not Verified  
**Severity:** To Be Determined  
**Priority:** To Be Determined  
**Area:** Authentication / Login

### Description
The login form may provide an unclear or insufficient error message when a user enters invalid credentials. This report illustrates how to document the issue if that behavior is observed.

### Preconditions
- The login page is accessible.

### Steps to Reproduce
1. Navigate to the login page.
2. Enter invalid login credentials.
3. Click the Login button.
4. Review the error message displayed.

### Expected Result
The application should clearly communicate that authentication failed without exposing sensitive information.

### Actual Result
Not yet observed. Record the exact message and behavior if the issue is reproduced.

### Impact
Unclear feedback could make it harder for users to understand why login failed.

### Evidence
Attach a screenshot or relevant console/network details if available. Do not include real passwords, tokens, or other sensitive information.

---

## Bug Report BR-002: Login Form Accepts Empty Input Without Clear Feedback

**Status:** Example — Not Verified  
**Severity:** To Be Determined  
**Priority:** To Be Determined  
**Area:** Authentication / Form Validation

### Description
This example covers a potential validation issue when a user submits the login form without entering credentials.

### Preconditions
- The login page is accessible.

### Steps to Reproduce
1. Navigate to the login page.
2. Leave the username and password fields empty.
3. Click the Login button.
4. Observe the resulting page and any validation messages.

### Expected Result
The application should reject the login attempt and provide appropriate feedback or field validation.

### Actual Result
Not yet observed. Record the actual behavior if the issue is reproduced.

### Impact
Missing or unclear validation may cause confusion and lead to unnecessary login attempts.

### Evidence
Add a screenshot or other relevant evidence if the issue is observed and reproducible.

---

## Defect Reporting Guidelines

- Use a short, descriptive title that identifies the problem.
- Include numbered reproduction steps.
- Separate expected behavior from actual behavior.
- Assign severity based on impact and priority based on urgency.
- Include relevant screenshots, logs, and environment details when available.
- Retest after a fix and record the outcome.

**Important:** Only report a defect as confirmed after reproducing it. Update these examples with actual observations before presenting them as completed testing work.
