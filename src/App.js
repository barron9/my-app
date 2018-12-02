import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Line,Bar} from 'react-chartjs-2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, -355, 1240, 1259, 1280, 281, 156, 55, -40, -159, 2080, 81, 56, 55, 40]
    }
  ]
};
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const About = () => <h2>About</h2>;

const Home = () => <h2>Home</h2>;

class App extends Component {
  displayName: 'LineExample'
	
  render() {
    return (
      <div className="App">
        <header className="App-header">

	      <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}  />
      <Route path="/topics"/>
    </div>
  </Router>
        
 <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
	       <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data2}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
        </header>
      </div>
    );
  }
}

export default App;
