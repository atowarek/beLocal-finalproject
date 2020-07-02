import React from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import './activity-container.css'

const ActivityContainer = ({
  id,
  name,
  startDate,
  endDate,
  startHour,
  endHour,
  hostingId,
  longitude,
  latitude,
  address,
  description,
  category,
  picture,
  city,
}) => {
  return (
    <CardDeck className='container'>
      <Card>
        <CardImg
          top
          width='100%'
          src='/assets/256x186.svg'
          alt='Activity image cap'
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default ActivityContainer
