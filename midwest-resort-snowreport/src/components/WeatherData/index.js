import React, {Component} from 'react';
import axios from 'axios';

const API_KEY = "a0170c6a7cff4ae6156e1c98d8b98562";

class WeatherData extends Component {

    state = {
        weather: [],
    };
    

    
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/42.3601,-71.0589`)
        .then(res => {
            this.setState({weather: res.data})
            console.log(this.state);
        })
    };

    render() {
        return (
            <div>
                {/* <ul>{this.state.weather.map()}</ul> */}
            </div>
        )
    }
}
export default WeatherData