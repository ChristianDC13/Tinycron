# Tinycron
## The low-weight library to handle date objects in a human-readable way

### Install
To use this library you can install it via npm
```bash
npm install tinycron
```

### How to use it
To use this tool you must import the package in your code
``` javascript
import Tinycron from 'tinycron'
```
Or
``` javascript 
const tinycron = require('tinycron')
```
Now create an instance of Tinycron class.
``` javascript
const date = new Date(1998, 9, 19);
const tinycron = new Tinyscron(date);
```

After that, you can call the method ***toNow*** to show the time between the specificied date and the current date

``` javascript
const result = tinycron.toNow();
console.log(result); // 22 years ago
```

### Parameters
| name | type | description | required
|--|--|--|--|
| date | Date | The date you want to compare with | true
| lang | string | Language to show. Ex: en, es ... | false

### Methods
#### toNow
Return a string with the elapsed time between the base date and current date.
Ex: 
``` javascript
tinycron.toNow(); // A minute ago
```
#### to:
Receive a date object as a parameter and return a string with the elapsed time between the base date and specified date.
Ex:
``` javascript
tinycron.to(new Date()); // A minute ago
```
