##The Slap Object Game - Part 2

###Step 1 - The Target Object
- So at this point you have a mostly functional slap game, however its time to refactor and clean up a few problems that could exist. First of all you have a global variable called `health` which is currently being used to control the state of the application. 

To illustrate the problem with a global variable imagine for a moment you are playing an old arcade fighting game. Chances are you have at least two players. Now with just two players it might be easy enough to create two global variable and functions for `player1` and `player2` but what if we are actually playing a game like 

- Double Dragon: 
  - ![Double Dragon](http://nerdemia.com/wp-content/uploads/2016/01/doubledragon.jpg)
- Golden Ax:
  - ![Golden Ax](https://i.ytimg.com/vi/J4tshJrkBw0/hqdefault.jpg) 

Look at all those characters on the screen. Imagine how many global variables you would need to keep track of. There has to be a better way to organize these characters especially when you think about the complexity of each character having their own special moves with unique damage modifiers. 

####Enter Objects
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

###Constructing our Targets

Now you could of course create targets using an object literal `{}` but it might make more sense to create a constructor that we can use to create many targets easily.

####Warning Refactoring will break your code.... But its okay. Don't be afraid to break things.
Now work on converting your global variables to properties that can be used through a `Target constructor`. This will make it so you have to update your code in your `update` function to something like `target.health`

###Step 2 - JS - Health Condition
- We are now going to add a component that changes the color of the background when the player's health drops below
a certain threshold. We will need to use a conditional statement to determine the health. 
1. Inside the update() function add an if statement
```javascript
	if("[TargetHealth]" <= 0){
		 document.getElementById("target-panel").classList.add("panel-danger")
	}else{
		 document.getElementById("target-panel").classList.remove("panel-danger")
	}
``` 
2. When the target's health drops below zero, the panel should turn red.

###Step 3 - Items
- It's now time to add items to our game. Items are objects that will be created using a constructor.
  the items are responsible for reducing or increasing the damage done to the target on hit.
1. Create an Item constructor that takes in the following "options": (name, modifier, description).
2. The Item should have 3 properties: name, modifier, description.
3. Add an empty draw method to the Item.
4. Your constructor should look like the one below. 

```javascript
var Obj = function(option1, option2, option3){
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.draw = function(){
     //...
	}
}
```
 
###Step 4 - Create the items
- Since our game will have multiple items, we need to find an easy way to access them. 
 We can use an array to store a collection of objects. However, arrays are not always the easiest to use, because they require us
 to loop over the entire collection when we are looking for a specific item. What if we instead, create an object that uses the name of the item as a property (key)?
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
 
###Step 5 - Give some items to our target
- We are using an object to store the master list of items in our game. However, we need to be able to give our 
  target items. In this case, we need to use an array, because it may be possible for the user to have multiples of the same item.
1. Create an array property named items on the target object.
2. Place the shield in the first index of the items array.

```javascript
 items:[items.shield]
``` 
3. Keep in mind that the \[items] object that is global, is completly different than the \[items] array on the target.
 
###Step 6 - REDUCE THE DAMAGE!... almost
- How are you at math?
1. Create a function on the target object called, addMods().
2. Using a "for loop", calculate the combined value of modifiers in the player.items array.
	- this may be tricky, but think it through before reading the following hints.
	##HINTS
	1. We need to create a variable to hold the running modifier total.
	2. This variable should be outside of the loop.
	3. Inside the loop, increase the running total by the 'current items modifier'
	4. Arrays need to be accessed by index. \[i]
3. Have the function return the total.

###Step 7 - REDUCE THE DAMAGE!... for real this time.
- Before you begin this step, remember math in javascript
  is the same as on paper. Order of operations matters: **5 * .3 =  1.5**
- Stuck?
- Look at the hit function()
- Total damage done = damage * \[sum of all modifiers]
- Did you get it? Try this:
```javascript
this.health -= damage * this.addMods();
```

###CHALLENGE
1. Add this to the body of the item.draw method.

```javascript
	return '<div class="item">'+ this.name +'</div>';
```

Create a drawItems method under the update() function.
Have the update() function call the drawItems() function.
retrieve from the DOM the element id = "target-items"
set the innerHTML of the element equal to a concatenation of all the items.draw() results.

Add to the UI a way to give your target items.
