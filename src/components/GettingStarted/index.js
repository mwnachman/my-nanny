import React from 'react';
import $ from 'jquery';
import './gettingStarted.css';


class GettingStarted extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
    <div>
      <div className='row'>

        <div className='col-md-12'>
          <h1>Table of Conent</h1>

          <div className='col-md-12'>
          <div className='col-md-6'>
            <h2>Setting Up Chores</h2>
            <ul className='table-of-content'>
              <li><a href='#registerAccount'>Register Account</a></li>
              <li><a href='#registerChild'>Register a Child</a></li>
              <li><a href='#registerChore'>Register a Chore to a Child</a></li>
            </ul>
          </div>
          <div className='col-md-6'>
            <h2>Voice Commands</h2>
            <ul className='table-of-content'>
              <li><a href='#greating'>Say Hello</a></li>
              <li><a href='#getChores'>Ask Alexa for Chores</a></li>
              <li><a href='#getChoreDetails'>Ask Alexa for Details on Chores</a></li>
              <li><a href='#choreComplete'>Tell Alexa You've Completed a Chore</a></li>
              <li><a href='#choreSms'>Send Chores as SMS</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <img src='https://goo.gl/i00v4C' />
        </div>
      </div>

      <h2>Setting Up Chores</h2>
      <hr />
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='setup-title' id='registerAccount'>Register Account</h3>
          TODO
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='setup-title' id='registerChild'>Register a Child</h3>
          TODO
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='setup-title' id='registerChore'>Register a Chore to a Child</h3>
          TODO
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-12'>

        </div>
      </div>
      
      <h2>Voice Commands</h2>
      <hr />
      <div className='row card-row'>
        <div className='col-md-6' id='greating'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Say Hello</h2>
            <p className='alexaCommandDesc'>
              When Alexa is greated with this command,
               a text message will be sent to the guardian, notifying of the
               safe arrival, and Alexa will tell the child what the chores for the day are.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>
        <div className='col-md-6' id='getChores'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Ask Alexa for Chores</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, What are [Name] chores?</p>
          </div>
        </div>      
      </div>

      <div className='row card-row'>
        <div className='col-md-6' id='getChoreDetails'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Ask Alexa for Details on Chores</h2>
            <p className='alexaCommandDesc'>
              When a parent registers a new chore to be done, there is an option to add a longer
              description to the chore. This enables you to have short names for the chores and
              make them easier to maintain. To get the description for a chore, simply ask Alexa.
            </p>
            <p className='alexaCommand'>Alexa, details on chore [Chore] for [Name] please</p>
          </div>
        </div>
        <div className='col-md-6' id='choreComplete'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Tell Alexa You've Completed a Chore</h2>
            <p className='alexaCommandDesc'>
              Once a chore is complete, simply tell Alexa that the chore is complete by specify
              the number of the chore.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is done with chore number [Chore]</p>
          </div>
        </div>
      </div>
      
      <div className='row card-row'>
        <div className='col-md-6' id='choreSms'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Send Chores as SMS</h2>
            <p className='alexaCommandDesc'>
              When a child checks in, Alexa will ask if the child would like to recieve the
              chores as an SMS. To do so, say 'Send chores', and the list will be sent to
              the childs phone.
            </p>
            <p className='alexaCommand'>Send chores</p>
          </div>
        </div>
      </div>
    
    </div>
    );
  }

}


export default GettingStarted;