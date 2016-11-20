import React from 'react';
import Schedule from '../Schedule/index';
import Chores from '../Chores/index';
import ChoreForm from '../ChoreForm';
import $ from 'jquery';
import config from '../../config';
import { FormGroup, Collapse, Row, Col, Grid, Button, FormControl, Well } from 'react-bootstrap';


class IndividualKid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      amazonToken: this.props.amazonToken,
      urlPrefix: config.baseUrl,
      chore: '',
      details: '',
      date: '',
      editable: false,
      open: false,
    };
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  addChore(e) {
    const chore = {
      'child': {
        'id': this.state.id,
      },
      'chores': [{
        'title': this.state.chore,
        'details': this.state.details,
        'date': this.state.date
      }]
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/chores?access_token=' + this.state.amazonToken,
      type: 'POST',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        // console.log('Added chore:' + JSON.stringify(data));
        window.location.reload();
      }
    });
  }

  editChild(e) {
    const newState = !this.state.editable;

    this.setState({ editable: newState });
  }

  confirmChanges(e) {
    // console.log('in confirm changes');
    const child = {
      'child': {
        'id': this.state.id,
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        // console.log('Updated chore:' + JSON.stringify(data));
      }
    });
    this.setState({ editable: false });
  }

  cancelChanges(e) {
    e.preventDefault();
    this.setState({ editable: false });
  }


  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={6}>
                <h1>
                  {this.props.child.name}
                  <span>
                    <Button xs={3} md={1} className='editButton' bsSize='xsmall' onClick={this.editChild.bind(this)}>
                      Edit
                    </Button>
                  </span>
                </h1>
            </Col>
          </Row>
        </Grid>
        {(this.state.editable === true &&
          <Row>
            <Col md={4}>
              <Well>
                <form>
                  <FormControl type='text' name='name' value={this.state.name}
                    onChange={this.handleInputChange.bind(this)}>
                  </FormControl>
                  <FormControl type='text' name='phone' value={this.state.phone}
                    onChange={this.handleInputChange.bind(this)}>
                  </FormControl>
                  <Button className='btn btn-default'
                    onClick={this.confirmChanges.bind(this)}>
                      Confirm
                  </Button>
                  <Button className='btn btn-default'
                    onClick={this.cancelChanges.bind(this)}>
                      Cancel
                  </Button>
                </form>
              </Well>
            </Col>
          </Row>
        )}
        <div>
          <h2>Schedule</h2>
          <Schedule child={this.props.child} schedule={this.props.child.schedule}
            name={this.props.child.name} amazonToken={this.state.amazonToken}/>
        </div>
        <div> 
          <h3>Chores</h3>
          {(this.props.child.chores !== undefined &&  
            this.props.child.chores.map((chore, index) =>
              <Chores child={this.props.child} chore={chore} index={index} key={chore.id}
                amazonToken={this.props.amazonToken}/>
            ))
          }
          {(this.props.child.chores === undefined &&
            <div>
              <p>{this.props.name} does not currently have any chores assigned.
              Add a chore below.</p>        
            </div>
          )}
          <div>
            <Button onClick={()=> this.setState({ open: !this.state.open })}>
              New Chore
            </Button>
            <Collapse in={this.state.open}>
              <div>
                <Well>
                  <Row>
                    <Col md={6}>
                      <form>
                        <FormGroup>
                          <FormControl type='text' name='chore' placeholder='Chore'
                            onChange={this.handleInputChange.bind(this)}>
                          </FormControl>
                          {' '}
                          <FormControl type='text' name='details' placeholder='Details'
                            onChange={this.handleInputChange.bind(this)}>
                          </FormControl>
                          {' '}
                          <Row>
                            <Col md={6}>
                              <FormControl type='date' name='date' 
                                onChange={this.handleInputChange.bind(this)}>
                              </FormControl>
                            </Col>
                          </Row>
                          {' '}
                          <Button className='btn btn-default' 
                            onClick={this.addChore.bind(this)}>
                            Add Chore
                          </Button>
                        </FormGroup>
                      </form>
                    </Col>
                  </Row>
                </Well>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}


export default IndividualKid;
