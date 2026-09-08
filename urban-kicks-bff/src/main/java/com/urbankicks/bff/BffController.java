package com.urbankicks.bff;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BffController {

    @GetMapping("/public/hello")
    public String hello() {
        return "Urban-Kicks API";
    }

    @GetMapping("/private/hello")
    public String privateHello() {
        return "Usuario autenticado";
    }

    @GetMapping("/admin/hello")
    public String adminHello() {
        return "Acceso administrador";
    }
}