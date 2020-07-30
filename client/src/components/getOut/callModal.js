import React, { Component } from 'react';
import Modal from 'react-modal';

// Modal that opens when user makes a call

class CallModal extends Component{

    handleClearSelectedVoter(){
        const CallValue = e.target.elements.id;
        this.props.handleClearSelectedVoter(CallValue);

    }

    render(){
    return(
    <Modal
     isOpen= {!!props.selectedVoter}
     onRequestClose={props.handleClearSelectedVoter}
     contentLabel= "selectedVoter"
     closeTimeoutMS={200}
     className="modal"
     > 
        <h3 className="modal__title"> איך הייתה השיחה </h3>
        {props.selectedVoter && 
            <div className="modal__body Buttflex">
                <div><button id="call1" onClick= {this.handleClearSelectedVoter}>לא ענה</button></div>
                <div><button id="call2" onClick= {this.handleClearSelectedVoter}>אולי יצביע</button></div>
                <div><button id="call3" onClick= {this.handleClearSelectedVoter}>מתכוון להצביע</button></div>
                <div><button id="call4" onClick= {this.handleClearSelectedVoter}>בדרך להצביע</button></div>
            </div>
        }
        <button className="button" onClick= {props. handleClearSelectedVoter}>Okay </button>
    
    </Modal>

    )}

    }

export default CallModal;