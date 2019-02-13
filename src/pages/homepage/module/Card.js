import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isTurn: false,
    };
    this.index = props.index;
    this.cardState = this.cardState.bind(this);
    this.dragCard = this.dragCard.bind(this);
    this.cardRef = React.createRef();
  }

  componentDidMount() {
    const me = this;
    this.cardDom = this.cardRef.current;
  }

  cardState() {
    let { isSelected, isTurn } = { ...this.state };
    if (isSelected && isTurn) { return false; }
    if (!isSelected) {
      isSelected = true;
      this.setState({ isSelected })
    } else {
      isTurn = true;
      this.setState({ isTurn });
    }
  }

  cardMove(index) {
    const style = this.cardDom.style;
    style.top = 100 + 'px';
    style.left = 100 * index + 'px';
  }

  cardTurn() {
    console.log(this.cardDom.style.transform)
  }

  reset() {
    this.setState({
      isSelected: false,
      isTurn: false,
    });
  }

  dragCard(e) {
    console.log(e.nativeEvent);

    this.cardDom.onmousemove = (e) => { }
  }

  moveEvent(dom) {

  }

  render() {
    const state = this.state;
    const props = this.props;
    let top = props.top;
    let left = props.left;
    let transform = `translate(-50%,-50%) rotate(${props.rotate}deg) rotateY(0)`;
    let color = '';
    if (state.isSelected) {
      top = 100;
      left = 100;
      transform = `translate(-50%,-50%) rotate(0) rotateY(0)`
    }
    if (state.isTurn) {
      transform = `translate(-50%,-50%) rotate(0) rotateY(180deg)`
      color = 'blue';
    }
    return (
      <div style={{
        top,
        left,
        transform,
        backgroundColor: color
      }} ref={this.cardRef} onClick={this.cardState} onMouseDown={this.dragCard} />
    );
  }
};

export default Page;
