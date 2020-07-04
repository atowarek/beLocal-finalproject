import React from 'react'
import {  Form, FormGroup, Input, Button } from 'reactstrap'
import './search.css'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
      loading: false,
      message: ''
    }
  }

  handleChange = event => {
    const query = event.target.value 
    this.setState({ query: query })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.query)
    this.setState({ loading: true, message: ''})
  }

  render() {
    const { query } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0 search'>
          <Input
            type='text'
            name='query'
            value={query}
            id='search-input'
            placeholder='Where do you want your new adventure?'
          onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Search</Button>
      </Form>
    )
  }
}

export default Search

