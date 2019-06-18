import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//#1dc090
const Container = styled.div`
    width: 164px;
    height: 95px;
    display: flex;
    flex-direction: column;
    background: ${props => props.backgroundColor || "#1dc090"}
    color: #2B3636;
    font-size: 14px;
    padding: 12px;
    font-weight: bold;
`;

const Value =  styled.div`
    font-size: 30px;
    max-width: 164px;
    color: white;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: auto;
`;

export default class CostDisplay extends React.Component{
    render(){
        return(
            <Container backgroundColor={this.props.backgroundColor}>
                {this.props.label}
                <Value>${this.props.value}</Value>
            </Container>
        );
    }
}

CostDisplay.propTypes = {
    backgroundColor: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};
