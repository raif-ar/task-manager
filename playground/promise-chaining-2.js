require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("60cd9f641b0a791a34d2544f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount("60cdb6024464a55f509a0c9b")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
