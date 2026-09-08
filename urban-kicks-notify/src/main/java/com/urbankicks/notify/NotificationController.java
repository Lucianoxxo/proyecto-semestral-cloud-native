package com.urbankicks.notify;
import java.util.*;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/notifications")
public class NotificationController {
  @PostMapping public Map<String,Object> send(@RequestBody Map<String,Object> body){
    return Map.of("accepted",true,"message","Notificación registrada","payload",body);
  }
}