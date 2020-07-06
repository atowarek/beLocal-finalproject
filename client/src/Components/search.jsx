import React from 'react'
import {  Form, FormGroup, Input, Button, Col } from 'reactstrap'
import './search.css'


class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      query: '', 
    }
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.query)
  }


  render() {
    const { query } = this.state
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
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
          <Col sm={{size:10}}>
          <Input
            type='select'
            name='category'
            id='category'
            //value={values.category}
            placeholder='category'
            //onChange={handleChange}
          />
          </Col>
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


