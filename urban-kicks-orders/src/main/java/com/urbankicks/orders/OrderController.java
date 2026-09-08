package com.urbankicks.orders;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/orders")
public class OrderController {
  private final AtomicLong ids = new AtomicLong(1000);
  private final List<Map<String,Object>> orders = new ArrayList<>();
  @GetMapping public List<Map<String,Object>> all(){ return orders; }
  @PostMapping public Map<String,Object> create(@RequestBody Map<String,Object> body){
    Map<String,Object> o = new LinkedHashMap<>(body);
    o.put("id", ids.incrementAndGet()); o.putIfAbsent("status","CREATED"); orders.add(o); return o;
  }
  @PatchMapping("/{id}/status") public Map<String,Object> status(@PathVariable long id,@RequestBody Map<String,String> body){
    return orders.stream().filter(o -> Objects.equals(o.get("id"),id)).findFirst().map(o->{o.put("status",body.get("status"));return o;}).orElseThrow();
  }
}