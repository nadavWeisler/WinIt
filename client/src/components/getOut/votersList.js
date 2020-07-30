import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import GetMoreVoters from './getMoreVoters';

// Voter list component TODO: Get makeCall the work!!! baaa
class VotersList extends Component {

  static propTypes = {
    voters: PropTypes.array.isRequired,
  }
 
  makeCall (client, voter){
    if(voter.voteStatus == 0) {
      alert("Called " + voter.voterObject.firstname);
      client.target.style="background-color: #66FF00";
      voter.voteStatus = 1;
    } else {
      alert("regret " + voter.voterObject.firstname);
      client.target.style="background-color: red";
      voter.voteStatus = 0;
    }
  }

  render() {
    const { voters } = this.props;

    let showingVoters = voters;

    showingVoters.sort(sortBy('last-name'));

    return (
      <div className='list-contacts'>
        <ol className='contact-list'>
          {showingVoters.map((voter) => (
            <li key={voter.id} voteStatus="0" className='contact-list-item'>
              <div className='contact-avatar' />
              <div className='contact-details'>
                <p>{voter.voterObject.firstname}</p>
                <p>{voter.voterObject.lastname}</p>
                <p>{voter.voterObject.city}</p>
                <p>{voter.voterObject.phone}</p>
              </div>
              <button className='contact-remove' onClick= {(e) => this.makeCall(e, voter)}>
                Call
              </button>
            </li>
          ))}
        </ol>
        <GetMoreVoters>
        </GetMoreVoters>
      </div>
    )
  }
}

export default VotersList