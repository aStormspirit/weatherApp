import React,{Component} from 'react'
// emiter
import { EventEmitter } from "events";

export default class Store extends Component{

    constructor(props){
        super(props);

        this.eventEmitter = new EventEmitter();

        this.state = {
            appName: 'WeatherApp'
        }
    }

    render(){
        return React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            ...this.state,
            eventEmitter: this.eventEmitter
          });
        });
      }
}