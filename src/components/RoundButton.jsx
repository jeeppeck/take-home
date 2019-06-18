import * as React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button`
    background-color: Transparent;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    outline:0;
    color: #9ea2a2
`;

export default class RoundButton extends React.Component {

    render() {
        return (
            <Button onClick={this.props.onClick}>{this.props.label + "\n"}</Button>
        );
    }
}

RoundButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};