import React from 'react';

class App extends React.Component{

    state = {
        counter: 0
    }

    renderButtonComponent = (text,callback) =>{
        let Cont = 0;
        if(text==="Incrementa"){
            Cont = this.state.counter +1;
        }
        if(text==="Decrementa"){
            Cont = this.state.counter -1;
        }
        return(
            <button onClick={()=>{
                this.setState({counter: Cont})
                }
            }>
            {text}
            </button>

        );
    } 

    render(){
        return  ( 
            <div>
                <h3>Contatore: {this.state.counter}</h3>
                {this.renderButtonComponent("Incrementa")}
                {this.renderButtonComponent("Decrementa")}
            </div> 
        );      
    }

}

export default App;