const {Person} = require('./../models/person');
const {mongoose} = require('./../DB/mongoose');

module.exports = function(app) {
  //POST - /persons
  app.post('/persons',
    (req, res) => {
    var person = new Person({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      personId: req.body.personId,
      ifActivist: req.body.ifActivist,
      birthDay: req.body.birthDay,
      tags: req.body.tags,
      phoneNumber: req.body.phoneNumber
     });
    Person.find({"personId": person.personId}).then((docs) => {
      if (docs.length == 0) {
        person.save().then((doc) => {
          res.send(doc);
        }, (e) => {
          res.status(400).send(e);
        }); }
      else {
        res.send('Person already exist');}
      });
   });

  //GET - /persons
  app.get('/persons',
    (req, res) => {
    Person.find().then((persons) => {
      res.send({persons});
    }, (e) => {
      res.status(400).send(e);
    });
   });

  //GET - /persons/:personId
  app.get('/persons/:personId',
    (req, res) => {

    var personId = req.params.personId;

    Person.findOne({'personId': personId}).then((person) => {
      if (!person) {
        console.log('person does not exist');
        return res.status(404).send();
      }
      console.log(person);
      res.send({person});
    }).catch((e) => {
      console.log(e);
      res.status(400).send();
    });
   });

  //DELETE - /persons/:personId
  app.delete('/persons/:personId',
    (req, res) => {

    var personId = req.params.personId;
    Person.findOneAndRemove({
      "personId": personId
    }).then(
      (person) => {
        if (!person) {
          return res.status(404).send();
        }

        res.send({person});
      }).catch(
        (e) => {
        res.status(400).send();
      });
   });
};