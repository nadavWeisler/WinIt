const { Promise } = require ('es6-promise');
const {Person} = require('./../models/person');
const {mongoose} = require('./../DB/mongoose');
const {Encouragement} = require('./../models/encouragement');
const {EncoPerson} = require('./../models/encoPerson');
const {User} = require('./../models/user');
const _ = require('lodash');

const ENCO_MAX_PERSON = 10;

var setEncoPersonsByTags = function(enco) {
    enco.tags.forEach(element => {
        console.log(element);
        Person.find({
            tags: [element] 
        }).then((persons) => {
            persons.forEach(PersoneElement => {
                var newEncoPerson = new EncoPerson({
                encoId: enco.name,
                personId: PersoneElement.personId,
                child: PersoneElement
                });
                newEncoPerson.save();
            });
        }); 
    });
};

var getPersonIdArrayFromPersons = function(persons) {
    var idLst = [];
    for(var i = 0; i < persons.length; i++){
        idLst.push(persons[i].personId);
        console.log(idLst);
        if(i == persons.length - 1){
            return idLst;
        }
    }
};

var getNewVoters = function(persons, encoName) {
    var newVoters = []
    for(var i = 0; i < persons.length; i++){
        if (persons[i].status == 0) {
            newVoters.push(persons[i]);
        }
        if(i == persons.length - 1) {
            if(newVoters.length == ENCO_MAX_PERSON) {
                return newVoters;
            } else {
                var idLst = getPersonIdArrayFromPersons(newVoters);
                EncoPerson.find({
                    'status': 0,
                    'encoId': encoName
                }).then((allVoters) => {
                    if(!allVoters){
                        return newVoters;
                    } else {
                        for(var i = 0; i< allVoters.length; i++){
                            if(idLst.indexOf(allVoters[i].personId) == -1){
                                newVoters.push(allVoters[i]);
                            }
                            if(newVoters.length == ENCO_MAX_PERSON){
                                return newVoters;
                            };
                        };
                    }; 
                });
            };
        };
    }
    return newVoters;  
};


//Encouragement
module.exports = function(app) {
    //GET - /encouragements
    app.get('/encouragements', (req, res) => {
        Encouragement.find().then((encos) => {
        res.status(200).send({encos});
        }, (e) => {
        res.status(400).send(e);
        });
    });

    app.get('/encoPersons', (req, res) => {
        EncoPerson.find().then((encos) => {
        res.status(200).send({encos});
        }, (e) => {
        res.status(400).send(e);
        });
    });
  
    app.post('/encouragements', (req, res) => {
        var body = _.pick(req.body, ['name', 'tags']);
        var enco = new Encouragement(body);
        enco.save();
        res.send(enco);
    });
  
    app.get('/encouragements/start/:encoName', (req, res) => {
        var encoName = req.params.encoName;
        Encouragement.findOne({'name': encoName}).then((enco) => {
            enco.methdods.FillVotersByTags().then(() => {
                res.status(200).send("c");
            });
        }).then(() => { 
        
        });
    });

    app.post('/encouragements/renew', (req, res) => {
        var persons = req.body.persons;
        var encoName = req.body.encoName;
        console.log(getNewVoters(persons, encoName));
        var newList = getNewVoters(persons, encoName);
        setTimeout(function() {
            console.log(newList);
            res.send(newList);
        }, 200 * persons.length);
        
    });
};