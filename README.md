# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) HW React Events

# Week08Day02

Following up on the Codealong and working on the same data add the element of adding, removing objects to the meme array in the following way.

### The images should start as hidden
<img src="https://i.imgur.com/wEToxTs.png" width="400px" height="auto" />


### And show when a user clicks on the title show the meme
<img src="https://i.imgur.com/NNrDmwR.png" width="400px" height="auto" />

### Memes Data
```js
[
  {
  "id": 1,
  "title": "Angry",
  "image": "http://imgur.com/kH6o0mN.png"
  },
  {
  "id": 2,
  "title": "Aww Yeah",
  "image": "http://imgur.com/vTSZ6CG.png"
  },
  {
  "id": 3,
  "title": "Cereal Guy",
  "image": "http://imgur.com/SjnMMhd.png"
  },
  {
  "id": 4,
  "title": "Cereal Spitting",
  "image": "http://imgur.com/rdw32yx.png"
  },
  {
  "id": 5,
  "title": "Challenge Accepted",
  "image": "http://imgur.com/xHcS2LF.png"
  },
  {
  "id": 6,
  "title": "Heck Yea",
  "image": "http://imgur.com/DRd0yKE.png"
  },
  {
  "id": 7,
  "title": "Concentrated",
  "image": "http://imgur.com/t9uwvai.png"
  },
  {
  "id": 8,
  "title": "Derrrp",
  "image": "http://imgur.com/kBSZgbG.png"
  },
  {
  "id": 9,
  "title": "Determined",
  "image": "http://imgur.com/CATjyHj.png"
  },
  {
  "id": 10,
  "title": "Dude Come On",
  "image": "http://imgur.com/8Tkr6ld.png"
  },
  {
  "id": 11,
  "title": "EWBTE",
  "image": "http://imgur.com/ZaSaYAK.png"
  },
  {
  "id": 12,
  "title": "Excited Troll",
  "image": "http://imgur.com/CFLPW9U.png"
  },
  {
  "id": 13,
  "title": "Fap Fap",
  "image": "http://imgur.com/NImikb7.png"
  },
  {
  "id": 14,
  "title": "Forever Alone",
  "image": "http://imgur.com/4L89AMP.png"
  },
  {
  "id": 15,
  "title": "Forever Alone Excited",
  "image": "http://imgur.com/NyEoz2g.png"
  },
  {
  "id": 16,
  "title": "Oh Yea Female",
  "image": "http://imgur.com/WMgvwaq.png"
  },
  {
  "id": 17,
  "title": "Full Panel",
  "image": "http://imgur.com/iN5P0r4.png"
  },
  {
  "id": 18
  "title": "Happy",
  "image": "http://imgur.com/JqhcMU4.png"
  },
  {
  "id": 19,
  "title": "Hehehe",
  "image": "http://imgur.com/U9GK6jL.png"
  },
  {
  "id": 20,
  "title": "Laughing",
  "image": "http://imgur.com/wJUtNXR.png"
  },
  {
  "id": 21,
  "title": "Me Gusta",
  "image": "http://imgur.com/6otWkQZ.png"
  },
  {
  "id": 22,
  "title": "Milk",
  "image": "http://imgur.com/bxMhEKZ.png"
  },
  {
  "id": 23,
  "title": "Newspaper Guy",
  "image": "http://imgur.com/MhbPTSQ.png"
  },
  {
  "id": 24,
  "title": "Okay",
  "image": "http://imgur.com/X6niVYQ.png"
  },
  {
  "id": 25,
  "title": "Original Rage",
  "image": "http://imgur.com/CD0nLh8.png"
  },
  {
  "id": 26,
  "title": "Original Troll",
  "image": "http://imgur.com/sV4AReH.png"
  },
  {
  "id": 27,
  "title": "Poker Face",
  "image": "http://imgur.com/EFHsGkJ.png"
  },
  {
  "id": 28,
  "title": "Prrrr",
  "image": "http://imgur.com/gXmsig6.png"
  },
  {
  "id": 29,
  "title": "Smile",
  "image": "http://imgur.com/Bp2y4zT.png"
  },
  {
  "id": 30,
  "title": "Thoughtful",
  "image": "http://imgur.com/HdmBrwX.png"
  },
  {
  "id": 31,
  "title": "Troll Dad Full",
  "image": "http://imgur.com/Mgyz87x.png"
  },
  {
  "id": 32,
  "title": "Troll Dad Jump",
  "image": "http://imgur.com/PFzOfO7.png"
  },
  {
  "id": 33,
  "title": "Wait A Minute",
  "image": "http://imgur.com/rxlv8TX.png"
  },
  {
  "id": 34,
  "title": "What",
  "image": "http://imgur.com/0JmUzko.png"
  },
  {
  "id": 35,
  "title": "Why With Hands",
  "image": "http://imgur.com/gEZW60M.png"
  },
  {
  "id": 36,
  "title": "YUNO",
  "image": "http://imgur.com/uXKy3RJ.png"
  }
] 
```

### Add Memes to State

-  Add memes array to a js file
-  Add memes array to the application's state
-  In render, iterate through memes array and display title and meme as image.

### Create Meme Component
-  Move title and image tag into a Meme component 
-  Pass each meme id, title, and image into the Meme component as a prop.
-  Use props in Meme component

### Hide/Show Meme

-  Add state for visible to be false 
-  Use state for hidden to only show meme if state for visible is true.
-  Add click event to meme title that toggles the state of visible between true and false
-  Make click event update state of `memeStyle` to `hidden` or `show`.

### Change Page Theme

-  Create a class that will change the font, font color, and background of the meme container and form
-  Add a theme key to the state that will make the class be applied or not applied based on if it is true or false
-  Add a button that will change the state of the theme

### Delete All Memes

- Add deleteMemes function to App that makes memes state an empty array
- Add a button with click even to deleteMemes
- If there are no memes, show a message "There are no memes"

### Delete Meme

-  Add deleteMeme function to App that removes meme by ID
-  Pass deleteMeme function and meme ID to Meme componenet
-  Add button with click event to deleteMeme

### Add New Meme

-  Add form and inputs to render
-  Add form object to state
-  Update inputs `name` attribute to match form object
-  Bind inputs `value` to form object property
-  Write `onChange` function to update form object property
-  Write `onSubmit` function to add form object to meme array in state and reset form object to clear form. 

### On Completion
- Send a pull request using "Solution for Week08Day02"

## Bonus:
### Add to previous Meme Codealong

- Add this functionality to the previous meme generator codealong done in the class.
- The randomImg array should have your newly added image in it.


## Extra Bonus:
### Sign In

-  Add a form and inputs for signing in with email and password
-  Add form object to state
-  Update inputs `name` attribute to match form object
-  Bind inputs `value` to form object property
-  Write `onChange` function to update form object property
-  Add state of signedInEmail that starts as null
-  Write `onSubmit` function to add form object to signedIn state and only show memes and meme form if they are signed in


# Week08Day03

- Using Axios instead of using an array of data provided, Use the following link to pull the data.
- It should have the possiblity of adding topText and bottomText to the random image that gets displayed from the api.

### On Completion
- Send a pull request using "Solution for Week08Day03"


# Total time for both Labs: 2 Days
