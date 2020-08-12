import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
import '../UploadPage.css';
import '../CafesPage.css';
import '../App.css';
import Nut from '../duncandoughnuts2.png';
import ImageUploader from 'react-images-upload';

import { connect } from 'react-redux';
import {uploadImage} from '../actions/ImageAction.js'; 
import {clearErrors} from '../actions/ErrorAction'; 
import PropTypes from 'prop-types';

class UploadPage extends Component{

//between constructor and render is all just stuff for making the menu work
    constructor(props){

        super(props);
        
        this.state = {
            showMenu: false,
            pictures: [],
            isCAFES: false,
            isGroceries: false,
            isMeals: false

        }
        this.handleChange = this.handleChange.bind(this);

        this.onDrop = this.onDrop.bind(this);
        this.showMenu= this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        
    }

    static propTypes = {
        isUploaded: PropTypes.bool,
        error: PropTypes.object.isRequired,
        uploadImage: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
  
        const { error } = this.props;
        if (error !== prevProps.error) {
          if(error.id === 'IMAGE_UPLOAD_ERROR') {
            this.setState({ msg: error.msg }); 
            
          } else {
            this.setState({ msg: null });
            //this.props.clearErrors();
          }
        }
      
      }

    //image upload section//
    //https://www.npmjs.com/package/react-images-upload
    onDrop(picture) {
                this.setState({
                    pictures: this.state.pictures.concat(picture),
                });
       
    }

    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        
      
        this.setState({[name]:value});
      }
    
    uploadHandler = (e) =>{
        e.preventDefault();

        const latestImageIndex = this.state.pictures.length
        const newImage = this.state.pictures[latestImageIndex-1]

        const imageFormData = new FormData();
        imageFormData.append("imageData", newImage)

        this.props.uploadImage(imageFormData)
        console.log(newImage)
        //console.log(imageFormData)
        
        console.log('The form was submitted with following data:');
        console.log(this.state);
        alert("Form submitted");
        window.location.reload(false);
     }

    //end of image upload section


    //menu event handling
    showMenu(event){
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
      //end of menu event handling
      
render(){
    return(
        <div classname="UploadPage">
        <div className="UploadPage__Aside">

        <ImageUploader
                fileContainerStyle={{margin : '1%'}}
                withIcon={true}
                withLabel={true}
                labelStyles={{color : 'black'}}
                buttonText='Select images'
                onChange={this.onDrop} 
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                accept='accept image'
            />
        <div id="submitDiv">
            <div className="FormField">
                <p> Select the type of image you are uploading:</p>
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="isCAFES" value={this.state.isHelper} onChange={this.handleChange}/> CAFES? 
                </label>  
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="isGroceries" value={this.state.isHelper} onChange={this.handleChange}/> Groceries? 
                </label>  
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="isMeals" value={this.state.isHelper} onChange={this.handleChange}/> Meal(s)? 
                </label>    
            </div>
            <button id="submitButton" type="submit" onClick={this.uploadHandler}>Submit</button>
         </div>
           
        </div>

        <div className="UploadPage__Form">
                <div className="DropDown">
                    <button className="DDButton" onClick ={this.showMenu}>
                        <img class="DDButtonImg" src={Nut} alt=" " height = '100px' width = '100px'/>
                        </button>

                    {
                        this.state.showMenu
                    ?(
                        <div className="btn-group">
                            <Link exact to="/home"className="FormField__Link">
                            <button> 
                                <img src={Nut} alt=" " />
                                Home
                            </button> 
                            </Link>

                            <Link exact to="/profile" className="FormField__Link"  >
                            <button > 
                                <img src={Nut} alt=" " />
                                Profile
                            </button> 
                            </Link>

                            <Link exact to="/upload" className="FormField__Link"  >
                            <button > 
                                <img src={Nut} alt=" " />
                                Upload
                            </button> 
                            </Link>
                        </div>
                    ):(
                    null
                    )
                    }
                </div>
                </div>
            </div>

    );
}
}


const mapStateToProps = state => ({
    isUploaded: state.isUploaded,
    error: state.error
})

export default connect(
    mapStateToProps, { uploadImage }
) (UploadPage);