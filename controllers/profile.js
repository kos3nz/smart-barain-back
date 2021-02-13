const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch((err) => res.status(400).json('error getting user'));
};

const handleProfileUpdate = (req, res, db) => {
  // make sure we check the input from customers
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;

  db('users')
    .where({ id })
    .update({ name })
    .then((resp) => {
      if (resp) {
        res.json('Success');
      } else {
        res.status(400).json('Unable to update');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error updating user');
    });
  /*
  knex('books')
  .where('published_date', '<', 2000)
  .update({
    status: 'archived',
    thisKeyIsSkipped: undefined
  })
  Outputs:
    update `books` set `status` = 'archived' where `published_date` < 2000
  */
};

module.exports = {
  handleProfileGet,
  handleProfileUpdate,
};
