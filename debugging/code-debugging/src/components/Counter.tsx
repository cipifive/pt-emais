import { FC, useEffect, useState } from "react";

export const Counter: FC = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    
    useEffect(() => {
        console.log("eee")
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="counter-component__wrapper">
            <button onClick={increment}>Increment</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrement</button>
        </div>
        );
};