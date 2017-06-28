import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Search from './index';

storiesOf('Search', module)
  .add('Search fields', () => (
    <Search />
  ))

