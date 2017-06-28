import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf, action, linkTo, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import StoryRouter from 'storybook-router';

import Nav from './Nav';

setAddon(infoAddon)

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addWithInfo('Navigation', 'description', () => (
    <Nav onClick={action('clicked')}/>
  ));

