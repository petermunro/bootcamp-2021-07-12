import { useState } from 'react';

function ClickDemo() {
    let initialCar = {
        make: 'Lexus',
        model: 'GX',
        wheels: 4,
    };

    let [label, setLabel] = useState("Click me");
    let [car, setCar] = useState(initialCar);

    function clickHandler(event) {
        console.log('Clicked', event.clientX, event.clientY );
        setLabel('Clicked!');
        setCar({
            ...car,
            // make: 'Lexus',
            // model: 'GX',
            // wheels: 4,
            make: 'Maserati',
        });
    }
    
    return (
        <>
            <button onClick={clickHandler}>{label}</button>
            <p>Car: {car.make} {car.model} with {car.wheels} wheels</p>
        </>
    );
}

export default ClickDemo;
