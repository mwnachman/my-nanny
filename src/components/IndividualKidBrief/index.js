import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../config';
import { Button, Form, FormControl } from 'react-bootstrap';

  
class IndividualKidBrief extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // show: true,
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      editable: false,
      urlPrefix: config.baseUrl,
    };
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  editChild(e) {
    this.context.store.dispatch(toggleEditableChild(this.state.id));
    // this.setState({ editable: true });
  }

  confirmChanges(e) {
    const amazonToken = localStorage.getItem('amazon-token');
    console.log('in confirm changes');
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
    this.setState({ editable: false });
  }

  deleteChild(e) {
    console.log('in delete child');
    const child = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'id': this.state.id
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + this.state.amazonToken,
      type: 'DELETE',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Deleted Child:' + JSON.stringify(data));
      }
    });
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        {(this.props.children[this.state.id].show === true && 
          <div>
          <h3 className='childName'>{this.props.child.name}</h3>
          <Button onClick={this.editChild.bind(this)}>Edit</Button>
          <Button onClick={this.deleteChild.bind(this)}>Delete</Button>
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
    children: state.account.children,
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ }, dispatch);
  //WHY DON'T WE SEEM TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(IndividualKidBrief);




