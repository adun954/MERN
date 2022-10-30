import React from "react";
export class puttingittogether extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            // FIX: You need a specific initial age, not the function
            age: 45,
            age: 88
        }
    }
    incrementAge = () => {
        this.setState({
            // age: this.state.age += 1
            // FIX: increment the age by +, not +=
            age: this.state.age + 1
        });
    }
    render() {
        return (
            <div>
                <fieldset>
                    <h1>Doe, Jane</h1>
                    {/* <p>Age: {this.state.age = 45}</p> */}
                    {/* FIX: You cannot assign this.state.age there, use the value instead */}
                    <p>Age: {this.state.age}</p>
                    <p> Hair Color: Black </p>
                    <button onClick={this.incrementAge}>Birthday Button for Jane Doe</button>
                </fieldset>
                
                <fieldset>
                    <h1>Smith, John</h1>
                    {/* <p>Age: {this.state.age = 88}</p> */}
                    {/* FIX: If you need another age state, set it in this.state */}
                    <p>Age: { this.state.age} </p>
                    <p> Hair Color: Brown </p>
                    <button onClick={this.incrementAge}>Birthday Button for John Smith</button>
                </fieldset>
            </div>
        );
    }
}
// refrencing something in react

