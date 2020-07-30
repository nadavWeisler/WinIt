import React, { Component } from 'react';
import VotersList from './votersList';
import './getOut.css';

// main component for hamrazot

export default class GetOut extends Component {
    state= {
        //hard coded voters- array with x objects- each object is a voter
        voters: [    
        {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "אור",
              "firstname": "אור",
              "lastname":"הרפז",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "נדב",
              "firstname": "נדב",
              "lastname":"וייסלר",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "זיו",
              "firstname": "אור",
              "lastname":"זיו",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "שקד",
              "firstname": "שקד",
              "lastname":"חסון",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "יעל",
              "firstname": "יעל",
              "lastname":"ניצב",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "מאיה",
              "firstname": "מאיה",
              "lastname":"נורי",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "אלון",
              "firstname": "אלון",
              "lastname":"ויסר",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "אדווה",
              "firstname": "אדווה",
              "lastname":"יוספי",
              "phone": "050-12345670"
            }
          },
          {
            "voteStatus": 0,
            "voterObject":
            {
              "id": "טליה",
              "firstname": "טליה",
              "lastname":"שי",
              "phone": "050-1234567"
            }
          },
          {
            "voteStatus": 1,
            "voterObject":
            {
              "id": "אסף",
              "firstname": "אסף",
              "lastname":"שילוח",
              "phone": "050-1234567"
            }
          }
        ]
    }

    handleGetMoreVoters() {
        console.log('got voters');
    }

    handleClearSelectedVoter(id){
      this.setState(() =>{
        voterPhone: id
        console.log(this.state.voterPhone);
      })
    }

// rendering the smaller components here

    render(){
        return(
          <div>
              <div className="go-header">
              <h1 className="go-header-item">המרצות</h1>
              <h2 className="go-header-item">רשימת בוחרים</h2>
              </div>
              <VotersList
                  voters= {this.state.voters}
              />
          </div>
              );
      }
} 

