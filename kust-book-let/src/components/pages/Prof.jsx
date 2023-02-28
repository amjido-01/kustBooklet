import React from 'react'
import { Card  } from '../Card'
import cardpic2 from '../../assets/images/cardpic4.jpg'

export const Prof = () => {
    const properties = {
        "imgURI": cardpic2,
        "name": "Muhd Ni'imatullah",
        "profession": "Designer"
    }
  return (
    <div>
        <Card pic={properties.imgURI} name={properties.name} profession={properties.profession}/>
    </div>
  )
}
