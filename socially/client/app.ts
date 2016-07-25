import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Mongo } from 'meteor/mongo';
import { Parties }   from '../collections/parties';


@Component({
  selector: 'app',
  templateUrl: '/client/app.html'
})
class Socially { 
  parties: Mongo.Cursor<Object>;
  constructor () {
    this.parties = Parties.find();
      {
        name: 'Awesome',
        description: 'Pretty cool', 
        location: 'My place'
      },
      {
        name: 'kinda cool',
        description: 'Really cool',
        location: 'Dude\'s place'
      }
    ]
  }
}

bootstrap(Socially);
