import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import BookList from './BookList';


storiesOf('BookList', module)
  .add('List of Books', () => (
    <BookList onClick={action('clicked')}>Hello Button</BookList>
  ))

