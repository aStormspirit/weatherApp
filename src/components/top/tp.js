import React,{useState} from 'react'
// component 
import Weather from './weather';
//popper.js
import { Manager, Popper, Reference } from 'react-popper';

const Top = (props) => {
    const [open,setOpen] = useState(false)
    const [city, setCity] = useState([])

    const selectLoc = () => {
        setOpen(!open)
        console.log(open)
    }

    const selectCity = (e) => {
        setCity(e.target.value)
        console.log(city)
    }

    const sendCity = () => {
        const{eventEmitter} = props

        eventEmitter.emit('update weather', city)
    }

    return (
        <div>
            <div className='flex flex-col items-center h-full w-full bg-blue-300'>
            <div className='text-white text-2xl mt-2 font-st'>Weather Up</div>
            <Weather {...props}/>
            <Manager>
                <Reference>
                {({ref}) => (
                <button className='border-4 border-purple-800 rounded-lg bg-purple-700 p-1 m-2 font-rt' 
                type="button" 
                ref={ref}
                onClick={selectLoc}
            >
                Reference element
            </button>
                    )}
                </Reference>
                <Popper placement='top'>
                {({ ref, style, placement, arrowProps }) => ( open && (
                <div className="popper" ref={ref} style={{style, top: '5px'}} data-placement={placement} >
                    <div className='w-full p-2 flex flex-col justify-center'>
                        <label htmlFor='location name' className='text-base'>Location Name</label>
                        <input
                        className='rounded-sm border-2 border-red-800'
                        id='location-name'
                        type='text'
                        placeholder='city name'
                        onChange={selectCity}
                        />
                        <button className='border-4 border-purple-800 rounded-lg bg-purple-700 p-1 m-2 font-rt'
                         onClick={sendCity}
                        >Select</button>
                    </div>
                <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
                )
                )}
            </Popper>
            </Manager>
            
        </div>
        </div>
    )
}

export default Top