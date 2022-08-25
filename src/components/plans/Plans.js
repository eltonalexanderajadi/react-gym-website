import React from 'react';
import './Plans.css';
import {PlansData} from '../../data/PlansData';
import WhiteTick from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png';

const Plans = () => {
  return (
    <div className='plans-container' id="plans">
        <div className='blur plans-blur1'></div>
        <div className='blur plans-blur2'></div>
        <div className='programs-header' style={{gap: '2rem'}}>
            <span className='stroke-text'> READY TO START </span>
            <span> YOUR JOURNEY </span>
            <span className='stroke-text'> NOW WITH US  </span>
        </div>

        {/* plans card */}
        
        <div className='plans'>
            {PlansData.map((plan)=>(
                <div className='plan' key={1}>
                    {plan.icon}
                    <span> {plan.name} </span>
                    <span>$ {plan.price} </span>

                <div className='features'>
                    {plan.features.map((feature)=>(
                        <div className='feature'>
                            <img src={WhiteTick} alt="" />
                            <span key={1}> {feature} </span>
                    </div>
                    ))}
                </div>

                <div className='benefits'><span> See more benefits </span>
                    <img src={rightArrow} alt=""/> </div>
                <button className='btn'> Join Now </button>
                </div>
            ))}
        </div>
        </div>
  );
};

export default Plans;