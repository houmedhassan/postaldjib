package com.lapostal.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.lapostal.security.service.UserPrinciple;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;



@Component
public class JwtProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);
	
	private String hrPaieProviderSecret = "hrpaiePr@viderSecretKey";
	
	private int jwtExpiration=86400;
	
	
	   public String generateJwtToken(Authentication authentication) {
	        UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();
	 
	        return Jwts.builder()
	                    .setSubject((userPrincipal.getUsername()))
	                    .setIssuedAt(new Date())
	                    .setExpiration(new Date((new Date()).getTime() + jwtExpiration*1000))
	                    .signWith(SignatureAlgorithm.HS512, hrPaieProviderSecret)
	                    .compact();
	   }
	

	    public boolean validateJwtToken(String authToken) {
	         try {
	            Jwts.parser().setSigningKey(hrPaieProviderSecret).parseClaimsJws(authToken);
	            return true;
	        } catch (SignatureException e) {
	            logger.error("signature JWT est invalide-> Message: {} ", e);
	        } catch (MalformedJwtException e) {
	            logger.error("Invalid JWT token -> Message: {}", e);
	        } catch (ExpiredJwtException e) {
	            logger.error(" JWT token a expiré -> Message: {}", e);
	        } catch (UnsupportedJwtException e) {
	            logger.error("Unsupported JWT token -> Message: {}", e);
	        } catch (IllegalArgumentException e) {
	            logger.error("JWT claims string is empty -> Message: {}", e);
	        }
	        
	        return false;
	    }
	    
	    public String getUserNameFromJwtToken(String token) {
	        return Jwts.parser()
	                      .setSigningKey(hrPaieProviderSecret)
	                      .parseClaimsJws(token)
	                      .getBody().getSubject();
	    } 
	    
}
