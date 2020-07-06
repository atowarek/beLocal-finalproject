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
        adress: '',
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
        const {name, startDate, endDate, startHour, endHour, adress, city, description, category, picture} = this.state
        axios('http://localhost:5000/activities', {
            method: 'POST',
            data: {
                name,
                startDate,
                endDate,
                startHour,
                endHour,
                adress,
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

    }

    render() {
        const {name, startDate, endDate, startHour, endHour, adress, city, description, category, picture} = this.state
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
                            asfasvfiahsbfajsnf
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
                            dfasdgas
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
                            sfad
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
                            asfsdjgid
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
                            asfsdjgid
                        </Label>
                        <Input
                            value={adress}
                            onChange={this.handleChange}
                            name='adress'
                            placeholder='Adress'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>
                            asfsdjgid
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
                            asfsdjgid
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
                            asfsdjgid
                        </Label>
                        <Input
                            value={category}
                            onChange={this.handleChange}
                            name='category'
                            placeholder='Category'
                            type='text'>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='picture'>
                            asfsdjgid
                        </Label>
                        <Input
                            value={picture}
                            onChange={this.handleChange}
                            name='picture'
                            placeholder='Picture'
                            type='image'>
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
