import React from 'react';
//component
import Weather from './weather';
//popper.js
import { Manager, Popper, Reference } from 'react-popper';

export default class TopSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSelectLocationOpen: false,
        }
    }

    changeCity(e){
        this.setState({
            locationName: e.target.value
        });
    }

    selectCity(){
        const {locationName} = this.state
        const{eventEmitter} = this.props

        eventEmitter.emit('update weather', locationName)
    }

    onToggleSelectLocation() {
        this.setState(prevState => ({
          isSelectLocationOpen: !prevState.isSelectLocationOpen
        }));
      }

    render() {

       const {isSelectLocationOpen} = this.state
       const {eventEmitter} = this.props


        return <div className='flex flex-col items-center h-full w-full bg-blue-300'>
            <div className='text-white text-2xl mt-2 font-st'>Weather Up</div>
            <Weather {...this.props}/>
            <Manager>
                <Reference>
                    {({ref}) => (
                <button className='border-4 border-purple-800 rounded-lg bg-purple-700 p-1 m-2 font-rt' 
                type="button" 
                ref={ref}
                onClick={this.onToggleSelectLocation.bind(this)}
            >
                Reference element
            </button>
                    )}
            </Reference>
                <Popper placement='top'>
                {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen && (
                <div className="popper" ref={ref} style={{style, top: '5px'}} data-placement={placement} >
                    <div className='w-full p-2 flex flex-col justify-center'>
                        <label htmlFor='location name' className='text-base'>Location Name</label>
                        <input
                        className='rounded-sm border-2 border-red-800'
                        id='location-name'
                        type='text'
                        placeholder='city name'
                        onChange={this.changeCity.bind(this)} 
                        />
                        <button className='border-4 border-purple-800 rounded-lg bg-purple-700 p-1 m-2 font-rt'
                        onClick={this.selectCity.bind(this)} 
                        >Select</button>
                    </div>
                <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
                )
            )}
            </Popper>
        </Manager>  
        </div>
    }
}