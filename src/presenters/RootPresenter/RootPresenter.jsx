import * as React from 'react';
import './RootPresenter.css';
import CostDisplay from "../../components/CostDisplay/CostDisplay";
import styled from 'styled-components';
import Incrementer from "../../components/UnitIncrementer/Incrementer";

const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #E0F4f4; 
    `;

const Body = styled.div`
    height: 225px;
    background: #2B3636;
    display: flex;
    flex-direction: row;
    margin-left: 40px;
    margin-right: 40px;
    width: -moz-calc(100% - 80px);
    width: -webkit-calc(100% - 80px);
    width: -o-calc(100% - 80px);
    width: calc(100% - 80px);
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: ${props => props.alignItems || "center"}
`;

export default class RootPresenter extends React.Component {
    render() {
        return (
            <Container>
                <Body>
                <Column alignItems={'flex-start'}>
                    <CostDisplay
                        label={this.props.costPerUnitLabel}
                        backgroundColor={'#1dc090'}
                        value={this.props.costPerUnit}
                    />
                </Column>
                <Column alignItems={'center'}>
                    <Incrementer
                        label={'# Of Units'}
                        value={this.props.numUnits}
                        onIncrement={this.props.onIncrementNumUnits}
                        onDecrement={this.props.onDecrementNumUnits}
                        onValueChange={this.props.onNumUnitsChange}
                    />
                </Column>
                <Column alignItems={'flex-end'}>
                    <CostDisplay
                        label={this.props.totalCostLabel}
                        backgroundColor={'#AF74E3'}
                        value={this.props.totalCost}
                    />
                </Column>
                </Body>
            </Container>
        );
    }
}
