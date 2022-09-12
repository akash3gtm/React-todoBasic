import React from 'react';
import './Greet.css';

class Greet extends React.Component {
  constructor(){
    super();
    this.state = {title : '', greet : ''};
  }

  componentDidMount(){
    this.update = setInterval(this.check(), 60*1000);
  }

  componentWillUnmount() {
      clearInterval(this.update);
  }

  check() {
    const hrs = new Date().getHours();
    if (hrs < 12){
      this.setState({title : 'Morning',
      greet : 'Good Morning.' });
    }
    else if (hrs >= 12 && hrs < 17){
      this.setState({title : 'Noon',
      greet : 'Good Afternoon.'});
    }
    else if (hrs >= 17 && hrs <= 24){
      this.setState({title : 'Evening',
      greet : 'Good Evening.' });
    }
  }

  render(){
    const greeting = this.state;
    // const {title} = this.state;
    return(
      <h2 className={greeting.title}>
        Hi, {greeting.greet}
      </h2>
    )
  }

}

export default Greet;