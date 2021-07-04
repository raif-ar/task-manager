require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("60cd9e989719d04214864b40", { age: 12 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 12 });
//   })
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("60cdb6506c74a06f88ae4f48", 19)
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
