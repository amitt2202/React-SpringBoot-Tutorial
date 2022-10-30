package com.fullstack.rest.webservice.restfulwebservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class HelloWorldController {
	
	@GetMapping ("/hello")
	public String sayHello() {
		return "Hello there";
	}
	
	@GetMapping ("/helloStudent")
	public Student sayHelloStudent() {
		return new Student("Amitt");
	}
	
	
	@GetMapping ("/helloStudent/{name}")
	public Student sayHelloStudentParam(@PathVariable String name) {
		//throw new RuntimeException("Error in Webservice");
		return new Student("Hey there "+name);
	}
	
}
