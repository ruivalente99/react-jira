import React, {Component} from 'react';
import './App.css';
import fetch from 'node-fetch'
class App extends Component {

 constructor(props){
   super(props);
   this.state = {
     items: [],
     isLoaded: false,
   }
 }
 componentDidMount() {
  fetch("https://ruivalente.atlassian.net/rest/api/3/issue/createmeta", {
    mode: "no-cors",
    method: "GET",
    headers: {
      Authorization: `Basic ${Buffer.from(
        "rui.valente99@gmail.com:uXbobXwH1qPCkFdnov9O97BB"
      ).toString("base64")}`,
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText} ${response}`
      );
      console.log(response);
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
 }
 render()
 {
  return (
    <div className="App">
     
    </div>
    );
 }
  
  
}

export default App;
