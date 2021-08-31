import React,{useState} from 'react'
import { EventEmitter } from "events";

const Stor = (props) => {
    let eventEmitter = new EventEmitter();
    const [data,SetData] = useState({appName: 'weatherapp'})

    React.Children.map(props.Children, child => {
        React.cloneElement(
            child, {
                ...data,
                eventEmitter: eventEmitter
              }
        )
    })
}

export default Stor
