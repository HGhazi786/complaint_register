import React from 'react'
import AnimatedNumber from './animatedNumber'

export default function Insights() {
    return (
      <div className="grid grid-cols-2 gap-3">
        <AnimatedNumber desc="Complaints Number" targetNumber={50} />
        <AnimatedNumber desc="Complaints Number" targetNumber={50} />
        <AnimatedNumber desc="Complaints Number" targetNumber={50} />
        <AnimatedNumber desc="Complaints Number" targetNumber={50} />
      </div>
    );
}
