# env2js

env2js is a straight forward way to add config settings to your frontend application using environment variables. This comes in especially handy when you are setting up your services for docker using environment variables and want to use the same variables for your app config.


### Installing

npm install env2js

### Running

node env2js --in infile.js --out outfile.js

### Demo

```
export ENV=DEBUG
export DEBUG=1
```

create config.js

```javascript
var config = {
	debug: '{DEBUG}',
	env: '{ENV}'
};
```

run

```
node env2js.js --in config.js --out config.out.js
```

result

```javascript
var config = {
	debug: '1',
	env: 'DEBUG'
};
```
