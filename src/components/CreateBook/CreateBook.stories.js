import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CreateBook from './index.js';


storiesOf('Create A Book', module)
  .add('create a book', () => (
    <CreateBook />
  ))

