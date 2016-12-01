import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../config';
import { toggleEditChild, toggleShowChild } from '../../actions/actions';

import { Button, Form, FormControl } from 'react-bootstrap';

  
class IndividualKidBrief extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      urlPrefix: config.baseUrl,
    };
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  editChild(e) {
    this.context.store.dispatch(toggleEditChild(this.state.id, this.props.child.name,
      this.props.child.phone, true, false));
  }

  confirmChanges(e) {
    const amazonToken = localStorage.getItem('amazon-token');
    const child = {
      'child': {
        'id': this.state.id,
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Updated child:' + JSON.stringify(data));
      }
    });
    this.context.store.dispatch(toggleEditChild(this.state.id, this.props.child.name,
      this.props.child.phone, true, true));
  }

  deleteChild(e) {
    const amazonToken = localStorage.getItem('amazon-token');
    const child = {
      'child': {
        'id': this.state.id
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + amazonToken,
      type: 'DELETE',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Deleted Child:' + JSON.stringify(data));
      }
    });
    this.context.store.dispatch(toggleShowChild(this.state.id));
  }

  render() {
    return (
      <div>
        {(this.props.children[this.state.id].show === true && 
          <div>
          <h3 className='childName'>{this.props.child.name}</h3>
          {(this.props.children[this.state.id].editable === false && 
          <div>
            <Button onClick={this.editChild.bind(this)}>Edit</Button>
            <Button onClick={this.deleteChild.bind(this)}>Delete</Button>
          </div>
          )}
          {(this.props.children[this.state.id].editable === true && 
            <Form>
              <FormControl type='text' name='name' value={this.state.name}
                onChange={this.handleInputChange.bind(this)}>
              </FormControl>
              <FormControl type='text' name='phone' value={this.state.phone}
                onChange={this.handleInputChange.bind(this)}>
              </FormControl>
              <Button onClick={this.confirmChanges.bind(this)}>Confirm</Button>
            </Form>
          )}
          </div>
        )}
      </div>
    );
  } 
}

IndividualKidBrief.contextTypes = {
  store: React.PropTypes.object
};

var mapStateToProps = function(state) {
  return {
    children: state.children,
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ }, dispatch);
  //WHY DON'T WE SEEM TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(IndividualKidBrief);




