import React, { Fragment } from 'react';

const styles = { color: 'red', textTransform: 'uppercase' };

function Columns() {
  return (
    <Fragment>
      <td style={styles}>Inline</td>
      <td>Simple class</td>
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
