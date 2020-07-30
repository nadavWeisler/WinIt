const mongoose = require('mongoose');
const {Person} = require('./person');


//Schema definition
var EncouragementSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        trim: true
    },
    startTime: {
        type: Date,
        require: true
    },
    endTime: {
        type: Date,
        require: true
    },
    voted:{
        type: Array,
        default: []
    },
    toVote:{
        type: Array,
        default: []
    },
    tags:{
        type: Array
    }
});


EncouragementSchema.statics.CreateEncouragement = async function(encoName, encoTags) {
    try
    {
        if (!encoName){
            return false;
        }
    
        let enco = await Encouragement.findOne({'name': encoName})
        if(!enco){
            enco = new Encouragement ({
                name: encoName,
                tags: encoTags 
            });
            await enco.save();
        }
        
        let allPersons = [];
        let persons = [];
        for(var i = 0; i < enco.tags.length; i++) {
            try {
                persons = await Person.find({ tags: { "$in" : [enco.tags[i]]} });
                for(var j = 0; j < persons.length; j++)
                {
                    await allPersons.push(persons[j]);
                }
                setTimeout(function() {
                }, 200 * persons.length);
            } catch (error) {
                console.log(error);
            }
        }

        enco.toVote = allPersons;
        enco.voted = [];
        enco.save();
    }
    catch(error){
        console.log(error);
        return false;
    }

    return true;
    
}

EncouragementSchema.statics.GetEncouragementByName = async function(encoName) {
    let enco = await Encouragement.findOne({'name': encoName});
    return enco;
}

EncouragementSchema.methods.RenewVoters = async function(voters) {
    
    if(voters == undefined){
        return false;
    }
    
    newPersons = [];

    for(var i = 0; i < voters.length; i++){
        if (voters[i].voteStatus == 0) {
           if(this.toVote.includes(voters[i].personObject)){
               newPersons.push(voters[i].personObject);
           }
        } else {
           this.toVote = toVote.filter(item => item !== voters[i].personObject);
           if(!this.voted.includes(voters[i].personObject)){
               voted.push(voters[i].personObject);
           }
        }
    }

    for(var i = 0; i < this.toVote.length; i++){
        if(newPersons.length > 9){
            break;
        } else {
            if(!newPersons.includes(this.toVote[i])){
                newPersons.push(this.toVote[i]);
            }
        }
    }

    return newPersons;
}

var Encouragement = mongoose.model('Encouragement', EncouragementSchema);

module.exports = {Encouragement};