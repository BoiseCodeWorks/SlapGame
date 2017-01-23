##The Slap Game - Part 3

###Encapsulation
 
We now have a fully functioning slap game! Yay! However we know there are vulnerabilities right now that allow savvy users to change parts of the game they should not have access to simply by redefining them in the command line. 

In order to protect our data we need to separate it out using encapsulation, and only allow the user to access it through methods we provide.

####Step 1 - Service

Lets Encapsulate our data and methods into a constructor function called a Service. Services are where we manage the data for  our application by utilizing both private and public functions and variables that can be called by our Controller, but more on controllers in a minute.

1. Create a constructor function to act as your service and title it "GameService"
2. Identify all of your variables and objects that you will want to protect as a part of your service. This should be your Targets as well as your Items, and move these objects into your new "GameService" function 
3. Lastly we are going to alias the keyword 'this' to "dataStore" (we do this to make things more readable when writing our controller)

Your service should look something like this:

```javascript
function GameService(){

var dataStore = this
var target = new Target("Scarecrow", 100, 1, 5, 10);

function Target(name, health, slap, punch, kick) {
        this.name = name;
        this.health = health;
        this.attacks = {
            "slap": slap,
            "punch": punch,
            "kick": kick
        };
        this.items = []
        this.hits = 0
    };
    
function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };
```

####Step 2 - Getters and Setters

Now that we have our data wrapped up in a service the functions we have added are private, meaning they can only be changed from within this service. We need to add the functions that will serve as bridges allowing the user (through the controller) the ability to manipulate the information in a way we control. 

Our attacks are already written but we should modify them to employ better coding practices (if you haven't already).

1. First is to reduce all of our attacks to operate under one function. This should be a function that takes in a string ("slap", "puch", or "kick") and uses the target object like a dictionary to apply it. Additionally it should be public using our aliased "this" (dataStore). example:

```javascript
dataStore.attack = function(type) {
    target.health -= target.attacks[type] * this.addMods()
    target.hits += 1
}
```
(Remember this will also need to be modified on your HTML)

2. Do this with your addMods() and giveItems() as well
3. To get the targets name we will want to make a copy using the Object.assign() method and create a public function that returns the current copy

####Step 3 - Controller

The next step is to put together our controller. The controller acts as the middleman between our service and the DOM. We will instantiate our service within the controller constructor to allow access to all of the services public properties and methods.

1. Start by creating your "GameController" constructor function, and enstatiating your service to var dataStore.
2. Now bring your update function over and its time to REFACTOR!
    -In order for our update functions to work we need to get a current copy of the target object, fortunately we already wrote a function in the service that will do just that. Call that function using your dataStore.getTarget at the beginning of the function and assign it to var target.
3. If you refresh your page you should now have your target and its stats loading in. However your attack functions won't work yet. Using a public function get that feature working again.


###Additional Challenges

- Your game is pretty fun, but what if your target fought back? How could you have them attack you, or another target on every turn? 
- Maybe your user should have a choice of the target, add a few different targets to choose from at the start of the game
- Could you add a form that allowed the user to create new targets and items utilizing your constructor functions let them enjoy this customization? 


