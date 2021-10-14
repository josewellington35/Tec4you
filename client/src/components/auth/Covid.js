import React, { Component } from 'react';
import api from './Apicovid';
import rates from 'covid-rates';
import grafico, {
  Label,
  PieChart,
  Pie,
  Tooltip,
  Funnel ,
  YAxis,
  CartesianGrid,
  FunnelChart,
  LabelList
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
  constructor(props) {
    super(props);
    this.state = { value: 'Costa Rica', covid: [], paises: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ covid: rates.getRatesByCountry(this.state.value) });
  }

  async componentDidMount() {
    const response = await api.get('');
    var rates1 = await rates.getRatesByCountry(this.state.value);
    this.setState({ covid: rates1, paises: response.data });
    console.log(rates);
    //this.setState({ covid: rates1.data });
  }

  render() {
    var covid = this.state.covid;
    const paises = this.state.paises;

    return (
      <div>
        <h1 className="large text-primary">Lista de Paises</h1>
        <label>
          Escolha o Pais:
          <select value={this.state.value} onChange={this.handleChange}>
            {paises.map((pais) => (
              <option value={pais.name}>{pais.name_es}</option>
            ))}
          </select>
        </label>

        <li key={covid.deaths}>
          <h2>
            <p className="lead">
              Pais:
              <p>{covid.country}</p>
            </p>
            <p className="lead">
              Capital :<p>{covid.capital_city}</p>
              Continente :<p>{covid.continent}</p>
            </p>
            <p className="my-1">Mortos:{covid.deaths}</p>
            <p className="my-1">
              Confirmados:<p>{covid.confirmed}</p>
            </p>
          </h2>
        </li>

       
      </div>
    );
  }
}

export default App;
