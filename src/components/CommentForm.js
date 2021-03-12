import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//add logo to navbar!!!
export default class CommentForm extends Component {
    emptyCustomer = {
        firstname: '',
        lastname: '',
        comment: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyCustomer
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // async componentDidMount() {
    //     if (this.props.match.params.id !== 'new') {
    //         const customer = await (await fetch(`/api/customer/${this.props.match.params.id}`)).json();
    //         this.setState({ item: customer });
    //     }
    // }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/api/customer', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        // this.props.history.push('/stemnotnerds');
    }

    render() {
        const { item } = this.state;

        return <div>
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstname">Firstname</Label>
                        <Input type="text" name="firstname" id="firstname" value={item.firstname || ''}
                            onChange={this.handleChange} autoComplete="firstname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Lastname</Label>
                        <Input type="text" name="lastname" id="lastname" value={item.lastname || ''}
                            onChange={this.handleChange} autoComplete="lastname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Comment</Label>
                        <Input type="text" name="comment" id="comment" value={item.comment || ''}
                            onChange={this.handleChange} autoComplete="comment" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/customers">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>;
    }
}