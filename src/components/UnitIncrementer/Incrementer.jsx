import * as React from 'react';
import styled from "styled-components";
import RoundButton from "../RoundButton";
import PropTypes from 'prop-types';


const Container = styled.div`
        width: 164px;
        height: 95px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        color: #E0F4F4;
    `;

const Row = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-around;
    align-items: center;
`;

const Input = styled.input`
    width: 60px;
    height: 35px;
    font-size: 20px;
    border: none;
    text-align: center;
    outline: none;
    box-shadow: 0 0 10px black;
`;



export default class Incrementer extends React.Component{
    render(){
        return(
            <Container>
                <b>{this.props.label}</b>
                <Row>
                    <RoundButton label={"-"} onClick={this.props.onDecrement}/>
                    <Input type="text" value={this.props.value} onChange={(event) => this.props.onValueChange(event)}/>
                    <RoundButton label={"+"} onClick={this.props.onIncrement}/>
                </Row>
            </Container>
        );
    }
}

Incrementer.propTypes = {
   value: PropTypes.number.isRequired,
   onDecrement: PropTypes.func.isRequired,
   onIncrement: PropTypes.func.isRequired,
   onValueChange: PropTypes.func.isRequired,
}

