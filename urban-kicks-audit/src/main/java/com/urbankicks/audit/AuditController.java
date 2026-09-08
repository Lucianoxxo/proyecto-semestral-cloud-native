package com.urbankicks.audit;
import java.time.Instant;
import java.util.*;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/audit")
public class AuditController {
  private final List<Map<String,Object>> events = new ArrayList<>();
  @PostMapping public Map<String,Object> add(@RequestBody Map<String,Object> body){
    Map<String,Object> e = new LinkedHashMap<>(body); e.put("timestamp", Instant.now().toString()); events.add(e); return e;
  }
  @GetMapping public List<Map<String,Object>> all(){ return events; }
}