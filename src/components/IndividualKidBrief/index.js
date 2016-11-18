import React from 'react';
import config from '../../config';

 
class IndividualKidBrief extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      amazonToken: this.props.amazonToken,
      urlPrefix: config.baseUrl,
      editable: false,
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  editChild(e) {
    this.setState({ editable: true });
  }

  confirmChanges(e) {
    console.log('in confirm changes');
    const child = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'id': this.state.id,
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children',
      type: 'PUT',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Updated chore:' + JSON.stringify(data));
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
      url: this.state.urlPrefix + '/api/children',
      type: 'DELETE',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Deleted Child:' + JSON.stringify(data));
      }
    });
    // will this child then disappear from the account without
    // needing to do anything else?
  }

  render() {
    return (
      <div>
        <h1>{this.props.child.name}</h1>
        <button onClick={this.editChild.bind(this)}>Edit</button>
        {(this.state.editable === true && 
          <form>
            <input type='text' name='name' value={this.state.name}
              onChange={this.handleInputChange.bind(this)}>
            </input>
            <input type='text' name='phone' value={this.state.phone}
              onChange={this.handleInputChange.bind(this)}>
            </input>
            <button className='btn btn-default' 
              onClick={this.confirmChanges.bind(this)}>
              Confirm
            </button>
          </form>
        )}
        <button onClick={this.deleteChild.bind(this)}>Delete</button>
      </div>
    );
  } 
}


export default IndividualKidBrief;



