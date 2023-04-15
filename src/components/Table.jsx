import React, { Fragment } from 'react';
import { Td } from 'styles/Table.styled';

const styles = { color: 'red', textTransform: 'uppercase' };

function Columns() {
  return (
    <Fragment>
      <td style={styles}>Inline</td>
      <Td>Simple class</Td>
    </Fragment>
  );
}

export default function Table() {
  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
