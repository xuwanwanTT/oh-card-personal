import React from 'react';
import Card from './module/Card';
import './homepage.css';
const PI = Math.PI;
const RA = PI / 180;
const sin = Math.sin;
const cos = Math.cos;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const me = this;
  }

  createCard() {
    const dom = [];
    for (let i = 1; i < 89; i++) {
      let angle = -PI / 180 * 60 + PI / 180 * 60 * 2 / 88 * i;
      dom.push(<Card key={'card' + i} index={i} top={-200 * cos(angle)} left={400 * sin(angle)} rotate={angle / RA} />)
    }
    return dom;
  }

  render() {
    return (
      <div>
        <div className={'oh-card-set'}>
          {this.createCard()}
        </div>
        <div className={'oh-card-get'}>
        </div>
      </div>
    );
  }
};

export default Page;
