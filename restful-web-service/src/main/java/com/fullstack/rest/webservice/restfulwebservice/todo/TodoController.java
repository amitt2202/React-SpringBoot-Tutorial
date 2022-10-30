package com.fullstack.rest.webservice.restfulwebservice.todo;

import java.net.URI;
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
public class TodoController {
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username ) {
	//	Thread.sleep(5000);
		return todoService.findAllTodo();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		System.out.println("Trying to delete a todo!");
		Todo td = todoService.deleteById(id);
		if(td !=null) {
			return ResponseEntity.noContent().build();
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
@GetMapping("/users/{username}/todos/{id}")
	
	public Todo getTodoyId(@PathVariable String username, @PathVariable long id){
		Todo td = todoService.findById(id);
		if(td !=null) {
			return td;
		}else {
			return null;
		}
	}

@PutMapping("/users/{username}/todos/{id}")

public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo td){
	Todo retTodo = todoService.saveTodo(td);
	return new ResponseEntity<Todo>(retTodo, HttpStatus.OK);
}

@PostMapping("/users/{username}/todos/")

public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo td){
	Todo retTodo = todoService.saveTodo(td);
	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(retTodo.getId()).toUri();
	return ResponseEntity.created(uri).build();
}

}
