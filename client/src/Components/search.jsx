import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './search.css'
import axios from 'axios'

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
    axios('http://localhost:5000/searchByCity/:query')
  }

  return (
    <Form inline onSubmit={handleSubmit}>
       <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
        {/*<Label for='city' className='mr-sm-2'>
          City
  </Label>*/}
        <Input
          type='name'
          name='city'
          id='city'
          value={values.city}
          placeholder='Where do you want your new adventure?'
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
      <Button>Search</Button>
    </Form>
  )
}

export default Search
