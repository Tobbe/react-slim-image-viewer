# React Slim Image Viewer

Display images in a full-screen modal, with left and right navigation to switch
between several images. Supports keyboard navigation and mouse scroll. Tiny
library with zero dependencies (except React).

This React component is heavily inspired by (aka copied from)
[react-simple-image-viewer](https://github.com/specter256/react-simple-image-viewer)
by [specter256](https://github.com/specter256), thanks for your work Alexander!

![screenshot showing react-slim-image-viewer](https://user-images.githubusercontent.com/30793/115965915-8ea09f00-a52b-11eb-9d82-455d57a5db9f.png "Screenshot showing react-slim-image-viewer")

The screenshot above shows what this component looks like with default styling.
The "prev" navigation arrow is highlighted because my mouse cursor is hovering
it. You can change the name of the CSS classes used to disable the default
styles if you want to provider your own. Or you can pass in a `styles` prop to
customize the styles. Your choice.

You can see a usage example here:
https://github.com/Tobbe/react-slim-image-viewer/blob/main/src/App.tsx

## Installation

```bash
npm install react-slim-image-viewer
```

or

```bash
yarn add react-slim-image-viewer
```

## API

| Property      | Type     | Description                                                                      |
| :------------ | :------- | :------------------------------------------------------------------------------- |
| src           | string[] | Array of image URLs                                                              |
| currentIndex  | number   | Index of image in `src` property which will be shown first when viewer is opened |
| onClose       | function | Callback which will be called when viewer will closed                            |
| styles        | object   | Custom styles for all html elements of the modal window                          |
| baseClassName | string   | Change the base part of the css class name. This will disable built-in styles    |

## Shortcuts

| Shortcut        | Description                     |
| :-------------- | :------------------------------ |
| Escape          | Close the viewer                |
| Right Arrow / l | Next image                      |
| Left Arrow / h  | Previous image                  |
| Mouse wheel     | Scrolling previous / next image |

## Contributing

PRs and issue reports are welcome!

### Testing pre-release version

1.  `npm run build:lib`
2.  Copy the built files to where you want to use them. Example (standing in a
    project that you want to test the new version in):
    `cp -r ../react-slim-image-viewer/lib/* node_modules/react-slim-image-viewer/`
