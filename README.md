# Tarjoman-API

## Usage from Tarjoman API

Request

`GET https://tarjoman-tarjoman.fandogh.cloud/syncLan`

| Name | Type | Description                                                                     |
|------|------|---------------------------------------------------------------------------------|
|parameter| String |Required, when you want search command like class or function               |
|lang| Integer |Each programming language uses an ID desired results from the database           |

Now you must create Axios module in your repository 

but before you need to install following packages:

`npm install express --save `

`npm install nodemon --save `

`npm install mysql --save `

`npm install bodyparser --save `

The create folder API and file as TarjomanAPI.js

create code module:

```js
import axios from 'axios';
// Tarjoman module
export default axios.create({
    baseURL:'https://tarjoman-tarjoman.fandogh.cloud/'
});
```
