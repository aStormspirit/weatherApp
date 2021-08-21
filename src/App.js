import React from 'react';
// components
import TopSection from './components/top/top';
import BottomSection from './components/bottom/bottom';
import axios from 'axios'
//ключ API
const CONTACT_API_KEY = 'bd8bf644fa9b915dbfd92801fb105f10'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'London',
      isLoading: true,
    }
  }

  updateWeather(){
    // data request
    const {city} = this.state
    const api = {
      key: CONTACT_API_KEY,
      base: 'http://api.openweathermap.org/data/2.5/weather'
    }

    axios.get(`${api.base}?q=${city}&appid=${api.key}`)
    .then(res => {
      return res.data; 
  })
    .then(data =>{
      this.setState({
        isLoading: false,
        text: data.weather[0].description,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        speedWind: data.wind.speed,
        deg: data.wind.deg
      })
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })

  }

  componentDidMount(){
    const {eventEmitter} = this.props
    // initial request
    this.updateWeather()
    // get new location
    eventEmitter.on('update weather', (data) => {
      this.setState({city: data}, () => this.updateWeather())
      console.log('LocationName:', data)
    })

  }

  render(){
    const {isLoading, text, temp, city, icon, speedWind, deg} = this.state
    
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='min-w-3/4 h-4/5 flex flex-col border-black border-4 rounded-sm'>
        {isLoading && <h3>Loading data...</h3>}
        {!isLoading && (
        <div className='flex-2'><TopSection text={text} temp={temp} city={city} icon={icon} eventEmitter={this.props.eventEmitter} /></div>)}
        <div className='flex-2'><BottomSection speedWind={speedWind} deg={deg} /></div>
      </div>      
    </div>
  );
  }
}

export default App;
