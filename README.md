<img alt="React Native Library Boilerplate" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-library-boilerplate)

[![React Native Library Boiler Plate](https://img.shields.io/badge/-React%20Native%20Library%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-library-boilerplate)

[![npm version](https://img.shields.io/npm/v/react-native-library-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-library-boilerplate)
[![npm](https://img.shields.io/npm/dt/react-native-library-boilerplate.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-library-boilerplate)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Library Boilerplate"
        src="assets/Screenshots/JSLibraryBoilerplate.png" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-library-boilerplate
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

## Component1 Usage

```jsx
<SolidTabBar
  initial={0}
  onPress={data => console.log(data)}
  onChange={data => console.log(data)}
  tabs={[
    { id: 0, text: "All" },
    { id: 1, text: "Birds" },
    { id: 2, text: "Fishes" },
    { id: 3, text: "Tigers" }
  ]}
/>
```

## Tabs Object Array Format

```js
[
  { id: 0, text: "All" },
  { id: 1, text: "Birds" },
  { id: 2, text: "Fishes" },
  { id: 3, text: "Tigers" }
];
```

# Configuration - Props

| Property          |   Type   |   Default    | Description                                                       |
| ----------------- | :------: | :----------: | ----------------------------------------------------------------- |
| tabs              |  array   | object array | you have to set your object array with formatted example as above |
| initial           |  number  |     null     | default selected tab                                              |
| onPress           | function |   default    | set your own logic when a tab is pressed                          |
| onChange          | function |   default    | set your own logic when selected tab is changed                   |
| tabWith           |  number  |      60      | change the each tab's width value                                 |
| tabPadding        |  number  |      5       | change the each tab's padding value                               |
| shadowStyle       |  style   |    shadow    | set your own shadow style for selected tab                        |
| shadowColor       |  color   |   #757575    | change the current shadow color                                   |
| activeColor       |  color   |   #fbd000    | change the selected tab's color                                   |
| inActiveColor     |  color   | transparent  | change the unselected tabs' color                                 |
| activeTextColor   |  color   |     #fff     | change the selected tab's text color                              |
| inactiveTextColor |  color   |     #000     | change the unselected tabs' text color                            |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Library Boilerplate is available under the MIT license. See the LICENSE file for more info.
