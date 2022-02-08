package com.lapostal.security;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.Pays;
import com.lapostal.beans.PaysRepository;
import com.lapostal.beans.TypeArticle;
import com.lapostal.beans.TypeArticleRepository;
import com.lapostal.beans.TypeReception;
import com.lapostal.beans.TypeReceptionRepository;
import com.lapostal.security.entities.LoginForm;
import com.lapostal.security.entities.RoleName;
import com.lapostal.security.entities.RoleUser;
import com.lapostal.security.entities.User;
import com.lapostal.security.jwt.JwtProvider;
import com.lapostal.security.jwt.JwtResponse;
import com.lapostal.security.repository.RoleRepository;
import com.lapostal.security.repository.UserHistoryRepository;
import com.lapostal.security.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 360)
@RestController
@RequestMapping(value="authentification/api")
public class Authentification {

	  @Autowired
	  AuthenticationManager authenticationManager;
	 
	  @Autowired
	  UserRepository userRepository;
	 
	  @Autowired
	  RoleRepository roleRepository;
	  
	  @Autowired
	  UserHistoryRepository userHistoryRepository;
	 
	  @Autowired
	  PasswordEncoder encoder;
	 
	  @Autowired
	  JwtProvider jwtProvider;
	  
	  
	  @PostMapping("/signin")
	  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
	 
		  System.out.println("**************** je suis ciiiiii ************** ");
		  System.out.println(loginRequest.getUsername()+" *** "+loginRequest.getPassword());
	    Authentication authentication = authenticationManager.authenticate(
	        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
	 
	    SecurityContextHolder.getContext().setAuthentication(authentication);
	 
	    String jwt = jwtProvider.generateJwtToken(authentication);
	    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	 
	    return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	  }
	  
	  @RequestMapping(value="/profil", method= RequestMethod.GET)
	  public ResponseEntity<User> profil(Principal principal)
	  {
		  try {

			  Optional<User> user= userRepository.findByUsername(principal.getName());
			  return new ResponseEntity<User>(user.get(), HttpStatus.OK);
		  }catch(Exception ex)
		  {
			  ex.printStackTrace();
			  return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
		  }
	  }
	  
	  
		@RequestMapping(value="/update/password", method=RequestMethod.POST)
		public ResponseEntity<User> updatepassword(@RequestBody JSONObject json,  Principal principal)
		{
			try {
				System.out.println(json.get("ancienpassword").toString());			
				Optional<User> user= userRepository.findByUsername(principal.getName());
				
			    Authentication authentication = authenticationManager.authenticate(
			            new UsernamePasswordAuthenticationToken(user.get().getUsername(), json.get("ancienpassword").toString()));
				
				if(authentication == null)
				{
					return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
					
				}
				User user1 = userRepository.findByUsername(principal.getName()).get();
				user1.setPassword(encoder.encode(json.get("password").toString()));
				userRepository.save(user1);
				
				return new ResponseEntity<User>(user1, HttpStatus.OK);
			}catch(Exception ex )
			{
				ex.printStackTrace();
				return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
			}
		}
	  
	  @GetMapping("/first/save")
		public ResponseEntity<String> save_users()
		{
			try {
					RoleUser role_msc = new RoleUser();
					role_msc.setName(RoleName.ROLE_STAFF_RECETTE);
					roleRepository.save(role_msc);
					
					User user = new User(); 
					user.setName("RECETTE  ");
					user.setUsername("recettte");
					user.setEmail("recette.postal@laposte.dj");
					 encoder = new BCryptPasswordEncoder(12);
					
					user.setPassword(encoder.encode("123456"));
					Set<RoleUser> rolesevergreen = new HashSet<RoleUser>();
					rolesevergreen.add(role_msc);
					user.setRoles(rolesevergreen);
					
					userRepository.save(user);	
					
					
				
				return new ResponseEntity<String>(HttpStatus.OK);
				
			}catch(Exception ex)
			{
				ex.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
			}
		}
	  
	  	
	  	

		@Autowired
		private TypeArticleRepository typearticleRepository;
		
