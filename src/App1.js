import React,{useState, useEffect} from 'react'
//axios
import axios from 'axios'
//components
import BottomSection from './components/bottom/bottom';
import Top from './components/top/tp'
// API
const API_KEY = process.env.REACT_APP_CONTACT_API_KEY



export const App1 = (props) => {
    const [city, setCity] = useState('Moscow')
    const [Loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
      const api = {
        key: API_KEY,
        base: 'http://api.openweathermap.org/data/2.5/weather'
      }
      const {eventEmitter} = props
      const fetchData = async () => {

        await axios.get(`${api.base}?q=${city}&appid=${api.key}`)
        .then(res =>{ return res.data})
        .then(data => setData({
          text: data.weather[0].description,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          speedWind: data.wind.speed,
          deg: data.wind.deg
        }))
        console.log(data)
        setLoading(!Loading)
      }
      fetchData();

      eventEmitter.on('update weather', (data) => {
        setCity(data)
        setLoading(true)
        fetchData()
        console.log('LocationName:', data)
      })
    }, [])

    const {text, temp, icon, speedWind, deg} = data
    return (
    <div>
    <div className="w-full h-full flex justify-center items-center">
      <div className='min-w-3/4 h-4/5 flex flex-col border-black border-4 rounded-sm'>
        {Loading && <h3>Loading data...</h3>}
        {!Loading && (
        <div className='flex-2'><Top text={text} temp={temp} city={city} icon={icon} eventEmitter={props.eventEmitter}/></div>)}
        <div className='flex-2'><BottomSection speedWind={speedWind} deg={deg} /></div>
      </div>      
    </div>
    </div>
    )
}

export default App1;