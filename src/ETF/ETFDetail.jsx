import React from 'react';
import { FormLabel } from 'carbon-components-react';
import { warmGray } from '@carbon/colors';
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

function ETFDetail (props) {
  var data = [
    {
      "group": "Dataset 1",
      "key": "Qty",
      "value": 34200
    },
    {
      "group": "Dataset 1",
      "key": "More",
      "value": 23500
    },
    {
      "group": "Dataset 1",
      "key": "Sold",
      "value": 53100
    },
    {
      "group": "Dataset 1",
      "key": "Restocking",
      "value": 42300
    },
    {
      "group": "Dataset 1",
      "key": "Misc",
      "value": 12300
    },
    {
      "group": "Dataset 2",
      "key": "Qty",
      "value": 34200
    },
    {
      "group": "Dataset 2",
      "key": "More",
      "value": 53200
    },
    {
      "group": "Dataset 2",
      "key": "Sold",
      "value": 42300
    },
    {
      "group": "Dataset 2",
      "key": "Restocking",
      "value": 21400
    },
    {
      "group": "Dataset 2",
      "key": "Misc",
      "value": 0
    },
    {
      "group": "Dataset 3",
      "key": "Qty",
      "value": 41200
    },
    {
      "group": "Dataset 3",
      "key": "More",
      "value": 18400
    },
    {
      "group": "Dataset 3",
      "key": "Sold",
      "value": 34210
    },
    {
      "group": "Dataset 3",
      "key": "Restocking",
      "value": 1400
    },
    {
      "group": "Dataset 3",
      "key": "Misc",
      "value": 42100
    },
    {
      "group": "Dataset 4",
      "key": "Qty",
      "value": 22000
    },
    {
      "group": "Dataset 4",
      "key": "More",
      "value": 1200
    },
    {
      "group": "Dataset 4",
      "key": "Sold",
      "value": 9000
    },
    {
      "group": "Dataset 4",
      "key": "Restocking",
      "value": 24000,
      "audienceSize": 10
    },
    {
      "group": "Dataset 4",
      "key": "Misc",
      "value": 3000,
      "audienceSize": 10
    }
  ]
  var options = {
    "toolbar": {
      "enabled": false
    },
    "axes": {
      "bottom": {
        "title": "2019 Annual Sales Figures",
        "mapsTo": "key",
        "scaleType": "labels"
      },
      "left": {
        "mapsTo": "value",
        "title": "Conversion rate",
        "scaleType": "linear"
      }
    },
    "height": "200px"
  }

  return (
    <div className='bx--row' style={{background:warmGray[10], margin: '1rem', padding: '0.5rem'}}>  
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
      <div className='bx--col-sm-2 bx--col-md-2 bx--col-lg-8'>
        <LineChart
			    data={data}
			    options={options}>
		    </LineChart>
      </div>
    </div>
  )
}

export default ETFDetail;