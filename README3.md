## The Slap Game - Part 3

### Encapsulation
 
We now have a fully functioning slap game! Yay! However we know there are vulnerabilities right now that allow savvy users to change parts of the game they should not have access to simply by redefining them in the command line. 

In order to protect our data we need to separate it out using encapsulation, and only allow the user to access it through methods we provide.
 
__Note__: Part 3 is a refactor of the slap game up to this point. README3 is an overview, and not a complete guide.

#### Step 1 - Classes

Lets begin encapsulating our applications data by first creating classes for each complex object of our game, namely the target and the items.

1. Create a new file for each class (_these new files will live within a new folder named models_)
2. Export each class out of their files (`export default`) in order to utilize that class elsewhere in our application
   
Your Target.js should look something like this:

```javascript
export default class Target {
  contructor(name, health, slap, punch, kick) {
    this.name = name
    this.health = health
    this.attacks = {
      "slap": slap,
      "punch": punch,
      "kick": kick
    }
    this.items = []
    this.hits = 0
  }
}
```

And your Item.js should look something like this:

```javascript
export default class Item {
  constructor(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
  }
}
```

#### Step 2 - Service

Lets Encapsulate our data and methods into a class called GameService. Services are where we manage the data for our application by utilizing both private and public functions and variables that can be called by our Controller, but more on controllers in a minute.

1. Create a new folder called components and inside components create a game-service.js
2. Create a new class to act as your service and title it "GameService"

Your game-service.js should look something like this:

```javascript
import Target from '../models/Target.js'
import Item from '../models/Item.js'

let _target = new Target("Scarecrow", 100, 1, 5, 10);
let hat = new Item("Straw Hat", 5, "It's my good hat");

let _items = [hat] //create and add as many items as you like

export default class GameService {
  constructor() { }

  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemIndex) {
    // you will need to write the logic to check if the item is already in the target's items before you add it again
    let targetItem = _items[itemIndex]
    _target.items.push(targetItem)
  }

  attackTarget(attackName) {
    // you will need to write the logic to account for items your target may have
    // you will also need to write the logic to check whether the target is alive or dead
    let attackDamage = _target.attacks[attackName]
    _target.health -= attackDamage
    _target.hits++
  }

  //any other methods you might want on your service
}
```

* Notice we write `import Target from '../models/Target.js' ` to utilize the exported code from Target.js within the GameServe.js file

#### Step 3 - Controller

The next step is to put together our controller. The controller acts as the middleman between our service and the DOM. We will instantiate our service within the game-controller.js file to allow access to all of the GameService's properties and methods.

1. Inside of the components folder create a new file called game-controller.js
2. Create a new class to act as your controller and title it "GameController"

Your game-controller.js should look something like this:

```javascript
import GameService from './game-service.js'

let _gameService = new GameService()

function draw() {
  let target = _gameService.Target
  let template = `
  <div class="card">
      <h2>${target.name}</h2>
      <h4>Health: ${target.health}</h4>
  </div>
  `
  //you will need to modify your template string to be whatever you want and then set it as the innerHTML 
  //of an element on the DOM
}

//any other private functions you may want

export default class GameController {
  constructor() { }

  addItemToTarget(itemIndex) {
    _gameService.addItemToTarget(itemIndex)
  }
  
  attackTarget(attackName) {
    _gameService.attackTarget(attackName)
    draw()
  }

  //any other public methods you may want
}
```

#### Step 3 - The Entry Point

Now that we've written all of these scripts, we need one script that will be the single entry point into all of our javascript files from the DOM. We will call it main.js

1. At the root level of your slap game create a folder called app
2. Inside of the app folder create a new javascript file called main.js
  * Make sure you've moved both your components and models folder into the app folder
  
Your main.js should look like this: 

```javascript
import GameController from './components/game-controller.js'

class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

window.app = new App()
```

* __Note__: Your onclick's will now have to drill down to the GameController, e.g. `onclick="app.controllers.gameController.attack('slap')"`

## Requirements
 - Visualization: 
 	- Project maintains visuals previously defined
 - Functionality:
 	- Functionality remains however project has been encapsulated

### Stretch Goals

- Your game is pretty fun, but what if your target fought back? How could you have them attack you, or another target on every turn? 
- Maybe your user should have a choice of the target, add a few different targets to choose from at the start of the game
- Could you add a form that allowed the user to create new targets and items utilizing your constructor functions let them enjoy this customization? 
