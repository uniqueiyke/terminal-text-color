# terminal-text-color

This npm package enables any JavaScript code to print or display multiple colored text and colored text background to the terminal or console.


## Installation

`npm install terminal-text-color`

## Usage
Install the package

##### install via npm
`npm i terminal-text-color`

##### install via yarn
`yarn add terminal-text-color`

Import the package into your application

## CommonJs
```javascript
const ttc = require('terminal-text-color');

//You can use object distructuring to import needed methodes
const {red, magneta, gold, blueBG} = require('terminal-text-color');
```
## ES Module
```javascript
import ttc from 'terminal-text-color';

//You can use object distructuring to import needed methodes
import {red, magneta, gold, blueBG} from 'terminal-text-color';
```
`ttc` is an object that has some methods that can be use to change the text color or text bacground color to choice color.
`ttc object` has about 42 text colors defined with the equivalent background color. 
Each method's name corresponds to the name of the color it will print to the terminal. The background color equivalent ends with BG

## Examples
```javascript
console.log(ttc.red('My text color is red'))
console.log(ttc.redBG('My text background color is red'))
```

## List of color methods
#### foreground colors
teal, aqua, bisque, blueviolet, brown, cadetblue,
chocolate, coral, crimson, gold, goldenrod,
darkblue, darkcyan, darkgoldenrod, darkgray,
darkgreen, darkolivegreen, darkslategray,
darkorange, darkmagenta, darkred, tomato,
darkturquoise, turquoise, darkviolet, 
fuchsia, purple,  pink, maroon, 
steelblue, warning, success, error, info,
black, red, blue, white, magenta, yellow,
cyan, green, gray,
    
#### background colors
blackBG, blueBG, cyanBG, 
grayBG, greenBG, magentaBG, redBG, whiteBG,
yellowBG, tealBG, aquaBG, 
bisqueBG, bluevioletBG, brownBG, cadetblueBG,
chocolateBG, coralBG, crimsonBG, goldBG, goldenrodBG,
darkblueBG, darkcyanBG, darkgoldenrodBG, darkgrayBG,
darkgreenBG, darkolivegreenBG, darkslategrayBG,
darkorangeBG, darkmagentaBG, darkredBG, tomatoBG,
darkturquoiseBG, turquoiseBG, darkvioletBG, 
fuchsiaBG, purpleBG,  pinkBG, maroonBG, 
steelblueBG, warningBG, successBG, infoBG, errorBG

There are few methods to specify the color of your choice if the predefined colors could not server you purpose.
They are: `fgColor`, `bgColor`, `fgColorRGB`, `bgColorRGB`,  `fgColorHex`, `bgColorHex`.
Note that you should always call reset when you use any of these function as in.
```javascript
console.log(fgColorHex('2de6a9'), 'Try an see my text color', reset());
```

| methoed | description |
| ------------- | -------------------- |
| `fgColor` | This has one parameter and accept number between 30 - 37 and 90 - 97 black: 30, red: 31,  green: 32,  yellow: 33, blue: 34,  magenta: 35, cyan: 36, white: 37, gray: 90 for a foreground color. 90 to 97 give a lighter versions of the colore specified. console.log(fgColor(33), 'This is yellow text', reset()); //will print yellow text This can be use if your graphic card only support 8-bit color othwise use `fgColorRGB` or `fgColorHex` with more color options. |
| `bgColor` | This has one parameter and accept number between 40 - 47 and 100 - 107 black: 40, red: 41,  green: 42,  yellow: 43, blue: 44,  magenta: 45, cyan: 46, white: 47, gray: 100 for a background color. 100 to 107 give a lighter versions of the colore specified. console.log(bgColor(43), 'This is yellow text', reset()); //will print yellow text This can be use if your graphic card only support 8-bit color othwise use `bgColorRGB` or `bgColorHex` with more color options. |
| `fgColorRGB` |  Define color by using RGB color model for text foreground color. Specify the three color values of Reg, Green and Blue to get the desired text color. It accepts three parameters. Each argument should be a number ranging from 0 to 255 console.log(fgColorRGB(255, 255, 0), 'This is yellow text', reset()); //will print yellow text to the console |
| `bgColorRGB` |  Define color by using RGB color model for text background color. Specify the three color values of Reg, Green and Blue to get the desired text color. It accepts three parameters. Each argument should be a number ranging from 0 to 255 console.log(bgColorRGB(255, 255, 0), 'This is yellow text background', reset()); //will print yellow text to the console |
| `fgColorHex` | Define a color by specifying a three hexadecimal digits or six hexadecimal digits as in CSS for text foreground coloer. it accepts one hex string value as an argument. console.log(fgColorHex('ff0'), 'This is yellow text', reset()); console.log(fgColorHex('ffff00'), 'This is still a yellow text', reset()); console.log(fgColorHex('ffff0'), 'Wrong hex color value. No effect', reset()); |
| `bgColorHex` | Define a color by specifying a three hexadecimal digits or six hexadecimal digits as in CSS for text background color. it accepts one hex string value as an argument. console.log(bgColorHex('ff0'), 'This is yellow text background'); console.log(bgColorHex('ffff00'), 'This is still a yellow text background'); console.log(bgColorHex('ffff0'), 'Wrong hex color value. No effect'); |

There are few text modifyers methods for modifying the console text depending on the support of the your terminal.
These include: `underline`, `italic`, `strikethrough`, `blink`, `reset`, `dim`, `bold`, `reverse`, `hidden`.
These methods can receive argument when called `except reset`, or can be called with argument. As in
```javascript
import {underline, reset} from 'terminal-text-color';

//Take note of the call of reset(). This will remove the underline foematting and reset the terminal, if not every other text will be underlined.
console.log(underline(), 'This text will be underlined', reset()); 

//calling reset() is not need when the argument is passed to the underline() method for the modifer will be romoved automatically.
console.log(underline('This text will be underlined'));
```


### Text Modifyers mothods:

| method | Description |
| -------- | ---------- |
| `reset` | Calling this method will reset (remove) any applied color or formatting |
| `dim` | Calling this will print a lighter text. Not widely supportted |
| `italic` | Calling this will make the text font italic. |
| `bold` | Calling this will print a bolder font. |
| `underline` | Calling this will underline the text. |
| `reverse` | Calling this will reverse the foreground and background color of the text. That is, the foreground ground color will become the background color and vice vaser. |
| `hidden` | This will hide the text. |
| `strikethrough` | This will strickthrough the text' |
| `blink` | This will make the text to be blinking. |

## License
License under the
[MIT](https://github.com/uniqueiyke/terminal-text-color/blob/main/LICENSE)