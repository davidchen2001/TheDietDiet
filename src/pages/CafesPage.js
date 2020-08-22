import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
import '../CafesPage.css';
import '../App.css';
import Nut from '../assets/DietDietLogo.png';
import ProgCircle from './CafesComp.js';

/*chart stuff*/
import { Chart } from 'react-charts';
/*end of chart stuff*/

/*https://www.npmjs.com/package/react-charts*/
/*^React chart component link*/

//between constructor and render is all just stuff for making the menu work
class CafesPage extends Component{
    constructor(){
        super();

        this.state = {
            showMenu: false,
            DisplayAside: true
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

      showAside = () =>{
        this.setState({DisplayAside: true});
      };

      hideAside = () =>{
        this.setState({DisplayAside: false});
    };

    


    render(){
        //altering aside size
        let formName = 'CafesPage__Form';
        let mainName = 'CafesPage__Aside'
        if(this.state.DisplayAside === false){
            mainName='CafesPage__Aside__Max';
        }



        return(

          <div className="CafesPage">

            <div className={mainName}>
                {this.state.DisplayAside ?(
                <button class="openMenu" onClick={this.hideAside}><b>⇨</b></button>
                ):(
                <button class="closeMenu" onClick={this.showAside}><b>⇦</b></button>
                )}
                {/*^Menu hide and dispaly for the whole aside*/}  

                <div id="CafesProgress">
                    <ProgCircle c={1} a={0} f={0} e={1} s={2} />
                </div>
            </div>

    

            {
            this.state.DisplayAside 
            ?(


                <div className={formName}>
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
                                    {/*<img src={Nut} alt=" " />*/}
                                    <h1 className="ButtonIcon">⌂</h1>

                                </button> 
                                </Link>

                                <Link exact to="/profile" className="FormField__Link"  >
                                <button > 

                                    {/*<img src={Nut} alt=" " />*/}
                                    <h1 className="ButtonIcon">✨</h1>

                                </button> 
                                </Link>

                                <Link exact to="/upload" className="FormField__Link"  >

                                <button > 
                                    {/*<img class="DDButtonImg" src={Nut} alt=" " />*/}
                                    <h1 className="ButtonIcon">⇥</h1>

                                </button> 
                                </Link>
                                
                                <Link exact to="/" className="FormField__Link"  >

                                <button > 
                                    <h3 className="ButtonIcon">Settings</h3>

                                </button> 
                                </Link>

                            </div>
                        ):(null)}
                    </div>
                    <h2>CAFES</h2>
                    </div>
                ):(null)}


            </div>

           
         
    );
    }
    
}

export default CafesPage;