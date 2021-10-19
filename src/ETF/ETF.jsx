import React, { useState, useEffect } from 'react';
import HeaderComponent from '../LayoutComponents/HeaderComponent';
import {etfsService} from '../_services/etfs.service';
import ETFDetail from './ETFDetail';


function ETF () {
  const [Etfs, setEtfs] = useState(null);
  useEffect(() => {
    etfsService.getETFs('2021-03-26','2021-03-26')
    .then(response => {
      
      if(response && response.lookup_meta)setEtfs(response.lookup_meta.SPAK.earnings.slice());

    });
    

  }, []);

  var selectEtf = (EtfName)=>{
    let impresionSeries = [];
    let costSeries = [];
    let reportSerie = this.campaign_report.report_meta.filter( record=>{
      return record.campaign_name === "monty-earnings-SPAK-"+EtfName+"-campaign"
    })
    reportSerie.forEach( record =>{
      impresionSeries.push([record.date_est, record.impressions])
      costSeries.push([record.date_est, record.cost])
    })
    
    let etfObject = {}
    etfObject[EtfName] = [impresionSeries, costSeries]


    return etfObject
  }
  
  var EtfsList = (props)=>{
    let array = []
    let listofEtf = props.list ? props.list.map((etfRecord, idx)=>{
      return <ETFDetail name={etfRecord} key={idx}></ETFDetail>
    }) : []
    return(
        <div>
          {listofEtf}
        </div>
    )
  }
  return (
    <>  
      <HeaderComponent text="ETFs"></HeaderComponent>
      <EtfsList list={Etfs}></EtfsList>
    </>
  )
}

export default ETF;