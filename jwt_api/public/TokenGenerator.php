<?php

use \Firebase\JWT\JWT;

class TokenGenerator
{
	var $request;
	var $response;
	
	function __construct($request, $response) {
		$this->request = $request;
		$this->response = $response;
    }
   
	function generateToken() {
		$key = "example_key";
		
		$issuer = "http://localhost";
		$audience = "http://localhost";
		$issued_at = time();
		$not_before = $issued_at;
		$expiration_time = time() + 24 * 60 * 60;		// 24 hours
		
		$payload = array(
			"user_id" => "123",
			"iss" => $issuer,
			"aud" => $audience,
			"iat" => $issued_at,
			"nbf" => $not_before,
			"exp" => $expiration_time
		);
		
		$jwt = JWT::encode($payload, $key, 'HS256');
		
		$data = array(
					"message" => "SUCCESS",
					"jwt" => $jwt
				);			
		return $this->response->withJson($data);
	}
}
?>
