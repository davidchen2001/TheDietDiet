import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import '../ProfilePage.css';
import '../App.css';
import '../CafesPage.css';
import Nut from '../duncandoughnuts2.png';

//https://reactjsexample.com/justified-image-gallery-component-for-react/
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "CAFES", title: "CAFES"}, {value: "Meals", title: "Meals"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: Nut,
        thumbnail: Nut,
        thumbnailWidth: 212,
        thumbnailHeight: 212,
},
{
    src: Nut,
    thumbnail: Nut,
    thumbnailWidth: 212,
    thumbnailHeight: 212,
},
{
    src: Nut,
    thumbnail: Nut,
    thumbnailWidth: 212,
    thumbnailHeight: 212,
},
{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "CAFES", title: "CAFES"}, {value: "Meals", title: "Meals"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},

{
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: Nut,
    thumbnail: Nut,
    thumbnailWidth: 212,
    thumbnailHeight: 212,
},
{
src: Nut,
thumbnail: Nut,
thumbnailWidth: 212,
thumbnailHeight: 212,
},
{
src: Nut,
thumbnail: Nut,
thumbnailWidth: 212,
thumbnailHeight: 212,
}
]


//between constructor and render is all just stuff for making the menu work
class CafesPage extends Component{
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu= this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

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



      


    render(){
        return(

            
          <div className="ProfilePage">
            <div className="ProfilePage__Aside">
                <div class="profileDiv">
                <table>
                    <tr>
                        <td>
                            <div id="UserPictureDiv">
                                <p>User picture goes here</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="UserInfoDiv">
                                <h3>Name goes here</h3>
                                <h4>Bio goes here (/￣ー￣)/~~☆’.･.･:★’.･.･:☆</h4>
                            </div>
                        </td>
                        <td>
                            <div id="HelperInfoDiv">
                                <p>Helper 1 info here</p>
                                <p>Helper 2 info here</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <hr/>
                </div>
                <div class="photoGallery">
                    <Gallery images={IMAGES} backdropClosesModal={true} margin={"5px"} showImageCount={false} rowHeight={100}/>
                
                </div>
            </div>
            <div className="ProfilePage__Form">
                <div className="DropDown">
                    <button className="DDButton" onClick ={this.showMenu}>
                        <img class="DDButtonImg" src={Nut} alt=" " height = '100px' width = '100px'/>
                        </button>

                    {
                        this.state.showMenu
                    ?(
                        <div className="btn-group">
                            <Link exact to="/home" className="FormField__Link"  >
                            <button > 
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

export default CafesPage;