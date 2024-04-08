// OLD WAY
// const http = require('http');

// http.createServer((req, res) => {
//   if(req.method === 'GET' && req.url === '/') {
//     res.end(`
//       <h1>Welcome</h1>
//     `)
//   } else if (req.method === 'GET' && req.url ==='/puppies') {
//     res.end(`
//       <h1>Puppies!</h1>
//     `)
//   } else {
//     res.end(`
//       <h1>Page does not exist</h1>
//     `)
//   }
// }).listen(8080);

// Express
const express = require('express');
const app = express();

const bunnies = [
  { name: 'Floppy', color: 'brown'}, 
  { name: 'Thumper', color: 'gray'},
  { name: 'Rebecca', color: 'rebecca purple' }
]

const puppies = [
  { name: 'Spot', color: 'black'}, 
  { name: 'Dodger', color: 'dodgerblue'},
  { name: 'Buddy', color: 'black' }
]

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/people', (req, res) => {
  res.send('All of the people!!!!');
})

app.get('/api/v1/bunnies', (req, res) => {
  res.send(bunnies);
});

app.get('/api/v1/bunnies/:animalName/:animalColor', (req, res) => {
  console.log(`REQ PARAMS:`, req.params);
  const { animalName, animalColor } = req.params;

  const foundBunny = bunnies.find((bunny) => {
    return bunny.name === animalName && bunny.color === animalColor
  })

  res.send(foundBunny);
});

app.get('/api/v1/puppies', (req, res) => {
  let foundPuppies = puppies;

  console.log(`REQ QUERY`, req.query);
  if(req.query.color) {
    foundPuppies = puppies.filter((puppy) => {
      return puppy.color === req.query.color;
    })
  }

  res.send(foundPuppies);
})

// app.get('/api/v1/bunnies/:animalFood/:animalToy', (req, res) => {
//   res.send('another route');
// })

app.post('/animals', (req, res) => {
  // add new animal
})

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});