const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://eba472:Home472%23@cluster0.2tyxl.mongodb.net/task_manager?retryWrites=true&w=majority'

// function testWithCallbacks(callback) {
//   console.log('\n--- testWithCallbacks ---');
//   const client = new MongoClient(url, { useNewUrlParser: true });
//   client.connect((connErr) => {
//     if (connErr) {
//       callback(connErr);
//       return;
//     }
//     console.log('Connected to MongoDB');

//     const db = client.db();
//     const collection = db.collection('employees');

//     const employee = { id: 1, name: 'A. Callback', age: 23 };
//     collection.insertOne(employee, (insertErr, result) => {
//       if (insertErr) {
//         client.close();
//         callback(insertErr);
//         return;
//       }
//       console.log('Result of insert:\n', result.insertedId);
//       collection.find({ _id: result.insertedId})
//         .toArray((findErr, docs) => {
//           if (findErr) {
//             client.close();
//             callback(findErr);
//             return;
//           }
//           console.log('Result of find:\n', docs);
//           client.close();
//           callback(findErr);
//         });
//     });
//   });
// }

async function testWithAsync() {
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db();
    const collection = await db.collection('employees');
    console.log(`collection`, await collection.find({}).toArray())
    // const employee = { id: 3, name: 'B. Async', age: 16 };
    // const result = await collection.insertOne(employee);
    // console.log('Result of insert:\n', result.insertedId);

    // const docs = await collection.find({ _id: result.insertedId })
    //   .toArray();
    // console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}
testWithAsync();


