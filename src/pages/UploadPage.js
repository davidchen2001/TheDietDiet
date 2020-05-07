import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
import '../UploadPage.css';
import '../CafesPage.css';
import '../App.css';
import Nut from '../duncandoughnuts2.png';
import ImageUploader from 'react-images-upload';



class UploadPage extends React.Component{

//between constructor and render is all just stuff for making the menu work
    constructor(props){

        super(props);
        
        this.state = {
            showMenu: false,
            pictures: []
        }

        this.onDrop = this.onDrop.bind(this);
        this.showMenu= this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        
    }

    //image upload section//
    //https://www.npmjs.com/package/react-images-upload
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
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
                withIcon={true}
                buttonText='Select images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                accept='accept image'
            />
        </div>
        <div className="UploadPage__Form">
                <div className="DropDown">
                    <button onClick ={this.showMenu}>
                        <img src={Nut} alt=" " height = '100px' width = '100px'/>
                        </button>

                    {
                        this.state.showMenu
                    ?(
                        <div className="btn-group">
                            <Link exact to="/home"className="FormField__Link">
                            <button> 
                                <img src={Nut} alt=" " />
                            </button> 
                            </Link>

                            <button> <img src={Nut} alt=" "/></button>
                            <button> <img src={Nut} alt=" "/></button>
                        </div>
                    ):(
                    null
                    )
                    }
                </div>
                <h1>This is the upload page</h1>
                </div>
            </div>

    );
}

}

export default UploadPage;