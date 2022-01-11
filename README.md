# [My Pairs Game](https://enewcombe30.github.io/Project-2-pair-game-2021/) - Project 2 - JavaScript Pairs Game
#### _For full brief see BRIEF.md in the project folder._
___
## list of contents: 

* [Project Overview:](#project-overview)
    * [About my project](#about-my-project)
    * [Taking on the challenge](#the-challenge)
    * [External Referencing](#external-ref)
*  [Usability and Visual Impact:](#impact)
    * [UX design](#ux-design)
    * [Navigation](#navigation)
* [Layout and Visual Impact:](#layout)
    * [Responsive Design](#responsive)
    * [Image and Colour Theme](#colour-typography)
* [Software Development practices:](#software-dev)
    * [Directory Structure and File Naming](#directory)
    * [Version Control](#version-control)
    * [Deployment implementation](#deployment)
* [Testing practices](#testing)
    * [Code Validation and Quality Assurance](#validation)

___
# [Project Overview](#project-overview) 
### [About my project](#about-my-project)
___
For this project I opted to build a pair game using HTML, CSS, Javascript and Bootstrap with minimal jQuery. 

I decided to keep the general theme similar to my portfolio so that anyone viewing the portfolio would be navigated to seemlessly to my project.

The project itself has been designed to present different combinations of card layouts and different difficulties to add longevity to the game. 


### [Taking on the challenge](#the-challenge)
___ 
The brief contains set of requirements for those that want to 'take on a challenge' by adding an extra few steps when designing the webpage. 

#### These challenges are:

- >_You may include background audio/sound effects but make sure there are controls to pause and play the audio on either project ideas._

- >_You can include difficulty levels for the user to specify at the beginning on either project ideas._

I decided to incorporate these extra steps into my project. 

- **For the audio / sound effects**, I have used an MP3 called "Glimmer Man" created and produced by a friend. My original idea was to include tribal drums to fit the theme of the page but, in the end, opted for a a track best described as "elevator music".
All other sound effects were sourced from 
**[FreeSoundLibrary](http://www.freesoundslibrary.com)**. Once I had settled on the music track for the page I tried to match the sound style to it as much as possible. 

- **For the difficuly levels**, I created 3 separate decks of cards for _Easy_, _Medium_ and _Hard_.
Each difficulty level has been given a 1 minute time limit to match all pairs and contain a different number of cards per deck: 
- **Easy difficulty** - consists of 8 cards 4 card pairs.
- **Medium difficulty** - consists of 12 cards 6 card pairs.
- **Hard difficulty** - consists of 20 cards 10 card pairs.

### [External Referencing](#external-ref) 
___
 See full list of referenced links here: 
- **W3School** - https://www.w3schools.com/html/default.asp ,
https://www.w3schools.com/css/default.asp , 
https://www.w3schools.com/js/default.asp 

##### *I have included this link as w3school was regularly referenced thoughout the design and build of this webpage*
___
- **Bootstrap Modal** - https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal&stacked=h
___
- **Basic Card flipping and matching** - https://www.youtube.com/watch?v=ZniVgo8U7ek
___
- **Sound Effects** - http://www.freesoundslibrary.com
___
- **Stopwatch timer** - https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak 
___

All links are listed on the relative HTML, CSS and Javascript pages **before** the blocks respective blocks of code.

___

# [Usability and Visual Impact:](#impact)
### [UX design](#ux-design)
___
UX has been at the forefront when designing this project. 

Like most people I have played many online memory games and feel this projects difficulty settings provide added playability which keeps users coming back for more. 

In keeping with the theme of my portfolio, I have used a variety of tiki heads which I sourced when first building my first project. 

[Navigation](#navigation)
___ 

In my first portfolio I used **[Bootstrap](https://getbootstrap.com/)** to create a navigation bar so, for this project I decided to make use of **show** / **hide** display CSS functions combined with **onclick** event listeners in **Javascript**. 

The major issues with this are being able to navigate both forwards and backwards with as few clicks as possible which I addressed by adding **"Close"** and **"Home"** buttons to control bars to keep navigation smooth.

When working to include a **"How To"** function to the webpage I decided to add this as a modal reseached through Bootstrap in a section referring to [Modals](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal&stacked=h). 
___

# [Layout and Visual Impact:](#layout)
### [Responsive Design](#responsive)
To address the multi platform needs of modern webpages, I have used **[Bootstrap](https://getbootstrap.com/)** and CSS breakpoints to ensure the webpage responds to the most common screen widths: 
|Size|Pixel Width|Screen/Device|
|---|---|---|
|X-Small|<576px|Mobile|
|Small|≥576px|Tablet|
|Medium|≥768px|Small Screen|
|Large|	≥992px|Medium Screen|
|Extra large|≥1200px|Large Screen|

By using the **[Bootstrap](https://getbootstrap.com/)** grid system, margin (m) and padding (p) I have reduced the amount of CSS needed to create the desired effect therefore reducing the lines of physical code and making future debugging issues easier to identify. 
___

### [Image and Colour Theme](#colour-typography)
___

As this project will be linked to my first **[portfolio](https://enewcombe30.github.io/Portfolio-2021/)**, I have used the same background image to ensure smooth transitions between the projects. For this reason I have also used tiki images for the card faces from my portfolio.  
___

# [Software Development practices:](#software-dev)

### [Directory Structure and File Naming](#directory)
___
As per best practices, files have been separated to help with navigation. 
All **Script** and **Style** have been placed in a static folder along with **Images** and **Sounds**.

- **Script** - For this project I have used a single JS file listed as Script.js.
- **Styles** - For this project I have used a single CSS file listed as Styles.css
- **Image** - All images for the background, card backs and card faces are stored in the image folders.
- **Sounds** - The sounds have been split into 2 folders. The background music track is stored in the folder "Music" while the sound effects are stored in the folder "SFX".

### [Version Control](#version-control)
___
- **Git** - I've used Git as a version control system to regularly add and commit changes made to my project in Visual Studios 2019, before pushing them to GitHub.
* **Github** - I've used GitHub as a remote repository to push and store the committed changes to my project from Git.This being said, the regular commiting of work started a short while after the document had been created. Therefore, the first commit of this project was pushed at an advanced stage resulting in fewer commits throughout the process.

### [Deployment implementation](#deployment)
___
This web page has been deployed using **[Github pages](https://pages.github.com/)** 
___

# [Testing practices](#testing)

### [Code Validation and Quality Assurance](#validation)
___
Along side regular testing using **Visual Studios 2019** with both **Google Chrome** and **Microsoft Edge**, All code has been validated using the following sites: 

- HTML - https://validator.w3.org/#validate_by_input 
- CSS - http://jigsaw.w3.org/css-validator/
- JavaScript - https://javascriptvalidator.net/

When performing this validation, a few errors occured. These errors are listed below: 

* **HTML validation**
    * *Removed `volume="1"` from all `<audio>` SFX lines.*
    * *Removed unused `<wrapper>` tag.* 
    * *Added `x` to empty `<h1>` tag at index.html line 313 so as not to have a empty button who's inner.HTML is changed when game is won or lost.* 
    * *Added "`;`" after "`&copy`" to footer text. Not caught by **Visual Studios 2019** but adjusted for cleaner code.*
* **CSS validation**
    * *CSS validator ran with no errors.* 
    * *Warnings occurred regarding `-webkit-`. Both transform and transition lines needed `-webkit-` added.*
* **Javascript validation**
    * *Added JSHint esversion 6 coment so validator could recognise *__const__*.*
    * *Added __"`;`"__ to lines 49, 53, 59 and 367*
    * *Validator suggests passing a function instead of string so added line "//jshint ignore:line"*
    * *Error still showing that "timerCycle()" is not defined in validator - solution needed*
___
# I hope you enjoy the page!