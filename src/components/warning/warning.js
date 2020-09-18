import React, { Component } from "react";
import styled from "styled-components";
class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closing: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.setState({
        closing: true,
      });
      setTimeout(() => {
        this.setState({
          closing: false,
        });
      }, 1000);
    }
  }
  render() {
    const { message, visible } = this.props;
    const { closing } = this.state;
    if (!visible && !closing) return null;
    return (
      <WarningWarpper>
        <WarningStyle visible={visible}>{message}</WarningStyle>
      </WarningWarpper>
    );
  }
}
const WarningAniamte = styled.div`
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-duration: 2s;
  animation-duration: 2s;

  @-webkit-keyframes shake {
    0%,
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  @keyframes shake {
    0%,
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      -ms-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(10px, 0, 0);
      -ms-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  .shake {
    -webkit-animation-name: shake;
    animation-name: shake;
  }
`;
const WarningStyle = styled.div`
  white-space: nowrap;
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: white;
  font-weight: 600;
`;

const WarningWarpper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  ${WarningStyle}
  ${WarningAniamte}
`;

export default Warning;
