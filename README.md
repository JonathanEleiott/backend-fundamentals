# Servers (computer that takes in requests from the internet)

- takes in a request from the frontend
- OPTIONAL: can make a request to a DB if necessary
- responds to the frontend

## HTTP Requests Type (fetch call) -> CRUD (Create, Read, Update, Delete)

- Create -> POST -> add data
- Read -> GET -> retrieves data
- Update -> PUT/PATCH -> modify data (completely update vs partially update)
- Delete -> DELETE -> Remove data

## OLD WAY

- if/else statements to manually check the method and endpoint
- very clogged
- no security built in (spinner if endpoint doesn't exist)

## Express

- very clean
- more security built in
- requires npm

## Routes

- app.get('path', (req, res) => { res.send('<h1>Welcome</h1>') })
- data -> /api/v1/endpoint
- HTML -> /endpoint

## Route Parameters

- used for getting specific items
- :variableName (separated by /)
- req.params -> object with kes and values

## Queries

- used generally in filters with optional parameters
- ?key=value&key2=value2 (separated by &)
- req.query -> object with keys and values

## NPM (Node Package Manager)

- npm init -y (creates packge.json)
- npm i express

## Server Notes

- app.listen takes in an optional second parameter (function that will run when the server starts)
- the function in a route will take in a request and a response
- request -> from the frontend (usually the browser)
- response -> what the server sends back to the frontend
- __dirname -> used to get the folder location of where the file is located
- res.sendFile -> send a file
  - make sure you send the correct HTML file (not a React one)
- app.use -> all request types
- no path written will accept all endpoints
- express.static -> checks whole folder for a file

## Notes

- node uses module.exports and require instead of export and import
- nodemon -> package that will auto run a file when something changes
