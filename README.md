<h1 align="center">Welcome to chess-eco-memorizer 👋</h1>

<p>
  <a href="https://github.com/majjikishore007/chess-eco-memorizer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/majjikishore007/chess-eco-memorizer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/majjikishore007/chess-eco-memorizer/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/majjikishore007/chess-eco-memorizer" />
  </a>
</p>

## Description
- The Encyclopaedia of Chess Openings (ECO) is a reference work describing the state of opening theory in chess, originally published in five volumes from 1974 to 1979 by the Serbian company Šahovski Informator (Chess Informant). It is currently undergoing its fifth edition. ECO may also refer to the opening classification system used by the encyclopedia.  
- This server is a memorizer of the eco codes and opening strategies 

## Endpoints

<table>
  <tr>
    <th>Endpoints</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>/</td>
    <td>Fetches  all the data along the code and opening strategy </td>
  </tr>
   <tr>
    <td>/:code</td>
    <td>Fetches the opening strategy with respect to the code </td>
  </tr>
  </tr>
</table>


## Tech-stack
- Nodejs
- Expressjs
- MongoDB



## Install
- Make sure that you have mongodb installed
- Node version >=12

```sh
npm install
```

## Usage
- Updated the .env file with 
```
PORT= (specify the port number)
DB_URL=(specify the database url)
```
- To make the server up and running run this command

```sh
npm run dev
```

## Run tests

```sh
npm run test
```

## Author

👤 **majjikishore**

* Github: [@majjikishore007](https://github.com/majjikishore007)

## Show your support

Give a ⭐️ if this project helped you!
