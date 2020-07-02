import React, { useState, useEffect } from './node_modules/react'
import { Button, Form, FormGroup, Label, Input } from './node_modules/reactstrap'
import './search.css'

const Search = props => {
  const [values, setValues] = useState({
    name: '',
    city: '',
  })

  const handleChange = event => {
    event.persist()

    setValues(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { getActivities } = this.props
    getActivities(values)
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
        <Label for='name' className='mr-sm-2'>
          Name
        </Label>
        <Input
          type='name'
          name='name'
          id='name'
          value={values.name}
          placeholder='activity name'
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
        <Label for='category' className='mr-sm-2'>
          Category
        </Label>
        <Input
          type='select'
          name='category'
          id='category'
          value={values.category}
          placeholder='category'
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
        <Label for='city' className='mr-sm-2'>
          City
        </Label>
        <Input
          type='name'
          name='city'
          id='city'
          value={values.city}
          placeholder='city'
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
        <Label for='calendar' className='mr-sm-2'>
          Date
        </Label>
        <Input
          type='calendar'
          name='calendar'
          id='calendar'
          placeholder='calendar here!'
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Search
