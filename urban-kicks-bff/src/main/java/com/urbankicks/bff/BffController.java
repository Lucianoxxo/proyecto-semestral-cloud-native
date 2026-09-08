package com.urbankicks.bff;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class BffController {
  @GetMapping("/public/hello")
  public String hello() { return "Urban-Kicks API"; }
}