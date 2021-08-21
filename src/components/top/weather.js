import React from 'react'

export default class Weather extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        const {temp, city, text, icon} = this.props
        const img = `http://openweathermap.org/img/wn/${icon}@2x.png`
        
        return (
            <div className='mt-2 text-white h-full w-full' id='weather'>
                <div className='flex justify-center flex-row text-base mt-2' id='header'>{city}</div>
                <div className="flex flex-row justify-center align-center mt-2" id='inner'>
                <div className='w-16 h-16' id='image'><img className='w-full h-full' src={img} /></div>
                <div className="text-3xl mt-2"id='current'>{Math.round(temp-273)}°</div>
                </div>
                <div className="flex flex-row justify-center content-end text-2xl mt-2" id='footer'>{text}</div>
            </div>
        )
    }
}