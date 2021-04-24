# React Slim Image Viewer

## Installation

```bash
npm install react-slim-image-viewer
```

or

```bash
yarn add react-slim-image-viewer
```

## API

| Property      |  Type    | Description                                                                      |
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

1.  `npm run build`
2.  Copy the built files to where you want to use them. Example (standing in a
    project that you want to test the new version in):
    `cp -r ../react-slim-image-viewer/lib/* node_modules/react-slim-image-viewer/`
