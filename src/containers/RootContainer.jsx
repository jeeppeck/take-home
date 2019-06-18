import * as React from 'react';
import RootPresenter from "../presenters/RootPresenter/RootPresenter";
import NumberUtils from "../Utils/NumberUtils";

export default class RootContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            costPerUnit: 175.5.toFixed(2),
            numUnits: 0,
            totalCost: 0,
        };
    }

    onDecrement = () => {
        let state = {...this.state};
        if (state.numUnits > 0)
            state.numUnits--;
        state.totalCost = NumberUtils.formatNumber((state.numUnits * state.costPerUnit));
        this.setState(state);
    };

    onIncrement = () => {
        let state = {...this.state};
        state.numUnits++;
        state.totalCost = NumberUtils.formatNumber((state.numUnits * state.costPerUnit));
        this.setState(state);
    };

    onNumUnitsChange = (event) => {
        const value = event.target.value.replace(/[^0-9]+/g, '');
        let state = {...this.state};
        state.numUnits = value;
        state.totalCost = NumberUtils.formatNumber((state.numUnits * state.costPerUnit));
        this.setState(state);
    };

    render() {
        return (
            <RootPresenter
                onCostPerUnitChange={this.onCostPerUnitChanged}
                costPerUnit={this.state.costPerUnit}
                totalCost={this.state.totalCost}
                numUnits={this.state.numUnits}
                onDecrementNumUnits={this.onDecrement}
                onIncrementNumUnits={this.onIncrement}
                onNumUnitsChange={this.onNumUnitsChange}
                costPerUnitLabel={"Cost Per Unit"}
                totalCostLabel={"Total Cost"}
            />
        );
    }
}