import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route, Redirect } from 'react-router-dom'
import '../CafesComp.css';

import ReactTooltip from "react-tooltip";

/*https://www.npmjs.com/package/react-tooltip
tooltip component */

class ProgCircle extends Component {
    
    constructor(props){

        super(props);
        

        this.state = {
            /*0=f 1=a 2=f 3=e 4=s*/
            Finishtext: ["","","","",""],
            Checkmarktext:["☐☐","☐☐","☐☐","☐☐","☐☐"],
            ColorHolder: ["rgb(41, 180, 97)","rgb(196, 0, 71)","rgb(101, 0, 232)","rgb(255, 220, 46)","rgb(29, 206, 209)",],
            CAFESvalue: [0,0,0,0,0],
            seg: [null,null,null,null,null,null,null],
            toolTipText: [null,null,null,null,null,null,null],
            CAFESnames:["Cultural ","Athletics ","Family/Friends ","Education ","Social "],
            segCounter: 0
        }

        
    }

    fillIn = () =>{
        this.state.segCounter = 0;
        for(var j = 0; i< 5; j++){
            this.state.Finishtext[j] = "";
        }

        this.state.CAFESvalue[0] = this.props.c;
        this.state.CAFESvalue[1] = this.props.a;
        this.state.CAFESvalue[2] = this.props.f;
        this.state.CAFESvalue[3] = this.props.e;
        this.state.CAFESvalue[4] = this.props.s;

        for(var i =0; i < 5; i++){
            if(this.state.CAFESvalue[i] === 0){
                this.state.ColorHolder[i]=null;
                this.state.Finishtext[i] = "No progress yet";
            }
            if(this.state.CAFESvalue[i] > 0){
                this.state.seg[this.state.segCounter] = this.state.ColorHolder[i];
                this.state.toolTipText[this.state.segCounter] = this.state.CAFESnames[i];

                this.state.segCounter++;
                this.state.Finishtext[i] = "Weekly progress gained!";
                this.state.Checkmarktext[i] = "☑☐";
                this.state.toolTipText[this.state.segCounter-1] += this.state.Checkmarktext[i];

                if(this.state.CAFESvalue[i] >= 2){
                    this.state.seg[this.state.segCounter] = this.state.ColorHolder[i];
                    this.state.toolTipText[this.state.segCounter] = this.state.CAFESnames[i];

                    this.state.segCounter++;
                    this.state.Finishtext[i] = "Weekly quota met!";
                    this.state.Checkmarktext[i] = "☑☑";
                    this.state.toolTipText[this.state.segCounter-1] += this.state.Checkmarktext[i];
                    this.state.toolTipText[this.state.segCounter-2] = this.state.CAFESnames[i] + this.state.Checkmarktext[i];
                }
            }
        }

        if(this.state.segCounter >= 7 && this.state.CAFESvalue[0] >=1 && this.state.CAFESvalue[1] >= 1 && this.state.CAFESvalue[2] >=1
            && this.state.CAFESvalue[3] >= 1 && this.state.CAFESvalue[4] >= 1){
            for(var k = 0; k < 5; k++){
                this.state.Finishtext[k] = "Completed all weekly goals!"
            }
            this.state.segCounter = 7;
        }
    }




    render(){
        this.fillIn();

        return(
        <div class="CafesComp">

        <table id="cafesTable">
        <tr>
            <td>
                <ul class="sliceMaster">
                    <li data-iscapture="true" data-tip={this.state.toolTipText[0]}>
                        <div class="slice"  style={{background: this.state.seg[0]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[1]}>
                        <div class="slice" style={{background: this.state.seg[1]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[2]}>
                        <div class="slice" style={{background: this.state.seg[2]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[3]}>
                        <div class="slice" style={{background: this.state.seg[3]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[4]}>
                        <div class="slice" style={{background: this.state.seg[4]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[5]}>
                        <div class="slice" style={{background: this.state.seg[5]}}></div>
                    </li>

                    <li data-iscapture="true" data-tip={this.state.toolTipText[6]}>
                        <div class="slice" style={{background: this.state.seg[6]}}></div>
                    </li>
                    </ul>
                    <ReactTooltip place="top" type="dark" effect="float"/>
            </td>
            </tr>
            <tr>
            <td>
                <div id="cafesInfo">
                    <h2>CAFES Progress: </h2>
                    <h2><b style={{color : 'lime'}}>{this.state.segCounter}</b>/7 goals reached</h2>
                    <p><b style={{color: "rgb(41, 180, 97)"}}>Cultrual:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[0]}</u> {this.state.Finishtext[0]} </p>

                    <p><b style={{color: "rgb(196, 0, 71)"}}>Athletics:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[1]}</u> {this.state.Finishtext[1]} </p>

                    <p><b style={{color: "rgb(101, 0, 232)"}}>Family/Friends:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[2]}</u> {this.state.Finishtext[2]} </p>

                    <p><b style={{color: "rgb(255, 220, 46)"}}>Education:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[3]}</u> {this.state.Finishtext[3]}</p>

                    <p><b style={{color: "rgb(29, 206, 209)"}}>Social:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[4]}</u> {this.state.Finishtext[4]}</p>
                </div>
            </td>
            </tr>
            {/*<tr>
            <td>
                <div id="cafesInfo2">
                <h2><b style={{color : 'lime'}}>{this.state.segCounter}</b>/7 goals acheived</h2>
                <p>{this.state.Finishtext[0]}</p>
                <p>{this.state.Finishtext[1]}</p>
                <p>{this.state.Finishtext[2]}</p>
                <p>{this.state.Finishtext[3]}</p>
                <p>{this.state.Finishtext[4]}</p>
                </div>
            </td>
            </tr>*/}
        </table>

        </div>
        )
    }
}
export default ProgCircle