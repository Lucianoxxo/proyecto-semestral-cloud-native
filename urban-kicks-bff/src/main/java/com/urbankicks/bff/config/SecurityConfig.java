package com.urbankicks.bff.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

  @Bean
  SecurityFilterChain security(HttpSecurity http, JwtRoles jwtRoles) throws Exception {

    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
    converter.setJwtGrantedAuthoritiesConverter(jwtRoles);

    return http
      .csrf(csrf -> csrf.disable())
      .authorizeHttpRequests(a -> a
        .requestMatchers("/actuator/health", "/api/public/**").permitAll()
        .requestMatchers("/api/admin/**").hasAnyAuthority("ROLE_admin", "ROLE_operator")
        .requestMatchers("/api/**").authenticated()
        .anyRequest().permitAll()
      )
      .oauth2ResourceServer(o -> o
        .jwt(j -> j.jwtAuthenticationConverter(converter))
      )
      .build();
  }
}