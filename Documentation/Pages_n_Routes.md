# PAGES AND ROUTES

Pages & Routes
--------------
`/` Home with login/signup
--------
- Form generated with `get` request, submit will `post` name, email, password, home city. 
- Utilize Bcrypt for user authentication & authorization (storing password hash to database).

`/` Log-In
------
- Form generated with `get` request, submit will `post` email & password. 
- Utilize Bcrypt for user authentication & authorization.

`/users/:id/dashboard` & `/cities/:id` Table of Card Rooms/Jackpots
------------------
- Table generated with `get` request, pulling data from existing CardRoom table
- Clicking on Card Room name will bring you to card room details page. 
- Ability to filter by user's city (user's city is stored upon sign-up).

`/cardroom/:id/report` Report a more current Jackpot for a specific card room
----------
- Form generated with `get` request, submit will `post` which will update a cardroom row/entry (the current jackpot and reporter column entries). 

`/cardroom/:id` Card Room Details Page
------------
- Details generated with `get` request (more information about the card room such as previous jackpot reports and a few details of the card room such as address and whether or not food is available).
- User has the ability to subscribe to a card room (`post` request would create an entry in the subscriptions table).


`user/:id/dashboard` Dashboard of subscribed Card Rooms and highest current jackpot site wide
----------------------------------------
- Table of cardRoomId/UserId generated with `put` request. Able to tell visually which users are subscribed to what card rooms 
- Clicking on card room will bring you to card room details page. 

`cardrooms/:id/report` User reports will be directed here
-----------------------
- Table of card rooms will be updated here with current jackpot and userId of reporting user with a `put` request.

`users/new` Users have the ability to create a new account
----------------------
Will update the users table with a `put` request adding a new entry when user correctly inputs thier info into the form on `/`

`jackpots/new` Users have the ability to report that a Jackpot has been hit at a card room they are subscribed to
-----------------------
Will make a `put` request and make a new entry to the Jackpots table with all the jackpot details