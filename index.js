'use strict';

const envSomeVariable = process.env.SOME_ENV_VARIABLE;



module.exports.handler = (event, context, callback) => {
	
	console.log('Received event:', JSON.stringify(event));
	console.log('Received context:', JSON.stringify(context));
	
	console.log('SOME_ENV_VARIABLE: ', envSomeVariable);
	
	
	return callback(null, {"myMessageTest" : "Yes, worked","some_env_variable" : envSomeVariable});

};

