import React ,{ Fragment, useState }from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Tasks } from './tasks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskForm } from './form';
import { LoginForm } from './loginForm';
const logout = () => Meteor.logout();

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
 
  <div className="d-flex flex-column  align-items-center h-100 ">
  <div className=" shadow-sm p-3 mb-1 bg-body rounded" >
   {
     user ? 
   <Fragment>
     <div className="d-flex justify-content-between"> 
     <span className="border-bottom" >
       Hello <span className="text-success"> {user.username} </span>
      </span>
      <span className="border-bottom" onClick={logout}  >logout 🚪</span>
     </div>
     
      
        <Tasks user={user}/>

        <TaskForm user={user}/>
    </Fragment> : 
    <Fragment>
      <LoginForm></LoginForm>
    </Fragment>
}
      
    </div>
    
  </div>
  )
 
  }
