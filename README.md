## The Slap Game - Part 1 (10pts)

#### Objective:
Students will use javascript in order to interact with the DOM to create a dynamic webpage.

### Step 1 - GIT - Project Initialization

1. Create a git repository named SlapGame
2. Create the file index.html and a script file called game.js and a css file name game.css.
3. Commit changes and push them back to GitHub.

### Step 2 - HTML - Create page layout and Slap button

1. Link Bootstrap game.js and game.css to index.html.
2. Add an image to the body with a width of 200px this is your "target"
3. Add a button to the footer with the text "Slap"

### Step 3 - JS - Declare variables and write the Slap function

1. Create a global variable: var health=100;
2. Create a function: slap()
  - Have the function reduce the health variable by 1.
  - For now, have the function alert(health).
  - Test the function by calling slap() at the end of the game.js file. 
    - You should see an alert of 99 show on the screen.
    - If this is working, remove the test to prevent popups on every page load.

### Step 4 - HTML - Link the Slap button to the Slap function

1. On the slap button element, add the attribute onClick="slap()"
  - If things are working properly you should be able to hit the slap button and see the
  alert window with a decrease in health.
2. To prevent having to show the targets health in popup, let's link the target's health directly to the user interface.
3. Add a span element to the header for the target's health, example: 
```html
<span>Health:<span id="health">--</span></span>
```
  - The id is important so we can call the element from JS easily.

### Step 5 - JS - Update the user interface

1. We are now going to add a function to manipulate the user interface by using the DOM API.
  - To do this, javascript is required.
  - You should know by now that selectors are required in order to select specific elements inside the DOM.
  - In this case, we will use the infamous "document.getElementById("WHATEVER-ID")";
2. Add a function called update(). This will be responsible for updating the user interface whenever a value changes.
  - Have the function set the "innerText" of the element with the id "health"
3. Add a call to the update() function at the bottom of your js file. If it is working, you should see the target's health on the screen.
  - There is no need to delete the call you just added, it is recommended so you always start off with populated values.
4. If it is working, make sure you add a call to update at the end of the slap function. This way the screen is updated after every slap.


### Step 6 - HTML - Add the other buttons and stuff...

1. Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
  - Have the punch function decrease the target's health by 5, and kick by 10.
  - Don't forget to call update inside each function.
2. Declare 2 more variables 'name', and 'hits' where you initialized the health variable. 
  -Name your target whatever you want, what datatype would a name be?
  -Set the variable hits with a value of 0, every time the target is hit by a Slap, Punch, or Kick
    this variable should be increased by 1.
3. Add a placeholder for target name, and hits inside the header next to health.
4. Wire everything up like you did for "Slap".

### Step 7 - Testing Time
1. You should now have a functioning application. Test the following
  - In the panel header you should see an indicator for Health, Name, and Hits; their respective values should be 100, "Whatever Name       You Chose", and 0.
  - Click the slap button, you should see the target health drop to 99 and hit count to 1.
  - Click the punch button, you should see the target health drop to 94 and hit count to 2.
  - Finally click the Kick button, you should see the target health drop to 84 and hit count to 3.
  - Keep pressing buttons... What happens when the target has been hit for over 100 hit points? Why does this happen?

### Requirements   
  - Visualization: 
      - Current Health and Health Updates are visible while game is being played
  - Functionality: 
      - 3 Buttons to affect status in varying amounts


