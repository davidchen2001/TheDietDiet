import React, {Component} from 'react';
import '../CafesPage.css';
import '../App.css';
import Nut from '../duncandoughnuts2.png';


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
          <div className="CafesPage">
            <div className="CafesPage__Aside"> </div>
            <div className="CafesPage__Form">
                <div className="DropDown">
                    <button onClick ={this.showMenu}>
                        <img src={Nut} alt=" " height = '100px' width = '100px'/>
                        </button>

                    {
                        this.state.showMenu
                    ?(
                        <div className="btn-group">

                            <button> <img src={Nut} alt=" " height = '50px' width = '50px'/></button>
                            <button> <img src={Nut} alt=" " height = '50px' width = '50px'/></button>
                            <button> <img src={Nut} alt=" " height = '50px' width = '50px'/></button>
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