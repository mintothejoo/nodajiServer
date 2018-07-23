import { addUser, addItem } from '../helpers/firebase';

export const init = async (req, res, next) => {
  console.log('HIHI');
  await addUser({
    name: "minjoo",
    dadsf: "adsfdsf",
  });
  await addItem({
    name:"IMINSAJD",
    asdf: "ASDSAD",
  });
  return res.json({ message: 'hi' });
};
