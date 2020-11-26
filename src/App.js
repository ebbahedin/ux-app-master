import React from 'react';
import './App.css';




function Header() {
  return (
    <div className="App">
      <h1>CLI-MATE</h1>
    </div>
  );
}




class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://my.api.mockaroo.com/co2.json?key=8eb9e6f0';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() { 
    return (
      <div>
        <Header/>
        <h2>my Component has Mounted, Check the browser 'console' </h2>
      </div>
    );
}
}
  






export default myComponent;



