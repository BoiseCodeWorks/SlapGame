## The Slap Object Game - Part 2

### Step 1 - The Target Object
So at this point you have a mostly functional slap game, however its time to refactor and clean up a few problems that could exist. First of all you have a global variable called `health` which is currently being used to control the state of the application. 

To illustrate the problem with a global variable imagine for a moment you are playing an old arcade fighting game. Chances are you have at least two players. Now with just two players it might be easy enough to create two global variable and functions for `player1` and `player2` but what if we are actually playing a game like 

- Double Dragon: 
  ![Double Dragon](http://nerdemia.com/wp-content/uploads/2016/01/doubledragon.jpg)
- Golden Ax:
  ![Golden Ax](https://i.ytimg.com/vi/J4tshJrkBw0/hqdefault.jpg) 

Look at all those characters on the screen. Imagine how many global variables you would need to keep track of. There has to be a better way to organize these characters especially when you think about the complexity of each character having their own special moves with unique damage modifiers. 

#### Enter Objects
The real challenge of the `SlapGame` is to start thinking about how your data is structured. Going back to a simpler example think about Ken and Ryu from the street fighter game.

![ken-and-ryu](http://k30.kn3.net/taringa/C/3/6/F/5/0/omarlopezsandova/FE4.gif.cover?)

Ken and Ryu although similar in many ways are indeed two unique people. Let's take a look at what these two characters might look like in code.

```javascript
var ken = {
  health: 120,
  attacks: {
    kick: 20,
    punch: 15,
    uppercut: 30,
    hadouken: 40
  },
  mobility: 35
}

var ryu = {
  health: 100,
  attacks: {
    kick: 15,
    punch: 10,
    uppercut: 25,
    hadouken: 60
  }
  mobility: 55
}
```

Looking at these two characters in code its easy to see some basic differences. Ken perhaps is the stronger fighter with more health and stronger basic attacks but Ryu has the upper hand on his special moves and mobility. 

Now our SlapGame may not be as advanced as Street Fighter but we should still strive to practice good coding behaviors by utilizing objects.

### Constructing our Targets (2pts)

You could of course create targets using an object literal `{}` but it might make more sense to create a constructor that we can use to create many targets easily.

#### Warning Refactoring will break your code.... But its okay. Don't be afraid to break things.

Now work on converting your global variables to properties that can be used through a `Target constructor`. This will make it so you have to update your code in your `update` function to something like `target.health`

### Step 2 - Items (2pts)
- It's now time to add items to our game. Items are objects that will be created using a constructor.
  the items are responsible for reducing or increasing the damage done to the target on hit.
1. Create an Item constructor that takes in the following "options": (name, modifier, description).
2. The Item should have 3 properties: name, modifier, description.
3. Your constructor should look like the one below. 

```javascript
var Obj = function(option1, option2, option3){
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
}
```
 
### Step 3 - Create the items (2pts)
- Since our game will have multiple items, we need to find an easy way to access them. 
 We can use an array to store a collection of objects. However, arrays are not always the easiest to use, because they require us
 to loop over the entire collection when we are looking for a specific item. What if we instead, create an object that uses the name of the item as a property (for more on this topic, review the dictionaries cheetsheet)?
1. Create an object called items.
2. Following the example below, add 2 more items.

```javascript
var items = {
	shield:new Item("Shield",0.3,"This is an awesome shield!"),
	...
	...
}
```
 - We can now easily reference the shield item by calling items.shield.
 - What would items.shield.name return?
 
### Step 4 - Give some items to our target (1pt)
- We are using an object to store the master list of items in our game. However, we need to be able to give our 
  target items. In this case, we need to use an array, because it may be possible for the user to have multiples of the same item.
1. Create an array property named items on the target object.

```javascript
var ryu = {
  health: 100,
  ....
  ....
  items:[]
``` 

2. Keep in mind that the \[items] object that is global, is completly different than the \[items] array on the target.
3. Now write a function (something like giveShield()) that will push an item from the global items object into the items array on the target.
 
### Step 5 - REDUCE THE DAMAGE!... almost (1pt)
- How are you at math?
1. Create a function that will be called, addMods().
2. Using a "for loop", calculate the combined value of modifiers in the target.items array.
	- this may be tricky, but think it through before reading the following hints.
	##HINTS
	1. We need to create a variable to hold the running modifier total
	2. This variable should be outside of the loop
	3. Inside the loop, increase the running total by the 'current items' modifier value
	4. Arrays need to be accessed by index. \[i]
	
3. Have the function return the total.

### Step 6 - REDUCE THE DAMAGE!... for real this time. (1pt)
- Before you begin this step, remember math in javascript
  is the same as on paper. Order of operations matters: **5 * .3 =  1.5**
- Stuck?
- Look at the hit function()
- Total damage done = damage + \[sum of all modifiers]
- Did you get it? Try this:
```javascript
this.health -= damage * this.addMods();
```
- If there are no mods the total should be 1

### Step 7 - Let the user select the Items. (1pt)
- Add a div in the body with an id="items" and put a button for each item
- Write a function that will allow the user to click each button and giveItem("item") to the target
- This shouldn't move the items from the items object but make a copy of them in the target.items array.

 #### Lastly make your game pretty, this will likely be in your portfolio so add a background, move things around with bootstrap etc. 

### Bonus Challenges (.5pts each)
- Draw items to screen dynamically; can you write a function that will itterate over your items list and create a button for each one?
- K.O. Notification: Make a notification apear on the screen once the target's health reaches 0
- Damage Indicator: Most games have not only a number but a health bar, how could you create one for your target (checkout Bootstraps Progress Bars)
- Hit Animation: How could you make something happen everytime you clicked to hit your target? A pop up animation or maybe the picture moves?
- Reset: Your user should have a way to start the game over without having to refresh the page.
- Limit items being used: How could you only allow so many items to be used at a time to prevent users stacking up 100 modifiers
- Randomize damage: Maybe each hit does a damage within a certain range instead of a static number?
- Limit each items number of uses: Should each shield be permenant or does it break after so many hits?
- GUI for what items are active: How does the user know what modifiers are active and their total affect?
