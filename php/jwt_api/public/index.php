<?php
	use \Psr\Http\Message\ServerRequestInterface as Request;
	use \Psr\Http\Message\ResponseInterface as Response;	

	// required headers
	header("Access-Control-Allow-Origin: http://localhost:8100"); // only for test purposes
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Methods: POST,GET");
	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	 

	require '../vendor/autoload.php';
	require 'TokenGenerator.php';
	require 'ExampleMiddleware.php';

	$app = new \Slim\App;
	
	/**
		This endpoint is used to validate an authentication.
		In case of valid username/password, a jwt will be sent back. 
		
		url: http://localhost/jwt_api/public/index.php/api/login
	*/
	$app->get('/api/login',  function (Request $request, Response $response, array $args) {
		// Do some validation against database here
		// ...
		
		// Here, we assume that the user is valid -> send jwt now
		$tokenGenerator = new TokenGenerator($request, $response);
		return $tokenGenerator->generateToken();
	});

	/**
		From here on, every new endpoint will have a Middleware attached to it.
		This way, we can check if the communication contains a valid jwt.
		
		url: go to: http://localhost/jwt_api/public/index.php/api/page1/test
	*/	
	$app->get('/api/page1/{name}', function (Request $request, Response $response, array $args) {
		$response->getBody()->write(" You've entered page 1. ");
		return $response;	
	})->add(new ExampleMiddleware());
	
	$app->run();
?>
