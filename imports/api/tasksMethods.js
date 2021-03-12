import {Meteor} from "meteor/meteor"
import {check } from 'meteor/check'
import {tasksCollection } from "./task"
import { Accounts } from 'meteor/accounts-base';
Meteor.methods({
    'tasks.insert'(text) {
      check(text, String);
   
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
   
      tasksCollection.insert({
        text,
        createdAt: new Date,
        userId: this.userId,
        isChecked:false
      })
    },
   
    'tasks.remove'(taskId) {
      check(taskId, String);
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
   
      tasksCollection.remove(taskId);
    },
   
    'tasks.setIsChecked'(taskId, isChecked) {
      check(taskId, String);
      check(isChecked, Boolean);
      
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
   
      tasksCollection.update(taskId, {
        $set: {
          isChecked
        }
      });
    }
  });

  Meteor.publish('tasks', function publishTasks() {
    return tasksCollection.find({ userId: this.userId });
  });

 
