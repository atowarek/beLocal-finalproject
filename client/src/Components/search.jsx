import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import './search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      category: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(e.target.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    const { query, category } = this.state
    this.props.onSearch(query, category)
    this.setState({
      query: '',
      category: '',
    })
  }

  render() {
    const { query, category } = this.state
    return (
      <div className='search'>
        <Form inline className='search-form' onSubmit={this.handleSubmit}>
          <FormGroup className='input-search'>
            <Input
              type='text'
              name='query'
              value={query}
              id='search-input'
              placeholder='Where do you want your new adventure?'
              onChange={this.handleChange}
              className='input-search'
            />
          </FormGroup>
          <FormGroup className='input-category'>
            <Input
              className='input-category'
              type='select'
              name='category'
              id='category'
              placeholder='Select category'
              value={category}
              onChange={this.handleChange}>
              {/* change css for the first option to #999 */}
              <option value=' '>All categories</option>
              <option>Animals</option>
              <option>Crafts</option>
              <option>Cycling</option>
              <option>Dancing</option>
              <option>Food and Drinks</option>
              <option>Hiking</option>
              <option>Running</option>
            </Input>
          </FormGroup>
          <Button className='search-button'>
            {' '}
            Search{' '}
            <span role='image' aria-label='search'>
              🔍
            </span>
          </Button>
        </Form>
      </div>
    )
  }
}

export default Search
