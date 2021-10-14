import React, { Component } from 'react';
import api from './Apicovid';
import grafico, {
  XAxis,
  Line,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  LineChart
} from 'recharts';

const data = [
  { name: 'Page A', pv: 2400, amt: 2400 },
  { name: 'Page B', pv: 1398, amt: 2210 },
  { name: 'Page C', pv: 9800, amt: 2290 },
  { name: 'Page D', pv: 3908, amt: 2000 },
  { name: 'Page E', pv: 4800, amt: 2181 },
  { name: 'Page F', pv: 3800, amt: 2500 },
  { name: 'Page G', pv: 4300, amt: 2100 }
];

class App extends Component {
  state = {
    covid: []
  };

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ covid: response.data });
  }

  render() {
    const { covid } = this.state;

    return (
      <div>
        <h1 className="large text-primary">Gráfico geral</h1>
    
        <LineChart
          width={1030}
          height={850}
          data={covid}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name_es" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
 
      </div>
    );
  }
}

export default App;
