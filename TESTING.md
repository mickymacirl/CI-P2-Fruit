# Testing

* Link to ReadMe can be found at the *[ReadMe](/README.md)* link.

## Responsiveness

Pages were tested on various different screen sizes from 320px on a Samsung fold 2, Samsung Galaxy Tab, Nexus 7 and a wide screen Windows machine. The website hides all content at 300px or below due to the size of the randomly generated main game board.

Pages were tested on most modern browsers including Microsoft Edge, Chrome, Firefox, Opera and Brave.

**Test Steps:**

1. Open the corresponding browser and open Match 2 Fruit Game website.
2. Open the browser development tools by hitting the corresponding dev tools shortcut.
3. Resize to the desired width.
4. Click and drag the browser window to lower or higher window size.

**Expected:**

The website is responsive on all sizes and no pixelation is accruing. No overlap of text or images.

**Actual:**

The website behaved as expected, with an initial issue with the center of text in all pages on a screen size of 320px, and WAVE warnings for small text. Media Query code was added to assist with the look and feel of the website at different screen sizes. Some miss aligned text when in landscape mode. ~~Issue with the CSS transform effect in Safari browser.~~ Issue listed in the Bugs section as fixed. [Bugs and Issues](#bug-and-issues)

The website was tested on the following physical devices, with no resizing issues seen:

* Samsung fold 2
* Samsung Galaxy Tab
* Nexus 7 with Kali Linux
* Widescreen 4k monitor

The website was tested on the following screen sizes using *[Chrome Dev tools](https://developers.google.com/web/tools)*, *[Media Genius](<https://responsivedesignchecker.com/>)* and *[Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)*:

* iPhone SE
* iPhone XR
* iPhone 12 PRO
* Pixel 5
* Samsung Galaxy S8+
* Samsung Galaxy S20 Ultra
* iPad Air
* iPad Mini
* Surface Pro 7
* Surface Duo
* Samsung Galaxy A51/71
* Nest Hub
* Nest Hub Max

## Accessibility

WAVE Web Accessibility Evaluation Tool was used to test each page, with one alert related to Titles.

![WAVE Result Index](/assets/readme/waveresultindexrm.jpg)

![WAVE Result Game](/assets/readme/waveresultgamerm.jpg)

## Lighthouse Testing

### Desktop Testing

Desktop Lighthouse testing is showing a perfect score of 100 across the board.

![Desktop Lighthouse Result](/assets/readme/desktoplhtrm.jpg)

### Mobile Testing

Mobile Lighthouse Testing is showing a score of 95, with SEO having a score of 92.

![Mobile Lighthouse Result](/assets/readme/mobilelhtrm.jpg)

## Functional Testing

## Navigation Links Testing

Testing was done to make sure all navigation links led to the intended pages on their respective pages.

![Navigation Link](/assets/readme/navlinkrm.jpg)

The navigation links on the navbar on each page were used to do this and were successful.

## Footer Link Validation

The footer was tested so that when a user clicks on the link for GitPod and Adobe Dreamweaver, the page should open in a new browser window.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Click on the Gitpod and Adobe Dreamweaver links in the footer of the page.

**Expected:**

The link should open in a new window, to each of the websites.

**Actual:**

The link opened in a new window, to each of the websites.

## Form Testing

## Form Submit

The Feedback form was tested so that when a user clicks on submit, the act directs to the confirm.html web page with a success message.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Feedback page using the Feedback link.
3. Enter details in the First Name, Last Name, and Subject fields.
4. Click the Submit button.

**Expected:**

The user should be redirected to the confirm.html page with the success message being displayed.

**Actual:**

The website redirected the user to the confirm.html page with the success message being displayed.

## Form Validation

The Feedback form was tested so that when a user tries to submit a blank form, the form should fail to submit with a "Please fill out this field" message.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Feedback page using the Feedback link.
3. Click the Submit button.

**Expected:**

The form should display the message "Please fill out this field".

**Actual:**

The form displayed the message "Please fill out this field".

![Form Testing](/assets/readme/feedbacktestrm.jpg)

## Favicon Validation

The Favicon was tested so that when a user loads a page, the favicon should display in the top bar of the browser window.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Confirm visually that the favicon is in place by checking the top bar of the browser.

**Expected:**

The web browser should display the favicon for the page.

**Actual:**

The web browser displayed the favicon for the page.

![Favicon Testing](/assets/readme/faviconrm.jpg)

## Game Function Validation

### Random Fruit Placement in the Main Game board

The game board was tested to ensure that the 10 different Fruit Emoji are randomly placed while being generated.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Game page and open the Dev Tools of the corresponding browser.
3. Select the first card-front div generated cell, and hide the CSS styling.
4. Select the first card-back div generated cell, and hide the CSS styling.
5. Expand all div card, div card-front and card-back cells and check for randomness.
6. Reload the page and carry out steps 2 to 5 repeating 5 times to check for randomness.

**Expected:**

The game board cells and emoji placements should be random so as not to have repeating or bunched together emoji.

**Actual:**

The game board cells and emoji placement is random, has no repeating or bunched together emoji.

#### Board Random Testing 1

![Board Random Test 1](/assets/readme/randomtestrm1.jpg)

#### Board Random Testing 2

![Board Random Test 2](/assets/readme/randomtestrm2.jpg)

#### Board Random Testing 3

![Board Random Test 3](/assets/readme/randomtestrm3.jpg)

#### Board Random Testing 4

![Board Random Test 4](/assets/readme/randomtestrm4.jpg)

#### Board Random Testing 5

![Board Random Test 5](/assets/readme/randomtestrm5.jpg)

### Fruit Match True

The game cards should stay turned when a fruit match is successful.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Game page and choose a card.
3. Continue the game until a match is made.

**Expected:**

The two matched fruit cards should stay flipped.

**Actual:**

The two matched fruit card stayed flipped.

![Fruit Match True](/assets/readme/succmatchrm.jpg)

### Fruit Match False

The game cards should flip back when a fruit match is unsuccessful.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Game page and choose a card.
3. Choose a card that does not match the already turned card.

**Expected:**

The two unmatched fruit cards should flip back to not turned.

**Actual:**

The two unmatched fruit cards flipped back to not turned.

![Fruit Match False 1](/assets/readme/unsuccmatchrm.jpg)

![Fruit Match False 2](/assets/readme/unsuccmatchrm1.jpg)

![Fruit Match False 3](/assets/readme/unsuccmatchrm2.jpg)

### Win Message

The Win Message was tested so that when a user finishes the game successfully by matching all fruit pairs, the game area should transform to a win screen with the total flips and total time its taken.

**Test Steps:**

1. Open the corresponding browser and open the Match 2 Fruit Game website.
2. Navigate to the Game page and match all fruit pairs to win the game.
3. Click the Submit button.

**Expected:**

The game page should display You have won with the total flips of 41 moves and a total time of 53 seconds.

**Actual:**

The game page displayed You have won with a total flip of 41 moves and a total time of 53 seconds.

![Game Function test You win message](/assets/readme/wintestingrm.jpg)

## Validator Testing

### Javascript Validator Testing

* Used Jshint to test Javacript, results are showing no errors. To achieve no issues the validator needs to be configured to allow ES6 through the configuration options or by adding the comment, "/*jshint esversion: 6*/" at the top of the Javascript paste/file.

![Jshint Results](./assets/readme/jshintrm.jpg)

## HTML Validator Testing

* Used *[W3 HTML Validator](https://jigsaw.w3.org/css-validator/)* to validate HTML, results are showing no errors.

![HTML Results](/assets/readme/htmlvalrm.jpg)

## CSS Validator Testing

* Used *[W3 CSS Validator](https://jigsaw.w3.org/css-validator/)* to validate CSS, results are showing no errors.

![CSS Results](/assets/readme/cssvalrm.jpg)

## Bug and Issues

1. ~~When a user browses the index.html web page on a device with less than 700px, the font size is too big.~~  Fixed by creating Media Query to increase and decrease as resolution is changed.
2. ~~When a user browses the index.html web page on any device, the rules section doesn't display correctly and centered.~~ Fixed by creating a new css style to hold the content.
3. ~~Main game board isn't responsive on screen sizes below 300px.~~ Created a CSS Media Query to hide all content below 300px.
4. Some miss aligned text when in landscape mode. Add media query for landscape modes.
5. ~~On Safari, the transform / translate doesn't work correctly. *[why-on-safari-the-transform-translate-doesnt-work-correctly](https://stackoverflow.com/questions/29864790/why-on-safari-the-transform-translate-doesnt-work-correctly)*~~ Fixed by using webkit settings in CSS. Safari Testing results below.

![LambDatTest Results](/assets/readme/Labdasafarirm.jpg)
