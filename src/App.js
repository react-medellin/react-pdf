import React, { Component } from 'react';
import './App.css';
import * as jsPDF from 'jspdf';


class App extends Component {

  constructor(props){
    super(props);
    this.pdfToHTML=this.pdfToHTML.bind(this);
}

pdfToHTML(){
    var specialElementHandlers = {
        '#myId': function(element, renderer){
            return true;
        },
    };

    let doc = new jsPDF();
    doc.text(20, 20, 'Hello world.');
    doc.addPage('a4','p');
    var source = document.getElementById('myId'); //$('#HTMLtoPDF')[0];
    doc.fromHTML(
        source, 15, 15, {
            'elementHandlers': specialElementHandlers
        }
    );
    doc.addPage('a4','l');
    doc.fromHTML(
        source, 15, 15, {
            'elementHandlers': specialElementHandlers
        }
    );
    doc.save('Test.pdf');


}

  render() {
   
    return (
      <div id="App" >
          <div id="myId" >
                  <h2>HTML to PDF</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
          <button onClick={this.pdfToHTML}>Download PDF</button>
      </div>
    );
  }
}

export default App;
