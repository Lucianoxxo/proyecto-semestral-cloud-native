package com.urbankicks.bff.config;

import java.util.*;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

@Component
public class JwtRoles implements Converter<Jwt, Collection<GrantedAuthority>> {

  @Override
  public Collection<GrantedAuthority> convert(Jwt jwt) {

    Object raw = jwt.getClaims().get("cognito:groups");

    if (!(raw instanceof Collection<?> groups)) {
      return List.of();
    }

    return groups.stream()
      .map(Object::toString)
      .map(g -> (GrantedAuthority) new SimpleGrantedAuthority("ROLE_" + g))
      .toList();
  }
}