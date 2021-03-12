import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { tasksCollection } from '/imports/api/task.js';

const insertTask = (taskText,user) => tasksCollection.insert({ text: taskText ,userId:user._id,createdAt:Date.now()});
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (tasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(taskText => insertTask(taskText, user));
  }
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
    const user = Accounts.findUserByUsername(SEED_USERNAME);
  }

});
