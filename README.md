##The Slap Object Game - Part 1

####Objective:
Students will use javascript in order to interact with the DOM to create a dynamic webpage. Since students
will work in groups they will practice using a shared repository or may use pull requests.

###Step 1 - GIT - Project Initialization

1. Everyone should break into groups of 2 or 3.
1. A member of the group should create a git repository named TheObjectGame
1. Create the file index.html and a script file called game.js and a css file name game.css.
1. Commit changes and push them back to GitHub.
1. Each team member should then clone the repository via GIT.

###Step 2 - HTML - Create page layout and Slap button

1. link bootstrap game.js and game.css to index.html.
1. Start by adding a bootstrap panel with a header, body and footer. http://getbootstrap.com/components/#panels
1. Add an image to the body of a stick figure with a width of 200px
1. Add a button to the footer with the text "Slap"

###Step 3 - JS - Declare variables and write the Slap function

1. create a global variable: var health=100;
1. create a function: slap()
  - have the function reduce the health variable by 1.
  - for now, have the function alert(health).
  - test the function by calling slap() at the end of the game.js file. 
    - you should see an alert of 99 show on the screen.
    - if this is working, remove the test to prevent popups on every page load.

###Step 4 - HTML - Link the Slap button to the Slap function
1. On the slap button element, add the attribute onClick="slap()"
  - if things are working properly you should be able to hit the slap button and see the
  alert window with a decrease in health.
1. To prevent having to show the players health in popup, let's link the player's health directly to the user interface.
1. Add a span element to the header for the players health: example - <span>Health:<span id="health">--</span></span>
  - the id is important so we can call the element from JS easily.

###Step 5 - JS - Update the user interface
1. We are now going to add a function to manipulate the user interface by using the DOM API.
  - To do this, javascript is required.
  - You should know by now that selectors are required in order to select specific elements inside the DOM.
  - In this case, we will use the infamous "document.getElementById("WHATEVER-ID")";
1. Add a function called update(). This will be responsible for updating the user interface whenever a value changes.
  - have the function set the "innerText" of the element with the id "health"
  - see if you and the group can figure this out on your own, if not ask a mentor.
1. Add a call to the update() function at the bottom of your js file. If it is working, you should see the player health on the screen.
  - There is no need to delete the call you just added, it is recommended so you always start off with populated values.
1. If it is working, make sure you add a call to update at the end of the punch function. This way the screen is updated after ever punch.

###Step 6 - HTML - Add the other buttons and stuff...
1. Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
  - Have the punch function decrease the player health by 5, and kick by 10.
  - Don't forget to call update inside each function.
1. Declare 2 more variables 'name', and 'hits' where you initialized the health variable. 
  -name your player whatever you want, what datatype would a name be?
  -set the variable hits with a value of 0, every time the player is hit by a Slap, Punch, or Kick
this variable should be increased by 1.
1. Add a placeholder for player name, and hits inside the header next to health.
1. Wire everything up like you did for "Slap".

###Step 7 - Testing Time
1. You should now have a functioning application. Test the following
  - In the panel header you should see an indicator for Health, Name, and Hits; their respective values should be 100, "Whatever Name You Chose", and 0.
  - Click the slap button, you should see the player health drop to 99 and hit count to 1.
  - Click the punch button, you should see the player health drop to 94 and hit count to 2.
  - Finally click the Kick button, you should see the player health drop to 84 and hit count to 3.
  - Keep pressing buttons... What happens when the player has been hit for over 100 hit points? Why does this happen?
  - Discuss with the group some ideas on improvements, write these ideas down and be prepared to share.

