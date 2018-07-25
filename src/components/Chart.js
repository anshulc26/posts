import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
      <div>{this.average} ({props.unit})</div>
    </div>
  );
}

export default Chart;