		  @GetMapping("/envoie/save")
			public ResponseEntity<String> envoitype()
			{
				try {
						
					User user = userRepository.findByUsername("Admin").get();
					
					TypeArticle article = typearticleRepository.findByName(" EMS - EE");
					
					article.setName("EMS - EE");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typearticleRepository.save(article);
					
						article = typearticleRepository.findByName("RECOMMANDE - RR");
					
					article.setName("RECOMMANDE - RR");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typearticleRepository.save(article);
					
					
					article = new TypeArticle();
					
					article.setName("COLIS - CP");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typearticleRepository.save(article);
					
					return new ResponseEntity<String>(HttpStatus.OK);
					
				}catch(Exception ex)
				{
					ex.printStackTrace();
					return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
				}
			}
		  
			@Autowired
			TypeReceptionRepository typeReceptionRepository;
			
		    @GetMapping("/reception/save")
			public ResponseEntity<String> receptiontype()
			{
				try {
						
					User user = userRepository.findByUsername("Admin").get();
					
					TypeReception article = new TypeReception();
					
					article.setName("COLIS - CP");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typeReceptionRepository.save(article);
					
					/*
					article = new TypeReception();
					
					article.setName("RECOMMANDE - RR");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typeReceptionRepository.save(article);
					
					
					article = new TypeReception();
					
					article.setName("COLIS - CP");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typeReceptionRepository.save(article);

					
					article = new TypeReception();
					
					article.setName("ORDINAIRE - N/A");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typeReceptionRepository.save(article);
					
					
					article = new TypeReception();
					
					article.setName("ESUUQ");
					article.setCreated(user);
					article.setUpdated(user);
					
					article.setCreatedat(LocalDateTime.now());
					article.setUpdatedat(LocalDateTime.now());
					
					typeReceptionRepository.save(article);
					*/
					return new ResponseEntity<String>(HttpStatus.OK);
					
				}catch(Exception ex)
				{
					ex.printStackTrace();
					return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
				}
			}
		  
		    @Autowired
		    PaysRepository paysRepository;
		    
