import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";

function FuncLife() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("after mount");
    }, []);

    useEffect(() => {
        console.log("props or state changed");
    }, count);
    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, []);

    console.log("mount");
    return (
        <div>
            <Typography.Title level={3}>{count}</Typography.Title>

            <Button type="primary" onClick={() => setCount(count + 1)}>
                plus
            </Button>
        </div>
    );
}

export default FuncLife;
