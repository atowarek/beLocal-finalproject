import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class NewActivity extends React.Component {
    state= {
        name: '',
        startDate: '',
        endDate:'',
        startHour: '',
        endHour: '',
        address: '',
        city:'',
        description:'',
        category:'',
        picture:''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {name, startDate, endDate, startHour, endHour, address, city, description, category, picture} = this.state
        axios('http://localhost:5000/activities', {
            method: 'POST',
            data: {
                name,
                startDate,
                endDate,
                startHour,
                endHour,
                address,
                city,
                description,
                category,
                picture,
            },
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        this.goToDashboard()
    }

    /*getPosition() {
        this.state.activities.map(activity => {
            const {address} = activity
            axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
            .then(response => {
                console.log(response)
                /*const {location} = response.geometry
                const lat = location.latitude
                const long = location.longitude
                this.setState({
                    latitude : lat,
                    longitude : long
                })
            })
        })
        
    }*/

    goToDashboard = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        const {name, startDate, endDate, startHour, endHour, address, city, description, category, picture} = this.state
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='name'>
                            Let's start with the activity name.
                        </Label>
                        <Input 
                            value={name}
                            onChange={this.handleChange}
                            name='name'
                            placeholder='Name'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='startDate'>
                            What day does it start?
                        </Label>
                        <Input
                            value={startDate}
                            onChange={this.handleChange}
                            name='startDate'
                            placeholder='StartDate'
                            type='date'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='endDate'>
                        What day does it end?
                        </Label>
                        <Input
                            value={endDate}
                            onChange={this.handleChange}
                            name='endDate'
                            placeholder='EndDate'
                            type='date'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='startHour'>
                        What time does it start?
                        </Label>
                        <Input
                            value={startHour}
                            onChange={this.handleChange}
                            name='startHour'
                            placeholder='StartHour'
                            type='time'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='endHour'>
                        What time does it end?
                        </Label>
                        <Input
                            value={endHour}
                            onChange={this.handleChange}
                            name='endHour'
                            placeholder='EndHour'
                            type='time'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='adress'>
                            Where is the activity happening?
                        </Label>
                        <Input
                            value={address}
                            onChange={this.handleChange}
                            name='address'
                            placeholder='Address'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>
                            And the city?
                        </Label>
                        <Input
                            value={city}
                            onChange={this.handleChange}
                            name='city'
                            placeholder='City'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>
                            Can you describe the activity?
                        </Label>
                        <Input
                            value={description}
                            onChange={this.handleChange}
                            name='description'
                            placeholder='Description'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='category'>
                            Choose the category that fits better
                        </Label>
                        <Input
                            value={category}
                            onChange={this.handleChange}
                            name='category'
                            placeholder='Category'
                            type='select'>
                                <option value='running'>Running</option>
                                <option value='cycling'>Cycling</option>
                                <option value='hiking'>Hiking</option>
                                <option value='food and drinks'>Food and drinks</option>
                                <option value='crafts'>Crafts</option>
                                <option value='animals'>Animals</option>
                                <option value='dancing'>Dancing</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='picture'>
                            Post a picture so the activity gets more attention
                        </Label>
                        <Input 
                        value={picture}
                        onChange={this.handleChange}
                        name='picture'
                        placeholder='Picture'
                        type='file'>
                        </Input>
                    </FormGroup>
                    <Button
                        className='button'>
                        New activity
                    </Button>
                </Form>
            </div>
        )
    }
}

export default NewActivity;
