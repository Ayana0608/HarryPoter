import { Button, Typography } from "antd";
import React, { Component } from "react";

class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log("after mount");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
    }
    componentWillUnmount() {
        console.log("unmount");
    }
    componentDidCath() {
        console.log("some error");
    }

    render() {
        return (
            <div>
                <Typography.Title level={3}>
                    {this.state.count}
                </Typography.Title>

                <Button
                    type="primary"
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    plus
                </Button>
            </div>
        );
    }
}

export default LifeCycle;
