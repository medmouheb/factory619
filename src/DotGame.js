import React, { Component } from 'react';


export class DotGame extends Component{

    constructor( props ){
        super( props );
        let buttonListColor=[]
        let caseListContent=[]
        let i;
            for (i = 0; i < 24; i++) { 
                if(i<3||(i>6&&i<10)||(i>13&&i<17)||(i>20)  )
                    buttonListColor.push({row:(parseInt(i/7)),column:(i%3),type:("horizotal"),color:"white"})
                else
                    buttonListColor.push({row:(parseInt(i/7)),column:(i%4),type:("vertical"),color:"white"})
            }
             i=0;
            for (i = 0; i < 9; i++) { 
                caseListContent.push("****")
            }
        this.state = {
            buttonList:buttonListColor ,
            caseList:caseListContent,
            currentPlayer:{name:"1ere",color:"blue"}

        };
    }
    lastInSquare=(index)=>{
        let tab=this.state.buttonList
        switch (index) {
            case 0:
                if (tab[3] .color!= "white" && tab[7] .color!= "white" && tab[4] .color!= "white") {
                    return 1
                }
                break;
            case 1:
                if (tab[4] .color!= "white" && tab[8] .color!= "white" && tab[5] .color!= "white") {
                    return 2
                }
                break;
            case 2:
                if (tab[5] .color!= "white" && tab[9] .color!= "white" && tab[6] .color!= "white") {
                    return 3
                }
                break;
            case 3:
                if (tab[0] .color!= "white" && tab[7] .color!= "white" && tab[4] .color!= "white") {
                    return 1
                }
                break;
            case 4:
                if (tab[0] .color!= "white" && tab[3] .color!= "white" && tab[7] .color!= "white") {
                    return 1
                } else if (tab[1] .color!= "white" && tab[8] .color!= "white" && tab[5] .color!= "white") {
                    return 2
                }
                break;
            case 5:
                if (tab[1] .color!= "white" && tab[4] .color!= "white" && tab[8] .color!= "white") {
                    return 2
                } else if (tab[2] .color!= "white" && tab[6] .color!= "white" && tab[9] .color!= "white") {
                    return 3
                }
                break;
            case 6:
                if (tab[2] .color!= "white" && tab[5] .color!= "white" && tab[9] .color!= "white") {
                    return 3
                }
                break;
            case 7:
                if (tab[3] .color!= "white" && tab[0] .color!= "white" && tab[4] .color!= "white") {
                    return 1
                } else if (tab[10] .color!= "white" && tab[14] .color!= "white" && tab[11] .color!= "white") {
                    return 4
                }
                break;
            case 8:
                if (tab[4] .color!= "white" && tab[1] .color!= "white" && tab[5] .color!= "white") {
                    return 2
                } else if (tab[11] .color!= "white" && tab[15] .color!= "white" && tab[12] .color!= "white") {
                    return 5
                }
                break;
            case 9:
                if (tab[5] .color!= "white" && tab[2] .color!= "white" && tab[6] .color!= "white") {
                    return 3
                } else if (tab[12] .color!= "white" && tab[16] .color!= "white" && tab[13] .color!= "white") {
                    return 6
                }
                break;
            case 10:
                if (tab[7] .color!= "white" && tab[11] .color!= "white" && tab[14] .color!= "white") {
                    return 4
                }
                break;
            case 11:
                if (tab[14] .color!= "white" && tab[10] .color!= "white" && tab[7] .color!= "white") {
                    return 4
                } else if (tab[8] .color!= "white" && tab[12] .color!= "white" && tab[15] .color!= "white") {
                    return 5
                }
                break;
            case 12:
                    if(tab[15]!="white" && tab[11]!="white" && tab[8]!="white"){
                        return 5
                    }else if(tab[9]!="white" && tab[18]!="white" && tab[16]!="white"){
                        return 6
                    }
                break;
            case 13:
                    if(tab[16]!="white" && tab[12]!="white" && tab[9]!="white"){
                        return 6
                    }
                break;
            case 14:
                    if(tab[10]!="white" && tab[7]!="white" && tab[11]!="white"){
                        return 4
                    }else if(tab[17]!="white" && tab[21]!="white" && tab[18]!="white"){
                        return 7
                    }
                break;
            case 15:
                    if(tab[11]!="white" && tab[8]!="white" && tab[12]!="white"){
                        return 5
                    }else if(tab[18]!="white" && tab[22]!="white" && tab[19]!="white"){
                        return 8
                    }
                break;
            case 16:
                    if(tab[12]!="white" && tab[9]!="white" && tab[13]!="white"){
                        return 6
                    }else if(tab[19]!="white" && tab[23]!="white" && tab[20]!="white"){
                        return 9
                    }
                break;
            case 17:
                    if(tab[14]!="white" && tab[18]!="white" && tab[21]!="white"){
                        return 7
                    }
                break;
            case 18:
                    if(tab[14]!="white" && tab[17]!="white" && tab[21]!="white"){
                        return 7
                    }else if(tab[22]!="white" && tab[19]!="white" && tab[15]!="white"){
                        return 8
                    }
                break;
            case 19:
                    if(tab[15]!="white" && tab[18]!="white" && tab[22]!="white"){
                        return 8
                    }else if(tab[16]!="white" && tab[20]!="white" && tab[23]!="white"){
                        return 9
                    }
                break;
            case 20:
                    if(tab[16]!="white" && tab[19]!="white" && tab[23]!="white"){
                        return 9
                    }
                break;
            case 21:
                    if(tab[17]!="white" && tab[14]!="white" && tab[18]!="white"){
                        return 7
                    }
                break;
            case 22:
                    if(tab[18]!="white" && tab[15]!="white" && tab[19]!="white"){
                        return 8
                    }
                break;
            case 23:
                    if(tab[19]!="white" && tab[16]!="white" && tab[20]!="white"){
                        return 9
                    }
                break;
            default :return 0
        }
    
    }
    buttonClicked=(index,item)=>{
        if(this.state.buttonList[index].color!=="white")
            return

        let buttonList=this.state.buttonList
        let caseList=this.state.caseList
        if(this.lastInSquare(index)){
            caseList[this.lastInSquare(index,item)-1]=this.state.currentPlayer.name
        }

        console.log(buttonList[index])

        buttonList[index].color=this.state.currentPlayer.color
        let currentPlayer={name:"1ere",color:"blue"}
        if(this.state.currentPlayer.name==="1ere"){
            currentPlayer={name:"2eme",color:"red"}
        }

        this.setState(
            {
                buttonList:buttonList ,
                currentPlayer:currentPlayer
            }
            )
    }


render(){
    console.log(this.state)

    return (
        <div>
                {
                    this.state.buttonList.map((item,index)=>{
                        if(item.type==="horizotal"){
                            let style={width:"50px",height:"1px",backgroundColor:item.color}
                            return(
                                <span>
                                    <button style={style} onClick={()=>{this.buttonClicked(index,item)}}></button>
                                    {(index===2||index===9||index===16)&&<br/>}
                                </span>
                            )
                        }
                        else{
                            let style={width:"1px",height:"50px",backgroundColor:item.color}

                            return(
                                <span>
                                    <button style={style} onClick={()=>{this.buttonClicked(index,item)}}></button>
                                    {
                                        (index!==6&&index!==13&&index!==20)&&
                                        <span style={{width:"48px",height:"18px"}} >
                                            {this.state.caseList[index-3-(item.row*4)]}
                                        </span>
                                    }
                                    {(index===6||index===13||index===20)&&<br/>}
                                </span>
                            )
                        }
                        
                    })
                }

        </div>
    );
}
        
    
}



export default DotGame;