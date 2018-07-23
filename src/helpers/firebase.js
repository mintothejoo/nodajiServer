import admin from '../config/firebase';

var db = admin.database().ref();
var User = db.child('Users');
var Item = db.child('Items');

export const addUser = data => {
  User.push().set({
    ...data,
  });
};

export const addItem = data => {
  Item.push().set({
    ...data,
  });
};
