import React from 'react';
import { Card } from '../Card';
import cardpic from '../../assets/images/cardpic.jpg'

export const Amjido = () => {
    const properties = {
        "imgURI": cardpic,
        "name": "Muhammad Abubakar Ala",
        "profession": "Software Dev"
    }
  return (
    <div>
        <Card pic={properties.imgURI} name={properties.name} profession={properties.profession}/>
    </div>
  )
}
