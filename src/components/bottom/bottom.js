import React from 'react';
import './style.css'
import wind from '../../img/wind-svgrepo-com.svg'
import compass from '../../img/compass-symbol.svg'

export default class BottomSection extends React.Component {
  constructor(props){
    super(props)
  }
           

    render() {
      const {speedWind, deg} = this.props
        
      function getDeg(){
        if(25<=deg>340){
          return 'N'
        }
        else if(70<=deg){
          return 'NE'
        }
        else if(115<=deg){
          return 'E'
        }
        else if(160<=deg){
          return 'ES'
        }
        else if(205<=deg){
          return 'S'
        }
        else if(250<=deg){
          return 'SW'
        }
        else if(295<=deg){
          return 'W'
        }
        else if(340<=deg){
          return 'WN'
        }
      }

        return <div className='w-full h-full flex justify-center' id='bottom'>
            <div className='p-4 pt-24 pr-36 flex'><img className='h-24 w-24' src={wind} />
            <p className='text-2xl pt-7 pl-4 text-white'>{speedWind} М/S</p>
            </div>
            <div className='text-base p-4 flex pt-24 pr-2'><img className='h-24 w-24' src={compass} />
              <p className='text-2xl pt-7 pl-4 text-white'>wind direction: {getDeg()}</p>
              </div>
        </div>
    }
}
