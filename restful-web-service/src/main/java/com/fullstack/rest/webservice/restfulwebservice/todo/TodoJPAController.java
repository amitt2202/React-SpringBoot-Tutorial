package com.fullstack.rest.webservice.restfulwebservice.todo;

import java.net.URI;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class TodoJPAController {
	@Autowired
	private TodoHardcodedService todoService;
	@Autowired
	private TodoJPARepository jpaRepo;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username ) {
	//	Thread.sleep(5000);
		System.out.println("Trying to getAll Todo :: "+username+ " NO of records "+jpaRepo.findByUsername(username).size());
		//jpaRepo.save(new Todo(new Long(10001),"aranjan","Learn React", new Date(),false));
		return jpaRepo.findByUsername(username);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		System.out.println("Trying to delete a todo!");
		jpaRepo.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	
@GetMapping("/jpa/users/{username}/todos/{id}")
	
	public Todo getTodoyId(@PathVariable String username, @PathVariable long id){
		return jpaRepo.findById(id).get();
	}

@PutMapping("/jpa/users/{username}/todos/{id}")

public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo td){
	td.setUsername(username);
	Todo retTodo = jpaRepo.save(td);
	return new ResponseEntity<Todo>(retTodo, HttpStatus.OK);
}

@PostMapping("/jpa/users/{username}/todos/")

public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo td){
	td.setUsername(username);
	Todo retTodo = jpaRepo.save(td);
	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(retTodo.getId()).toUri();
	return ResponseEntity.created(uri).build();
}

}