		    @GetMapping("/pays/save")
			public ResponseEntity<String> pays()
			{
				try {
						
					User user = userRepository.findByUsername("Admin").get();
					
					Pays p = new Pays();
					
					List<String> list = new ArrayList<String>();

					List<String> list2 = new ArrayList<String>();
					
					list.add("Afghanistan");
					list.add("Albania");
					list.add("Algeria");
					list.add("American Samoa");
					list.add("Andorra");
					list.add("Angola");
					list.add("Anguilla");
					list.add("Antarctica");
					list.add("Antigua and Barbuda");
					list.add("Argentina");
					list.add("Armenia");
					list.add("Aruba");
					list.add("Australia");
					list.add("Austria");
					list.add("Azerbaijan");
					list.add("Bahamas");
					list.add("Bahrain");
					list.add("Bangladesh");
					list.add("Barbados");
					list.add("Belarus");
					list.add("Belgium");
					list.add("Belize");
					list.add("Benin");
					list.add("Bermuda");
					list.add("Bhutan");
					list.add("Bolivia");
					list.add("Bosnia and Herzegovina");
					list.add("Botswana");
					list.add("Bouvet Island");
					list.add("Brazil");
					list.add("British Indian Ocean Territory");
					list.add("Brunei Darussalam");
					list.add("Bulgaria");
					list.add("Burkina Faso");
					list.add("Burundi");
					list.add("Cambodia");
					list.add("Cameroon");
					list.add("Canada");
					list.add("Cape Verde");
					list.add("Cayman Islands");
					list.add("Central African Republic");
					list.add("Chad");
					list.add("Chile");
					list.add("China");
					list.add("Christmas Island");
					list.add("Cocos (Keeling) Islands");
					list.add("Colombia");
					list.add("Comoros");
					list.add("Congo");
					list.add("Congo, The Democratic Republic of the");
					list.add("Cook Islands");
					list.add("Costa Rica");
					list.add("Cote D Ivoire");
					list.add("Croatia");
					list.add("Cuba");
					list.add("Cyprus");
					list.add("Czech Republic");
					list.add("Denmark");
					list.add("Djibouti");
					list.add("Dominica");
					list.add("Dominican Republic");
					list.add("Ecuador");
					list.add("Egypt");
					list.add("El Salvador");
					list.add("Equatorial Guinea");
					list.add("Eritrea");
					list.add("Estonia");
					list.add("Ethiopia");
					list.add("Falkland Islands (Malvinas)");
					list.add("Faroe Islands");
					list.add("Fiji");
					list.add("Finland");
					list.add("France");
					list.add("French Guiana");
					list.add("French Polynesia");
					list.add("French Southern Territories");
					list.add("Gabon");
					list.add("Gambia");
					list.add("Georgia");
					list.add("Germany");
					list.add("Ghana");
					list.add("Gibraltar");
					list.add("Greece");
					list.add("Greenland");
					list.add("Grenada");
					list.add("Guadeloupe");
					list.add("Guam");
					list.add("Guatemala");
					list.add("Guernsey");
					list.add("Guinea");
					list.add("Guinea-Bissau");
					list.add("Guyana");
					list.add("Haiti");
					list.add("Heard Island and Mcdonald Islands");
					list.add("Holy See (Vatican City State)");
					list.add("Honduras");
					list.add("Hong Kong");
					list.add("Hungary");
					list.add("Iceland");
					list.add("India");
					list.add("Indonesia");
					list.add("Iran, Islamic Republic Of");
					list.add("Iraq");
					list.add("Ireland");
					list.add("Isle of Man");
					list.add("Israel");
					list.add("Italy");
					list.add("Jamaica");
					list.add("Japan");
					list.add("Jersey");
					list.add("Jordan");
					list.add("Kazakhstan");
					list.add("Kenya");
					list.add("Kiribati");
					list.add("Korea, Democratic People  Republic of");
					list.add("Korea, Republic of");
					list.add("Kuwait");
					list.add("Kyrgyzstan");
					list.add("Lao People S Democratic Republic");
					list.add("Latvia");
					list.add("Lebanon");
					list.add("Lesotho");
					list.add("Liberia");
					list.add("Libyan Arab Jamahiriya");
					list.add("Liechtenstein");
					list.add("Lithuania");
					list.add("Luxembourg");
					list.add("Macao");
					list.add("Macedonia, The Former Yugoslav Republic of");
					list.add("Madagascar");
					list.add("Malawi");
					list.add("Malaysia");
					list.add("Maldives");
					list.add("Mali");
					list.add("Malta");
					list.add("Marshall Islands");
					list.add("Martinique");
					list.add("Mauritania");
					list.add("Mauritius");
					list.add("Mayotte");
					list.add("Mexico");
					list.add("Micronesia, Federated States of");
					list.add("Moldova, Republic of");
					list.add("Monaco");
					list.add("Mongolia");
					list.add("Montserrat");
					list.add("Morocco");
					list.add("Mozambique");
					list.add("Myanmar");
					list.add("Namibia");
					list.add("Nauru");
					list.add("Nepal");
					list.add("Netherlands");
					list.add("Netherlands Antilles");
					list.add("New Caledonia");
					list.add("New Zealand");
					list.add("Nicaragua");
					list.add("Niger");
					list.add("Nigeria");
					list.add("Niue");
					list.add("Norfolk Island");
					list.add("Northern Mariana Islands");
					list.add("Norway");
					list.add("Oman");
					list.add("Pakistan");
					list.add("Palau");
					list.add("Palestinian Territory, Occupied");
					list.add("Panama");
					list.add("Papua New Guinea");
					list.add("Paraguay");
					list.add("Peru");
					list.add("Philippines");
					list.add("Pitcairn");
					list.add("Poland");
					list.add("Portugal");
					list.add("Puerto Rico");
					list.add("Qatar");
					list.add("Reunion");
					list.add("Romania");
					list.add("Russian Federation");
					list.add("RWANDA");
					list.add("Saint Helena");
					list.add("Saint Kitts and Nevis");
					list.add("Saint Lucia");
					list.add("Saint Pierre and Miquelon");
					list.add("Saint Vincent and the Grenadines");
					list.add("Samoa");
					list.add("San Marino");
					list.add("Sao Tome and Principe");
					list.add("Saudi Arabia");
					list.add("Senegal");
					list.add("Serbia and Montenegro");
					list.add("Seychelles");
					list.add("Sierra Leone");
					list.add("Singapore");
					list.add("Slovakia");
					list.add("Slovenia");
					list.add("Solomon Islands");
					list.add("Somalia");
					list.add("South Africa");
					list.add("South Georgia and the South Sandwich Islands");
					list.add("Spain");
					list.add("Sri Lanka");
					list.add("Sudan");
					list.add("Suriname");
					list.add("Svalbard and Jan Mayen");
					list.add("Swaziland");
					list.add("Sweden");
					list.add("Switzerland");
					list.add("Syrian Arab Republic");
					list.add("Taiwan, Province of China");
					list.add("Tajikistan");
					list.add("Tanzania, United Republic of");
					list.add("Thailand");
					list.add("Timor-Leste");
					list.add("Togo");
					list.add("Tokelau");
					list.add("Tonga");
					list.add("Trinidad and Tobago");
					list.add("Tunisia");
					list.add("Turkey");
					list.add("Turkmenistan");
					list.add("Turks and Caicos Islands");
					list.add("Tuvalu");
					list.add("Uganda");
					list.add("Ukraine");
					list.add("United Arab Emirates");
					list.add("United Kingdom");
					list.add("United States");
					list.add("United States Minor Outlying Islands");
					list.add("Uruguay");
					list.add("Uzbekistan");
					list.add("Vanuatu");
					list.add("Venezuela");
					list.add("Viet Nam");
					list.add("Virgin Islands, British");
					list.add("Virgin Islands, U.S.");
					list.add("Wallis and Futuna");
					list.add("Western Sahara");
					list.add("Yemen");
					list.add("Zambia");
					list.add("Zimbabwe");

					
					list2.add("AF");
					list2.add("AL");
					list2.add("DZ");
					list2.add("AS");
					list2.add("AD");
					list2.add("AO");
					list2.add("AI");
					list2.add("AQ");
					list2.add("AG");
					list2.add("AR");
					list2.add("AM");
					list2.add("AW");
					list2.add("AU");
					list2.add("AT");
					list2.add("AZ");
					list2.add("BS");
					list2.add("BH");
					list2.add("BD");
					list2.add("BB");
					list2.add("BY");
					list2.add("BE");
					list2.add("BZ");
					list2.add("BJ");
					list2.add("BM");
					list2.add("BT");
					list2.add("BO");
					list2.add("BA");
					list2.add("BW");
					list2.add("BV");
					list2.add("BR");
					list2.add("IO");
					list2.add("BN");
					list2.add("BG");
					list2.add("BF");
					list2.add("BI");
					list2.add("KH");
					list2.add("CM");
					list2.add("CA");
					list2.add("CV");
					list2.add("KY");
					list2.add("CF");
					list2.add("TD");
					list2.add("CL");
					list2.add("CN");
					list2.add("CX");
					list2.add("CC");
					list2.add("CO");
					list2.add("KM");
					list2.add("CG");
					list2.add("CD");
					list2.add("CK");
					list2.add("CR");
					list2.add("CI");
					list2.add("HR");
					list2.add("CU");
					list2.add("CY");
					list2.add("CZ");
					list2.add("DK");
					list2.add("DJ");
					list2.add("DM");
					list2.add("DO");
					list2.add("EC");
					list2.add("EG");
					list2.add("SV");
					list2.add("GQ");
					list2.add("ER");
					list2.add("EE");
					list2.add("ET");
					list2.add("FK");
					list2.add("FO");
					list2.add("FJ");
					list2.add("FI");
					list2.add("FR");
					list2.add("GF");
					list2.add("PF");
					list2.add("TF");
					list2.add("GA");
					list2.add("GM");
					list2.add("GE");
					list2.add("DE");
					list2.add("GH");
					list2.add("GI");
					list2.add("GR");
					list2.add("GL");
					list2.add("GD");
					list2.add("GP");
					list2.add("GU");
					list2.add("GT");
					list2.add("GG");
					list2.add("GN");
					list2.add("GW");
					list2.add("GY");
					list2.add("HT");
					list2.add("HM");
					list2.add("VA");
					list2.add("HN");
					list2.add("HK");
					list2.add("HU");
					list2.add("IS");
					list2.add("IN");
					list2.add("ID");
					list2.add("IR");
					list2.add("IQ");
					list2.add("IE");
					list2.add("IM");
					list2.add("IL");
					list2.add("IT");
					list2.add("JM");
					list2.add("JP");
					list2.add("JE");
					list2.add("JO");
					list2.add("KZ");
					list2.add("KE");
					list2.add("KI");
					list2.add("KP");
					list2.add("KR");
					list2.add("KW");
					list2.add("KG");
					list2.add("LA");
					list2.add("LV");
					list2.add("LB");
					list2.add("LS");
					list2.add("LR");
					list2.add("LY");
					list2.add("LI");
					list2.add("LT");
					list2.add("LU");
					list2.add("MO");
					list2.add("MK");
					list2.add("MG");
					list2.add("MW");
					list2.add("MY");
					list2.add("MV");
					list2.add("ML");
					list2.add("MT");
					list2.add("MH");
					list2.add("MQ");
					list2.add("MR");
					list2.add("MU");
					list2.add("YT");
					list2.add("MX");
					list2.add("FM");
					list2.add("MD");
					list2.add("MC");
					list2.add("MN");
					list2.add("MS");
					list2.add("MA");
					list2.add("MZ");
					list2.add("MM");
					list2.add("NA");
					list2.add("NR");
					list2.add("NP");
					list2.add("NL");
					list2.add("AN");
					list2.add("NC");
					list2.add("NZ");
					list2.add("NI");
					list2.add("NE");
					list2.add("NG");
					list2.add("NU");
					list2.add("NF");
					list2.add("MP");
					list2.add("NO");
					list2.add("OM");
					list2.add("PK");
					list2.add("PW");
					list2.add("PS");
					list2.add("PA");
					list2.add("PG");
					list2.add("PY");
					list2.add("PE");
					list2.add("PH");
					list2.add("PN");
					list2.add("PL");
					list2.add("PT");
					list2.add("PR");
					list2.add("QA");
					list2.add("RE");
					list2.add("RO");
					list2.add("RU");
					list2.add("RW");
					list2.add("SH");
					list2.add("KN");
					list2.add("LC");
					list2.add("PM");
					list2.add("VC");
					list2.add("WS");
					list2.add("SM");
					list2.add("ST");
					list2.add("SA");
					list2.add("SN");
					list2.add("CS");
					list2.add("SC");
					list2.add("SL");
					list2.add("SG");
					list2.add("SK");
					list2.add("SI");
					list2.add("SB");
					list2.add("SO");
					list2.add("ZA");
					list2.add("GS");
					list2.add("ES");
					list2.add("LK");
					list2.add("SD");
					list2.add("SR");
					list2.add("SJ");
					list2.add("SZ");
					list2.add("SE");
					list2.add("CH");
					list2.add("SY");
					list2.add("TW");
					list2.add("TJ");
					list2.add("TZ");
					list2.add("TH");
					list2.add("TL");
					list2.add("TG");
					list2.add("TK");
					list2.add("TO");
					list2.add("TT");
					list2.add("TN");
					list2.add("TR");
					list2.add("TM");
					list2.add("TC");
					list2.add("TV");
					list2.add("UG");
					list2.add("UA");
					list2.add("AE");
					list2.add("GB");
					list2.add("US");
					list2.add("UM");
					list2.add("UY");
					list2.add("UZ");
					list2.add("VU");
					list2.add("VE");
					list2.add("VN");
					list2.add("VG");
					list2.add("VI");
					list2.add("WF");
					list2.add("EH");
					list2.add("YE");
					list2.add("ZM");
					list2.add("ZW");
						
					int i=0;
					for(String a : list)
					{
						
						p = new Pays();
						p.setName(a);
						p.setCode(list2.get(i));
						
						paysRepository.save(p);
						
						i++;
						
					}

					
					
					
					
					return new ResponseEntity<String>(HttpStatus.OK);
					
				}catch(Exception ex)
				{
					ex.printStackTrace();
					return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
				}
			}
}
