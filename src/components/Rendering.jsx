// const Validation = ({ val }) => {
//   {
//     if (val >= 10) {
//       return <h1>Пошел нахуй</h1>;
//     } else {
//       return <h1>Привет</h1>;
//     }
//   }
// };

// export default class Rendering extends Component {
//   render() {
//     const { val } = this.props;
//     return <div>{val >= 10 ? <h1>Пошел нахуй</h1> : <h1>Привет</h1>}</div>;
//   }
// }

import React, { Component, Fragment } from 'react';
import List from './List';

const Tab1 = () => {
  return <h1>Text of tab1</h1>;
};

const Tab2 = () => {
  return <h1>Text of tab2</h1>;
};

const Tab3 = () => {
  return <h1>Text of tab3</h1>;
};

export default class Rendering extends Component {
  state = {
    activeTab: 1,
  };

  handleTab = e => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    });
  };

  render() {
    console.log(this.state);
    const { activeTab } = this.state;
    const { peoples, tabs } = this.props;

    return (
      <Fragment>
        {tabs.map(({ dataName, title, icon }) => (
          <button key={dataName} data-name={dataName} onClick={this.handleTab}>
            {icon}
            {title}
          </button>
        ))}

        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        {/* {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />} */}
        <div>{`Active tab is ${
          activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'
        }`}</div>
        <List peoples={peoples} />
      </Fragment>
    );
  }
}
