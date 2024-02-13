import { Button, Flex, Input } from "antd";
import { Typography } from "antd";
import React, { Component } from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            inputValue: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            inputValue: event.target.value,
        });
    };
    handleAddTodo = () => {
        if (this.state.inputValue.replaceAll(" ", " ") !== "") {
            this.setState({
                data: [...this.state.data, this.state.inputValue],
                inputValue: "",
            });
        }
    };

    removeChange = (index) => {
        const updatedTodos = [...this.state.data];
        updatedTodos.splice(index, 1);
        this.setState({ data: updatedTodos });
    };

    render() {
        return (
            <div>
                <Typography.Title> Todo List</Typography.Title>
                <Flex gap={20} style={{ maxWidth: 300, marginBottom: 30 }}>
                    <Input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />

                    <Button type="primary" onClick={this.handleAddTodo}>
                        Add Todo
                    </Button>
                </Flex>
                <ul>
                    {this.state.data.map((data, index) => (
                        <li key={index}>
                            {data}
                            <Button onClick={() => this.removeChange(index)}>
                                delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
