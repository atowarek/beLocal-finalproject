import React from './node_modules/react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from './node_modules/reactstrap'
import './activity-container.css'

const ActivityContainer = props => {
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
          <CardTitle>Activity name</CardTitle>
          <CardSubtitle>Category</CardSubtitle>
          <CardText>Some amazing text</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width='100%'
          src='/assets/256x186.svg'
          alt='Activity image cap'
        />
        <CardBody>
          <CardTitle>Activity name</CardTitle>
          <CardSubtitle>Category</CardSubtitle>
          <CardText>Some amazing text</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default ActivityContainer
