import React,{Component} from 'react';
import './App.css';
import video1 from './assets/img/sample-mp4-file.mp4'
import ImageData from './Component/ImageData/imageData'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      image:0
    }
  }
 
  render(){    
  return (
    <div className="App">
     <h1>Image slider</h1> 
    
     <div> 
    <ImageData/>
    </div> 
    </div>
  );
  }
}

