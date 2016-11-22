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

        <div className='col-md-7'>
          <h1>Table of Conent</h1>
          <ul className='table-of-content'>
            <li><a href='#'>Say Hello</a></li>
            <li><a>List of Chores</a></li>
            <li><a>Navigate Chores</a></li>
            <li><a>Mark Chore as Completed</a></li>
            <li><a>List of Children</a></li>
            <li><a>Send Chores as SMS</a></li>
          </ul>
        </div>
        <div className='col-md-5'>
          <div className='imageHeight'></div>
        </div>
      </div>

      <hr />

      <div className='row card-row'>

        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

      </div>

      <div className='row card-row'>
      
        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='col-md-12 card'>
            <h2 className='alexaCommandTitle'>Element 1</h2>
            <p className='alexaCommandDesc'>
              Description on what Element 1 is all about. This would normaly be one to tree sentences.
            </p>
            <p className='alexaCommand'>Alexa, [Name] is home!</p>
          </div>
        </div>

      </div>
    
    </div>
    );
  }

}


export default GettingStarted;