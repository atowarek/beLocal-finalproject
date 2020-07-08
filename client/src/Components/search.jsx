import React from 'react'
import {  Form, FormGroup, Input, Button, } from 'reactstrap'
import './search.css'


class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      category: '' 
    }
  }

  handleChange = event => {
    this.setState({query: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.query)
  }


  render() {
    const { query, category } = this.state
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
          <Input
            type='text'
            name='query'
            value={query}
            id='search-input'
            placeholder='Where do you want your new adventure?'
            onChange={event => this.handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
        <Input 
          type='select' 
          name='category' 
          id='category' 
          placeholder='Select category'
          value= {category}
          onChange= {event => this.setState({ category: event.target.value })}>
          <option>Select category</option> //change css for this to #999
          <option>Running</option>
          <option>Cycling</option>
          <option>Hiking</option>
          <option>Tour</option>
          <option>Food & Drinks</option>
        </Input>
      </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Input
            type='calendar'
            name='calendar'
            id='calendar'
            placeholder='Select dates'
            //onChange={handleChange}
          />
        </FormGroup>

        <Button>Search</Button>
      </Form>
    )
  }
}

export default Search


