import React, { Component } from 'react';

export default class MakeHamraza extends Component {
    state= {
        //hard coded voters- array with x objects- each object is a voter
        voters: [    
        {
            "id": "אור",
            "firstname": "אור",
            "lastname":"הרפז",
            "city": "Tel Aviv",
            "phone": "050-1234567"
          },
          {
            "id": "נדב",
            "firstname": "נדב",
            "lastname":"וייסלר",
            "city": "Tel Aviv",
            "phone": "050-1234567"
           
          },
          {
            "id": "זיו",
            "firstname": "אור",
            "lastname":"זיו",
            "city": "Ramat Hasharon",
            "phone": "050-1234567"
         
          },
          {
            "id": "שקד",
            "firstname": "שקד",
            "lastname":"חסון",
            "city": "Tel Aviv",
            "phone": "050-1234567"
          },
          {
            "id": "יעל",
            "firstname": "יעל",
            "lastname":"ניצב",
            "city": "Tel Aviv",
            "phone": "050-1234567"
          },
          {
            "id": "מאיה",
            "firstname": "מאיה",
            "lastname":"נורי",
            "city": "Tel Aviv",
            "phone": "050-1234567"
          },
          {
            "id": "אלון",
            "firstname": "אלון",
            "lastname":"ויסר",
            "city": "Pardes Hana",
            "phone": "050-1234567"
          },
          {
            "id": "אדווה",
            "firstname": "אדווה",
            "lastname":"יוספי",
            "city": "Pardes Hana",
            "phone": "050-1234567"
          },
          {
            "id": "טליה",
            "firstname": "טליה",
            "lastname":"שי",
            "city": "Beer Sheva",
            "phone": "050-1234567"
          },
          {
            "id": "אסף",
            "firstname": "אסף",
            "lastname":"שילוח",
            "city": "Givataim",
            "phone": "050-1234567"
          }
        ]
    }

    render(){
        return(
    <div>
        <div className="go-header">
        <h1 className="go-header-item">Make a New Hamraza</h1>
        <h2 className="go-header-item">Assign voters by tags to each volunteer</h2>
        </div>
    </div>
        );
    }
}