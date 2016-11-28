import React from 'react';
import './home.css';

import Dashboard from '../../containers/dashboard';
// import ChildDetails from '../../containers/childDetails';

import { getAccount } from '../../actions/actions.js';

getAccount('Atza%7CIwEBIMQORihhRsCllsjA8Y-nBbDANadgT2axomyG4Hz04RImkuAqGMqIHrQfdFkCAVO\
  TVZX6yl5OocEy1STAJPwFj860j62fw3Z_-ELqO5Outxc1bOR\
  Ca3w2SSupqWE-2Lkx5MdxDX5BJnFbhd27brG77GkDzPHw0LV5OzMtjgm2UTppd2OY3HmFZaPzuXWRH_Uu4is\
  RfdiW5kntzmzWDrBFdPgDHdBFRc6MuYcSMcYbhd0m322bIVPa1\
  Av_Kqs_jiSiJreBhnIGvqFtpJbVFfLgttSp_htNVrvyRMwY86pLZmyCXTFpX-7DFQNGTZi3a7-NJ_NjF\
  sB58EB1q7WAnYKOZG9Q9V2AmW6N4QRmbDYV8HPnn9qX8I3rQUcWEGa7\
  4KdZM36YtFavHoly_rPSAzY7ZGOgRcFISg0LPM91dci-etLZ0_X6ijKBm3JIhnxxICY8T0rB69kPvfm\
  YP5MW3GXBkVnx7WpCILnI482wMB0q_UDWP7UzNiZpPjNQFMBdHVd4cNsy\
  UWBYgcSxzogkoslD5pulvyFOMt8QjHtiWofZY82MoKz1lOb9dSkpNxpRlWehxuE');

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonToken: ''
    };

  }


  componentDidMount() {

    const amzToken = localStorage.getItem('amazon-token') ? localStorage.getItem('amazon-token') : 
      ((((window.location.href).split('='))[1]).split('&'))[0];
    this.setState({ amazonToken: amzToken });
    localStorage.setItem('amazon-token', amzToken);
    // console.log('local storage', localStorage.getItem('amazon-token'));
  }

  render() {
    console.log(this.props);
    return (
    <div className='home'>
      <Dashboard />
      <hr/>
    </div>
    );
  }

}

export default Home;
