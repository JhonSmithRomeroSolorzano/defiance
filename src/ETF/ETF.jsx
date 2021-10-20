import React, { useState, useEffect } from 'react';
import HeaderComponent from '../LayoutComponents/HeaderComponent';
import {etfsService} from '../_services/etfs.service';
import ETFDetail from './ETFDetail';
import { MultiSelect  } from 'carbon-components-react';
import { warmGray } from '@carbon/colors';



function ETF () {
  const [Etfs, setEtfs] = useState(null);
  const [series, setSeries] = useState(null);
  useEffect(() => {
    etfsService.getETFs('2021-03-26','2021-03-26')
    .then(response => {
      if(response && response.lookup_meta){
        setEtfs(response.lookup_meta.SPAK.earnings.slice());
        setSeries(response.report_meta)
      }

    });
    

  }, []);

  var selectEtf = (EtfName)=>{
    let impresionSeries = [];
    let costSeries = [];
    let reportSerie = series ? series.filter( record=>{
      return record.campaign_name === "monty-earnings-SPAK-"+EtfName+"-campaign"
    }) : []

    reportSerie.forEach( record =>{
      impresionSeries.push([new Date(record.date_est).toLocaleDateString("en-US"), record.impressions])
      costSeries.push([new Date(record.date_est).toLocaleDateString("en-US"), record.cost])
    })
    
    return  [impresionSeries, costSeries]
  }
  
  var EtfsList = (props)=>{
    let listofEtf = props.list ? props.list.map((etfRecord, idx)=>{
      return <ETFDetail name={etfRecord} key={idx} serie={selectEtf(etfRecord)}></ETFDetail>
    }) : []
    return(
      <>
        {listofEtf}
      </>
    )
  }
  return (
    <>  
      <HeaderComponent text="ETFs"></HeaderComponent>
      <div className='bx--row' style={{margin: '0', background:warmGray[20], padding: '0.5rem 0rem'}}>
        <div className='bx--offset-lg-8 bx--col-lg-3 bx--offset-md-6 bx--col-md-2 bx--offset-sm-0 bx--col-sm-4'>
          <MultiSelect
              id='input1'
              label= 'Choose an option'
              titleText= 'Label'
              items={[]}
              itemToString={(item) => (item ? item.text : '')}
            />
        </div>
        <div className='bx--col-sm-4 bx--col-md-8 bx--col-lg-16'>
          <EtfsList list={Etfs}></EtfsList>
        </div>
      </div>      
    </>
  )
}

export default ETF;