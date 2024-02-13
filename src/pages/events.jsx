import { Button, Flex, Input, Typography } from "antd";
import React, { useState } from "react";

export default function Events() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    function plusClickHandler() {
        setCount(count + 1);
        console.log(count);
    }
    function minusClickHandler() {
        if (count >= 1) {
            setCount(count - 1);
            console.log(count);
        }
    }
    function inputHandler(event) {
        setInputValue(event.target.value);
    }
    function clickInputBtn() {
        setInputValue("");
    }

    return (
        <>
            <Typography.Title level={3}>{count}</Typography.Title>
            <Button type="primary" onClick={plusClickHandler}>
                clickPus
            </Button>
            <Button type="primary" danger onClick={minusClickHandler}>
                clickMinus
            </Button>

            <br />
            <br />
            <Flex gap={20} style={{ maxWidth: 300 }}>
                <Input
                    value={inputValue}
                    placeholder="text"
                    onChange={inputHandler}
                />
                <Button type="primary" onClick={clickInputBtn}>
                    submit
                </Button>
            </Flex>
        </>
    );
}
