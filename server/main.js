import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { tasksCollection } from '/imports/api/task.js';
import '/imports/api/tasksMethods';

const insertTask = (taskText,user) => tasksCollection.insert({ text: taskText ,userId:user._id,createdAt:Date.now()});
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

});
