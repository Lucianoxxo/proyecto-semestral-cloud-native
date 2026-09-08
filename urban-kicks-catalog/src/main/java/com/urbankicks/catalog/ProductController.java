package com.urbankicks.catalog;
import java.util.*;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/products")
public class ProductController {
  private final List<Map<String,Object>> products = new ArrayList<>(List.of(
    product(1,"Air Runner","Urban Lab",8,89990,10),
    product(2,"Street One","Kicks Co.",9,74990,7),
    product(3,"Night Court","Urban Lab",10,99990,5)
  ));
  private static Map<String,Object> product(int id,String name,String brand,int size,int price,int stock){
    return new LinkedHashMap<>(Map.of("id",id,"name",name,"brand",brand,"size",size,"price",price,"stock",stock));
  }
  @GetMapping public List<Map<String,Object>> all(){return products;}
  @GetMapping("/{id}") public Map<String,Object> one(@PathVariable int id){return products.stream().filter(p->p.get("id").equals(id)).findFirst().orElseThrow();}
}