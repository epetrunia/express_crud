class User {
  constructor(values) {
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        this[key] = values[key];
      }
    }
  }

  update(values) {
    User.db.set(
      this.id,
      new User({
        ...this,
        ...values,
      })
    );
    return Promise.resolve(User.db.get(this.id));
  }
}

User.db = new Map();

User.createUser = function (value) {
  const newUser = new User({ ...value });
  newUser.id = this.db.size + 1;
  this.db.set(newUser.id, newUser);
  return Promise.resolve(newUser);
};

User.findById = function (id) {
  return Promise.resolve(this.db.get(Number(id)));
};

User.findAll = function () {
  return Promise.resolve([...this.db.values()]);
};

User.removeById = function (id) {
  return Promise.resolve(this.db.delete(Number(id)));
};

module.exports = User;
