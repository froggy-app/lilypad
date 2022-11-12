# 🪷 lilypad

## How to install

npm

```
npm i @froggy-app/lilypad
```

yarn

```
yarn add @froggy-app/lilypad
```

## Development

### First time setup

Request to be added to the
[npm package](https://www.npmjs.com/package/@froggy-app/lilypad).

Clone this repository and cd into it. Log in to npm using the following command.

```
npm login scope=@froggy-app
```

### Publishing

Before publishing, make sure to increment the version in `package.json`. Then,
build the package and publish it to npm.

```
npm run rollup
npm publish
```

Sometimes files can remain in the `dist` folder after deleting them and rolling
up. To fix this, I find it's a good practice to delete the `dist` folder before
running rollup.

### Using Storybook

Storybook is a great way to preview components. You can run storybook using the
following command.

```
npm run storybook
```

To create a new story, create a new file using the naming convention:
`ComponentName.stories.tsx` in the same directory as your component. Add the
following storie template to get started:

```
import ComponentName from './ComponentName';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/ComponentName',
  component: ComponentName,
} as ComponentMeta<typeof ComponentName>;

const Template: ComponentStory<typeof ComponentName> = (args) => <ComponentName {...args} />;

export const ComponentNameDefault = Template.bind({});
ComponentNameDefault.args = {
  componentArg: 'lorem ipsum',
};
```

You can replace `ComponentName` with the name of your component.
