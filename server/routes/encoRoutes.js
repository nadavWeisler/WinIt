const { Promise } = require ('es6-promise');
const {Person} = require('./../models/person');
const {mongoose} = require('./../DB/mongoose');
const {Encouragement} = require('./../models/encouragement');
const {EncoPerson} = require('./../models/encoPerson');
const {User} = require('./../models/user');
const _ = require('lodash');

//Encouragement
module.exports = function(app) {
    //GET - /encouragements
    app.get('/encouragements', (req, res) => {
            Encouragement.find().then(
                (encos) => {
                    res.status(200).send({encos});
                    }, 
                (e) => {
                    res.status(400).send(e);
                    });
            }
    );

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
  
    app.post('/encouragements/start', (req, res) => {
        let encoName = req.body.name;
        let encoTags = req.body.tags;
        Encouragement.CreateEncouragement(encoName).then((boolean) => {
            if(boolean){
                console.log(boolean);
                res.status(200).send("SAVED");
            } else {
                res.status(400).send("crashed");
            }
        });
    });

    app.post('/encouragements/renew', async (req, res) => {
        const persons = req.body.persons;
        const encoName = req.body.encoName;

        const enco = await Encouragement.GetEncouragementByName(encoName);
        let newVoters = await enco.RenewVoters(persons);
        setTimeout(function() {
            res.send(newVoters);
        }, 250);
        
        });
};