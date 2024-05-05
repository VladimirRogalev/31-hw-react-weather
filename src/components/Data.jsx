import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import React from "react";

// const Data = () => {
//     return (
//         <div>
//             <Form></Form>
//             <Weather></Weather>
//         </div>
//     );
// };
class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {},
            weatherInfo: {}
        };
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}></Form>
                <Weather data={this.state.weatherInfo}></Weather>
            </div>
        );
    }

    handleSubmit = (message) => {
        this.setState({message});
    };
}

export default Data;