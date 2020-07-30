import React, { Component } from 'react';

//get more voters button- renderd in getOut.js

class GetMoreVoters extends Component{
    
    replaceVoters() {
        alert("Replaced");
    } 
    
    render() {
        return (
            <div className="Buttflex">
                <button 
                    className="getMoreVoterButton" 
                    onClick={(e) => this.replaceVoters()}
                    >
                    Give me MORE!!
                </button> 
            </div>
        );
    }
}

export default GetMoreVoters