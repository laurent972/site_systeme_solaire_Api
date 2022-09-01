import React, { useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'

import { GetApi } from '../../api/services'
import { useTheme } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const DashboardPage: React.FC<RouteComponentProps> = () => {

  
  const [templateProps, setTemplateProps] = useState <HomeTemplateProps | null>(null);
  
  
  useEffect(() => {
    GetApi().then(response =>{
      setTemplateProps(response)
    }); 
  },[])

  return (
    
      <HomeTemplate {...templateProps} />
    
  )
}

export default DashboardPage
