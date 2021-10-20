import React, { useState } from 'react';
import { FormLabel } from 'carbon-components-react';
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import "./ETFDetail.css";

function ETFDetail (props) {

  var options = {
    "toolbar": {
      "enabled": false
    },
    "legend": {
      "position": "top",
      "alignment": "right"
    },
    "axes": {
      "bottom": {
        "mapsTo": "key",
        "scaleType": "labels"
      },
      "left": {
        "mapsTo": "value",
        "scaleType": "linear"
      }
    },
    "height": "200px",
    "color": {
      "scale": {
        "Impresions": "#77a9ff",
        "Cost": "#1b9f81"
      }
    },
  }

  const [impresionsSeries, setImpresionsSeries] = useState(props.serie[0].map( record => {
    let obj = {}
    if (record) {
      obj['group'] = "Impresions";
      obj['key'] = record[0];
      obj['value'] = record[1];
      return obj
    }
  }));
  const [costsSeries, setCostsSeries] = useState(props.serie[1].map( record => {
    let obj = {}
    if (record) {
      obj['group'] = "Cost";
      obj['key'] = record[0];
      obj['value'] = record[1];
      return obj
    }
  }));

  return (
    <div className='bx--row' style={{background: 'white', margin: '1rem', padding: '0.5rem'}}>  
      <div className='bx--col-sm-1 bx--col-md-1 bx--col-lg-2'>
        <h2 style={{'padding': '0rem', 'margin': '0rem 0rem 0.5rem 0rem'}}>{props.name}</h2>
        <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>Active Campaigns</FormLabel>
        <h2>{8}</h2>
      </div>
      <div className='bx--col-sm-1 bx--col-md-1 bx--col-lg-2' style={{paddingTop:'3rem'}}>
        <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>AUM</FormLabel>
        <h2>1,380</h2>
        <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>Spend</FormLabel>
        <h2>4,867</h2>
      </div>
      <div className='bx--col-sm-2 bx--col-md-6 bx--col-lg-8'>
      <LineChart
          data={[...impresionsSeries, ...costsSeries]}
			    options={options}>
		    </LineChart>
      </div>
    </div>
  )
}

export default ETFDetail;