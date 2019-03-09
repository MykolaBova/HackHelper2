import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Segment, Message, Form, Header, Icon, Button, Label, Dropdown } from "semantic-ui-react";


class index extends Component {

    state = {
        hours: 0,
        team: 0,
        technology: ""

    }


    render() {
        return (
            
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }} textAlign="center">
                    <Header as="h2" textalign="center">
                        <Icon name="sign language icon" color="brown" textalign="center" />
                        <Message color="brown" >Type your project data</Message>
                    </Header>

                    <Form size="large" textalign="center" >
                        <Segment stacked>
                            <Label className="ui label" 
                            style={{margin: 17, fontSize: 15}}>Some field Some field</Label>
                            <Form.Input fluid className="field" type="number" name="hours"
                                placeholder="hours"
                            />
                            <Label className="ui label" style={{margin: 17, fontSize: 15}}
                            >Some field Some field</Label>                       

                            <Form.Input fluid className="field" type="text" name="team"
                                placeholder="team"
                            />
                            <Label className="ui left label" 
                            style={{margin: 17, fontSize: 15}}>Some field Some field</Label>
                            <Form.Input fluid className="field" type="text" name="team"
                                placeholder="team"
                            />
                            <Dropdown className="ui dropdown">
                                <Dropdown.Menu content="select" type="text">
                                    <Dropdown.Item content="some" />
                                </Dropdown.Menu>
                            </Dropdown>


                                    <Button type="submit" loading={false} size="medium" fluid>Submit</Button>
                        </Segment>
                    </Form>
                    <Link to="/">Go to Home</Link>
                </Grid.Column>
            </Grid>
            
            
        );
    };
}

export default index;