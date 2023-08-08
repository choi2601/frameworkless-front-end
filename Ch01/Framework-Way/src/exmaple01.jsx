/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  background-color: red;
  visibility: ${({ pose }) => (pose === "visible" ? "visible" : "hidden")};
`;

export class DeclarativePosedExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;

    const pose = isVisible ? "visible" : "hidden";

    return <Box pose={pose} />;
  }
}
