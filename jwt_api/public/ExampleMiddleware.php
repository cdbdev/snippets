<?php
class ExampleMiddleware
{
    /**
     * Example middleware invokable class
     *
     * @param  \Psr\Http\Message\ServerRequestInterface $request  PSR7 request
     * @param  \Psr\Http\Message\ResponseInterface      $response PSR7 response
     * @param  callable                                 $next     Next middleware
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke($request, $response, $next)
    {
		try {
			// do some checks here to make sure the jwt is valid
			// examples on: https://packagist.org/packages/firebase/php-jwt
			$key = "example_key";
			$auth_header = $request->getHeader('Authorization');
			if( count($auth_header) !== 0) {
				$jwt = $request->getHeader('Authorization')[0];
				
				if(strlen($jwt) !== 0) {
					$decoded = JWT::decode($jwt, $key, array('HS256'));
					//$decoded_array = (array) $decoded;
					
					return $next($request, $response);
				} else {
					$response->getBody()->write('Token not found!');
				}
			} else {
				$response->getBody()->write('No Authorization Header found!');
			}
			
			return $response;
		} catch(Firebase\JWT\BeforeValidException $e) {
			$response->getBody()->write('BeforeValidException');
			return $response;
		} catch(Firebase\JWT\SignatureInvalidException $e) {
			$response->getBody()->write('SignatureInvalidException');
			return $response;
		} catch(\Firebase\JWT\ExpiredException $e){
			 $response->getBody()->write('ExpiredException');
			 return $response;
		}
    }
}
?>
