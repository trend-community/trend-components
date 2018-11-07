# React Icon Components

Use **TREND** svg icons for consistent visual and decorative cues.

* [Installation](#installation)
* [Basic Usage](#usage)
* [Props](#props)
* [Icons](#icons)
* [Building Icons](#buidling)

## <a name="installation"></a> Installation

```bash
## Has peer dependency with react and react-dom
npm install react react-dom
npm install @trend/icon
```
## <a name="usage"></a> Basic Usage

With a module bunlder like [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// Using ES6 modules.
@import React from 'react';
@import withIcon from '@trend/icon';

const Menu = props => <svg viewBox="..." {...props}>...</svg>;

export default withIcon(Menu);
```

Import already wrapped icons:

```javascript
// Using ES6 modules.
@import React from 'react';
@import Bell from '@trend/icon/Bell';

// Render a basic TREND component button.
function Alert() {
  return <Bell size={3} />;
}

// => <svg role="img" viewBox arialabelledBy style>...</svg>
```

## <a name="props"></a> Props

All props are passed through directly to the svg itself, with the exception of the `width`, `height`, and `style` props.

### size

> `number||string` | optional, defaults to 1

Adding a size will adjust the width and height attributes of the svg to preserve the 1:1 ratio required for the icon.

### unit

> `string` | optional, defaults to **rem** and can only be one of **rem** or **em**

Change the unit of measurment for the size of the icon.

### style

> `object` | optional, see default styles below, any additional styles

```javascript
const defaultStyles = {
  display: 'inline-block',
  fill: 'currentColor',
  verticalAlign: 'middle'
};
```

## <a name="icons"></a> Icons

All icons can be imported directly by file name or from main module import.

```javascript
import { Bell } from '@trend/icon';
import Bell from '@trend/icon/bell';
```

Name | Display name
--- | ---
Add | `WithIcon(Add)`
App | `WithIcon(App)`
Bell | `WithIcon(Bell)`
Calendar | `WithIcon(Calendar)`
Camera | `WithIcon(Camera)`
Check | `WithIcon(Check)`
ChevronLeft | `WithIcon(ChevronLeft)`
ChevronRight | `WithIcon(ChevronRight)`
Close | `WithIcon(Close)`
Cog | `WithIcon(Cog)`
Comment | `WithIcon(Comment)`
Crop | `WithIcon(Crop)`
Data | `WithIcon(Data)`
Edit | `WithIcon(Edit)`
Ellipsis | `WithIcon(Ellipsis)`
Exclamation | `WithIcon(Exclamation)`
Filter | `WithIcon(Filter)`
Location | `WithIcon(Location)`
Lock | `WithIcon(Lock)`
Menu | `WithIcon(Menu)`
Message | `WithIcon(Message)`
Move | `WithIcon(Move)`
Mute | `WithIcon(Mute)`
Pause | `WithIcon(Pause)`
Play | `WithIcon(Play)`
Print | `WithIcon(Print)`
Profile | `WithIcon(Profile)`
QuestionMark | `WithIcon(QuestionMark)`
Search | `WithIcon(Search)`
Share | `WithIcon(Share)`
Sort | `WithIcon(Sort)`
SoundOn | `WithIcon(SoundOn)`
Stats | `WithIcon(Stats)`
Tags | `WithIcon(Tags)`
Trash | `WithIcon(Trash)`
Unlock | `WithIcon(Unlock)`
Users | `WithIcon(Users)`
Video | `WithIcon(Video)`
Weblink | `WithIcon(Weblink)`
ZoomIn | `WithIcon(ZoomIn)`
ZoomOut | `WithIcon(ZoomOut)`

## <a name="building"></a> Building Icons

All icons are generated using [svgr](https://github.com/smooth-code/svgr).  All raw svg files reside in the **svgs** directory and to re-compile the **svgs** into React components just run the `npm run build:icons` command.  Running command will auto-generate the main `index.js` as well.
