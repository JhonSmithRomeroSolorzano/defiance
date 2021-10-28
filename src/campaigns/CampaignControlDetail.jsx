import React, { useState, useEffect } from 'react';
import { FormLabel, MultiSelect } from 'carbon-components-react';
import { warmGray } from '@carbon/colors';
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { campaignsService } from '../_services/campaigns.service';
import HeaderComponent from '../layoutComponents/HeaderComponent';


function CampaignControlDetail (props) {
  var [volumeXData, setVolumeXData] = useState([]);
  var [volumeUciData, setVolumeUciData] = useState([]);
  var [volumeLciData, setVolumeLciData] = useState([]);
 
  var [sentimentRedditXData, setSentimentRedditXData] = useState([]);
  var [sentimentRedditUciData, setSentimentRedditUciData] = useState([]);
  var [sentimentRedditLciData, setSentimentRedditLciData] = useState([]);
 
  useEffect(() => {
    campaignsService.getCampaignControlChart()
    .then(response => {
      console.log(response)
      if(response && response.ALIT){
        setVolumeXData(response.ALIT.volume.X.map((record, idx) =>{
          let objX = {}
          objX['group'] = "X";
          objX['key'] = new Date(response.ALIT.volume.dt[idx] * 1000).toLocaleDateString("en-US");
          objX['value'] = record
          return objX
        })) 
        setVolumeUciData(response.ALIT.volume.UCI.map((record, idx) =>{
          let objUCI = {}
          objUCI['group'] = "UCI";
          objUCI['key'] = new Date(response.ALIT.volume.dt[idx] * 1000).toLocaleDateString("en-US");
          objUCI['value'] = record;
          return objUCI
        }))
        setVolumeLciData(response.ALIT.volume.LCI.map((record, idx) =>{
          let objLCI = {}
          objLCI['group'] = "LCI";
          objLCI['key'] = new Date(response.ALIT.volume.dt[idx] * 1000).toLocaleDateString("en-US");
          objLCI['value'] = record;
          return objLCI
        })) 

        setSentimentRedditXData(response.ALIT.sentiment_reddit.X.map((record, idx) =>{
          let objX = {}
          objX['group'] = "X";
          objX['key'] = new Date(response.ALIT.sentiment_reddit.dt[idx] * 1000).toLocaleDateString("en-US");
          objX['value'] = record
          return objX
        })) 
        setSentimentRedditUciData(response.ALIT.sentiment_reddit.UCI.map((record, idx) =>{
          let objUCI = {}
          objUCI['group'] = "UCI";
          objUCI['key'] = new Date(response.ALIT.sentiment_reddit.dt[idx] * 1000).toLocaleDateString("en-US");
          objUCI['value'] = record;
          return objUCI
        }))
        setSentimentRedditLciData(response.ALIT.sentiment_reddit.LCI.map((record, idx) =>{
          let objLCI = {}
          objLCI['group'] = "LCI";
          objLCI['key'] = new Date(response.ALIT.sentiment_reddit.dt[idx] * 1000).toLocaleDateString("en-US");
          objLCI['value'] = record;
          return objLCI
        })) 
      }
    });
  }, []);

  var chartOptions = {
    "toolbar": {
      "enabled": false
    },
    "legend": {
      "alignment": "right"
    },
    "axes": {
      "bottom": {
        "mapsTo": "key",
        "scaleType": "time"

      },
      "right": {
        "mapsTo": "value",
        "scaleType": "linear"
      }
    },
    "height": "300px",
    "color": {
      "scale": {
        "X": "#77a9ff",
        "UCI": "#1b9f81",
        "LCI": "#DE4B2C"
      }
    },
  }

  return (
    <>  
      <HeaderComponent text="AAPL - FIVG - News - Text"></HeaderComponent>
      <div className='bx--row' style={{margin: '0', background:warmGray[20]}}>
        <div className="bx--col-lg-3 bx--col-md-3 bx--col-sm-4" style={{padding: '0'}}>
          <div style={{background: 'white', margin: '1rem', padding: '0.5rem'}}>
            <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>Start Date</FormLabel>
            <h3 style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>Oct 2 2021</h3>
          </div>
        </div>
        <div className="bx--col-lg-3 bx--col-md-3 bx--col-sm-4" style={{padding: '0'}}>
          <div style={{background: 'white', margin: '1rem', padding: '0.5rem'}}>
            <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>End Date</FormLabel>
            <h3 style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>Ongoing</h3>
          </div>
        </div>
        <div className="bx--col-lg-3 bx--col-md-3 bx--col-sm-4" style={{padding: '0'}}>
          <div style={{background: 'white', margin: '1rem', padding: '0.5rem'}}>
            <FormLabel style={{'padding': '0rem', 'margin': '0rem'}}>End Date</FormLabel>
            <h3 style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>Ongoing</h3>
          </div>
        </div>
      </div>
      <div className='bx--row' style={{margin: '0', background:warmGray[20]}}>
        <div className="bx--col-lg-10 bx--col-md-6 bx--col-sm-4">
          <div className='bx--row'>
            <div className='bx--offset-lg-7 bx--col-lg-4 bx--offset-md-5 bx--col-md-3 bx--offset-sm-0 bx--col-sm-4' style={{paddingRight: '2rem', paddingLeft: '2rem'}}>
              <MultiSelect
                  id='input1'
                  label= 'Past 30 Days'
                  titleText= 'Duration'
                  items={[]}
                  itemToString={(item) => (item ? item.text : '')}
                />
            </div>
          </div>
          <div className='bx--row'>
            <div className='bx--col-lg-12' style={{paddingTop: '2rem'}}>
              <LineChart
                data={[...volumeXData, ...volumeUciData, ...volumeLciData]}
                options={{...chartOptions, ...{"title":'Volume'}}}>
              </LineChart>
            </div>
            <div className='bx--col-lg-12' style={{paddingTop: '2rem'}}>
              <LineChart
                data={[...sentimentRedditXData, ...sentimentRedditUciData, ...sentimentRedditLciData]}
                options={{...chartOptions, ...{"title":'Sentiment Reddit'}}}>
              </LineChart>
            </div>
          </div>
        </div>
        <div className="bx--col-lg-2 bx--col-md-1 bx--col-sm-4" style={{'padding': '0rem', 'margin': '0'}}>
          <FormLabel style={{'padding': '0rem', 'margin': '0 1rem'}}>Control</FormLabel>
          <FormLabel style={{'padding': '0rem', 'margin': '0'}}>Performance</FormLabel>
        </div>
      </div>  
    </>
  )
}

export default CampaignControlDetail;