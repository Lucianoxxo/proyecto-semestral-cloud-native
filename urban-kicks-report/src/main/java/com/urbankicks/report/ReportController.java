package com.urbankicks.report;
import java.util.Map;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/reports")
public class ReportController {
  @GetMapping("/summary")
  public Map<String,Object> summary(){ return Map.of("orders",0,"sales",0,"lowStockProducts",0); }
}