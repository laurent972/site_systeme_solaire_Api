import React, { useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'

import { GetApi } from '../../api/services'

const DashboardPage: React.FC<RouteComponentProps> = () => {

  const [data, setData]= useState();
  const [loader, setLoader] = useState(false);

  const [templateProps, setTemplateProps] = useState <HomeTemplateProps | null>(null);

  useEffect(() => {
    GetApi().then(response =>{
      setTemplateProps(response)
      setLoader(true)
    }); 
  },[])

  return <HomeTemplate {...templateProps} />
}

export default DashboardPage
