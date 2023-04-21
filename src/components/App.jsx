import Table from './Table';
import Refs from './Refs';
import HOC from './HOC';
import { LessonOne } from './LessonOne';
import { Fragment } from 'react';

export const App = () => {
  return (
    <Fragment>
      <LessonOne />
      <Table />
      <Refs />
      <HOC />
    </Fragment>
  );
};
