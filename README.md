<img alt="React Native Tab Bars" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-tab-bars)

[![Fully customizable navigation tab bar for React Native](https://img.shields.io/badge/-Fully%20customizable%20navigation%20tab%20bar%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-tab-bars)

[![npm version](https://img.shields.io/npm/v/react-native-tab-bars.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-tab-bars)
[![npm](https://img.shields.io/npm/dt/react-native-tab-bars.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-tab-bars)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Tab Bars"
        src="assets/Screenshots/example.gif" width="49%" />
  <img alt="React Native Tab Bars"
        src="assets/Screenshots/example.png" width="49%" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-tab-bars
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.34"
```

# Usage

## Import

```js
import { SolidTabBar } from "react-native-tab-bars";
```

## Usage

```jsx
<SolidTabBar
  initial={0}
  onChange={(data) => console.log(data)}
  tabs={[
    { id: 0, text: "All" },
    { id: 1, text: "Birds" },
    { id: 2, text: "Fishes" },
    { id: 3, text: "Tigers" },
  ]}
/>
```

## Tabs Object Array Format

```js
[
  { id: 0, text: "All" },
  { id: 1, text: "Birds" },
  { id: 2, text: "Fishes" },
  { id: 3, text: "Tigers" },
];
```

# Configuration - Props

| Property          |   Type    |   Default    | Description                                                       |
| ----------------- | :-------: | :----------: | ----------------------------------------------------------------- |
| tabs              |   array   | object array | you have to set your object array with formatted example as above |
| initial           |  number   |     null     | default selected tab                                              |
| onPress           | function  |   default    | set your own logic when a tab is pressed                          |
| onChange          | function  |   default    | set your own logic when selected tab is changed                   |
| tabWith           |  number   |      60      | change the each tab's width value                                 |
| tabPadding        |  number   |      5       | change the each tab's padding value                               |
| shadowStyle       |   style   |    shadow    | set your own shadow style for selected tab                        |
| shadowColor       |   color   |   #757575    | change the current shadow color                                   |
| activeColor       |   color   |   #fbd000    | change the selected tab's color                                   |
| inActiveColor     |   color   | transparent  | change the unselected tabs' color                                 |
| activeTextColor   |   color   |     #fff     | change the selected tab's text color                              |
| inactiveTextColor |   color   |     #000     | change the unselected tabs' text color                            |
| Container         | component |     View     | change the main container's component type                        |
| style             |   style   |   default    | change or override the main container's style object              |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Dotted Tab Bar Component Option
- [ ] Animation
- [x] ~~Typescript Challenge!~~
- [ ] Write an article about the lib on Medium

# Credits

Design inspired by [Sina Amiriyam](https://www.instagram.com/p/B4sJzZBAfGr/)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Tab Bars is available under the MIT license. See the LICENSE file for more info.
