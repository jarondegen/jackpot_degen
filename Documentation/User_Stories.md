# USER STORIES

User Stories
------------
1. As an unauthorized user, I want to view a landing page that provides me with information about the website, so I can decide whether or not to sign up. 
    - Questions
    - Acceptance Criteria
        - [ ] User can visit the `/` route and will be served a homepage/landing page that tells them more about the jackpot degen app, with a field to sign-up or sign-in as well as a demo user link.

 2. As an unauthorized user, I want to be able to sign up for the website via a signup form in order to access this awesome website.
    - Questions
        - How long should session last?
            - 1 week
        - What information are we collecting from the user?
            - firstName, lastName, email, password, location(city)
        - Whats the UX like? What does the form look like? How simple is it?
            - Form: Input for all info above, submit button
            - MVP: CSS/minimal page chaging
            - [Additional Feature] Customize CSS/Design
        - Where should the user be redirected after signup?
            - `/users/:id/dashboard`
            - User dashboard showing favorite card rooms and associated jackpots as well as current highest jackpots sitewide. 
        - What happens if the user has signed up previously? (what makes a user unique?)
            - Error message i.e. "User already exists at the Email, Click HERE to log-in"
            - User = userName
        - What are the password requirements?
            - Steal regex from project that requires one special char, one num, etc. 
        - What happens if the user’s password isn’t strong enough?
            - Throw error message (array) specific to each requirement they are missing. 
        - Are we allowing sign up via OAuth?
            - MVP: JWT Token auth (cookies)
            - [Additional Feature] OAuth 2.0
        - Do we need a confirmation email?
            - [Additional Feature]
        - What routes should we use for sign up? 
            - `/sign-up` (get/post)
    - Acceptance Criteria
        - [ ] User can visit the `/sign-up` route and will be served a form with firstName, lastName, email, username, password and location(city/state). 
        - [ ] After user enters valid information for all fields, a new user row is added to the User table, and user is directed to a user dashboard page.
        - [ ] If a user enters invalid sign-up information, they receive a message specific to the information that is incorrect. 
        - [ ] If a user enters an email that is already in use for another user, they receive a message indicating such, with a form field to `/log-in`
    
3. As an unauthorized user, I want to be able to login to the website, via a form, in order to access my private information.
- Questions
    - Will the user enter a username or an email address to login?
        - User will login via email or usernamne and password
    - What routes should we use for login?
        - `/` w/ GET and POST
    - Where should the user be redirected after login?
        - `/users/:id/dashboard`
    - Will we allow oauth authentication via a third party?
        - [Additional Feature]
    - What happens if the user doesn’t exist yet?
        - Display error message with link to sign-up       
    - What happens if the user enters the wrong password?
        - Display error message Invalid Login :( please try again.
    - Should this story include allowing a user to reset their password?
        - [Additional Feature]
    - Should logging in set a session or use token based authentication?
        - We will use JWT token session auth for now
- Acceptance Criteria
    - [ ] User can visit the `/` route and will be served a form requesting email and password, along with link to sign-up page. 
    - [ ] After user enters valid login information, the user is redirected to `/users/:id/dashboard` route.
    - [ ] After user successfully logs in, a session is created with the necessary cookies/etc. 
    - [ ] If a user enters incorrect log-in information, they receive an error message and a link to sign-up. 

4. As an authorized user, I want to be able to log out of the application in order to protect my private information. 
- Questions   
    - Where should you be directed upon signout?
        - `/`
    - Will a user be automatically signed out after a period of time? If so what period?
        - 1 week (session cookie will expire)
    - How can user log out?
        - Log-out link/button will be within navigation bar/available on every page.
- Acceptance Criteria
    - [ ] From any page on the site, the user can click a "Log out" link, which will manually delete their session cookie (logging them out), and redirecting them to the `/` homepage. 

5. As an authorized user, I want to see current card room jackpots in my home city so that I can decide where to play. 
- Questions
    - Will user see every jackpot in city?
        - All jackpots with favorite cardrooms showing first. 
    - Can user organize jackpots by proximity/etc?
        - [Additional Feature]
        - Proximity - Google API
    - Will there be distinct tables/pages for all jackpots vs subscribed cardroom jackpots?
        - Yes, subscribed cardroom jackpots will be served on separate section of the user dashboard page. 
    - What will happen when you click on a specific jackpot?
        - User will be directed to individual cardroom page. 
- Acceptance Criteria
    - [ ] User can visit the `/cardrooms` route and will be served a table containing all cardrooms organized by city ascending. 
    - [ ] User can view jackpots specific to a given city by selecting that city in a scrollbox. Route will update to `/cardrooms/:id` and serve the corresponding cardroom information headlining a current jackpot along with other cardroom info such as address, reviews and whether or not they serve food.
    - [ ] Upon login, will default to user's dashboard  
    - [ ] User can filter jackpots by their home city (button to toggle between `dashboard` and `cardrooms`).
- Additional Features
    - [ ] User can select additional sorting and/or filtering methods for cardrooms/jackpots. 

6. As an authorized user, I want to see jackpots for card rooms that I have subscribed to. 
- Questions
    - Will user see all jackpots?
        - Yes, both subscribed and unsubscribed
- Acceptance Criteria
    - [ ] User can visit the `/dashboard` route and will be served a greeting with their username and a table containing all cardrooms and corresponding jackpots that they have subscribed to
    - [ ] User can click into an individual jackpot/card room and be directed to the individual card room page. 
    - [ ] User will be able to view the distinction between an card roooms that they are subscribed to vs not subscribed to. 
    - [ ] User will be able to view the distinction between current jackpots and jackpots from the past. 
    
7. As an authorized user, I want to be able to report a current jackpot so that other users can see the jackpot and join me at that specific card room
    - Questions
        - Where does the user go to report a jackpot?
            - Link in Navigation Bar, button on card room and Dashboard pages. 
        - How does a user report a new jackpot?
            - Form with jackpot dollar amount field
        - How will a user be able to view the options to edit or cancel a jackpot?
            - Use session cookie to determine if user is reporter of a jackpot on card room table, and only serve up option on the events detail page if user *IS* the reporter. 
        - Is there a limit for the number of reports a user can make?
            - No, perhaps an additional feature.
        - Can two jackpots created by the same user overlap?
            - No the most recent will show as current
    - Acceptance Criteria
        - [ ] User can visit the `/cardroom/id:/report` route and will be served a form to report the current jackpot, including the following inputs: dollar amount with the date/time automatically generated. Their userID will automatically be associated with the current jackpot for that card room. 
        - [ ] After user enters valid information for all fields, the card room table will be updated with the reported current jackpot and the userID as the reporter 
        - [ ] If a user enters any invalid information in the report jackpot field, they will receive an error message based on the incorrect fields.
    
8. As a user, I want a clear and consistent way to navigate across the site.
- Acceptance Criteria
    - [ ] Once logged in, every page has a consistent navigation display containing:
        - Sign Out link/button
        - Jackpots/Card Rooms
        - Report a Jackpot
        - My Dashboard/My Subscribed Card Rooms
        - Homepage `/`
        - Dashboard `/user/:id/dashboard`
        - [Additional Feature] Settings/Edit Profile/Change City

9. As a user, I want to be able to report when a Jackpot is hit so other users know
- Acceptance Criteria
    - [ ] Once logged in and on a card room details page the user is able to click a button to report that the jackpot is hit and report what the new current Jackpot is
