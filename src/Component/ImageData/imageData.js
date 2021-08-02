import React,{Component} from 'react';
import ReactImageMagnify  from 'react-image-magnify';
import video1 from '../../assets/img/sample-mp4-file.mp4'

export default class ImageData extends Component{
    constructor(props){
        super(props)
        this.state={
          image:'http://lorempixel.com/200/150/nature/4',
          check:0
        }
      }
    render(){
        const imageClick = (bill,nu) => {
            this.setState({image:bill,check:nu},
             function(){
               console.log('cl',this.state.image,this.state.check)
             })
           } 
        return(
     <div style={{display:'flex', flexDirection:"row"}} >
         <div className="gallery" style={{display:'flex',flexDirection:'column'}} >
            <img class="maxwidth" id="switcher" src="http://lorempixel.com/200/150/nature/4" onClick={() => imageClick("http://lorempixel.com/200/150/nature/4")} />
            <br/>
            <img class="thumb" src="http://lorempixel.com/80/50/nature/1" onClick={() => imageClick("http://lorempixel.com/80/50/nature/1")}/>
            <br/>
            <img class="thumb" src="https://rukminim1.flixcart.com/image/128/128/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=70" onClick={() => imageClick("https://rukminim1.flixcart.com/image/128/128/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=70")} />
            <br/>
            <img class="thumb" src="https://rukminim1.flixcart.com/image/128/128/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=70" onClick={() => imageClick(video1,1)} />
            <br/>
           
           
           
            {/* <div class="q6DClP" style="background-image:url(https://rukminim1.flixcart.com/image/128/128/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=70)"></div> */}
        </div> 
         <div style={{paddingLeft:'10px'}} >
         {this.state.check==1?
         <div >
            <video controls style={{width:'200%',height:'100%'}} >
              <source src={video1} type="video/mp4" />
            </video>
         </div>:
         <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,
            src: this.state.image,
            width: 300,
            height: 450
        },
        largeImage: {
            src: this.state.image,
            width: 1200,
            height: 1800
        },
        enlargedImageContainerDimensions: {
          width: '250%',
          height: '100%'
      }
    }} />}
    </div>
</div>
        )
    }
}