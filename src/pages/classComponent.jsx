import { Button, Typography } from "antd";
import React, { Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            count: 0,
        };
    }
    plusClickHandler = () => {
        const newState = { ...this.state };
        newState.count += 1;
        this.setState(newState);
    };
    minusClickHandler = () => {
        const newState = { ...this.state };
        if (newState.count >= 1) {
            newState.count -= 1;
            this.setState(newState);
        }
    };
    render() {
        return (
            <div>
                <Typography.Title>{this.state.count}</Typography.Title>

                <Button type="primary" onClick={this.plusClickHandler}>
                    plus
                </Button>
                <Button type="primary" onClick={this.minusClickHandler}>
                    minus
                </Button>
            </div>
        );
    }
}

export default ClassComponent;
