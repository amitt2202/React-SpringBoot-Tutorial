package com.fullstack.rest.webservice.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
private static List<Todo> todoList = new ArrayList<Todo>();
private static long counter = 1;

static {
	todoList.add(new Todo(counter++,"aranjan", "Learn React", new Date(), false));
	todoList.add(new Todo(counter++,"aranjan", "Learn SpringBoot", new Date(), true));
	todoList.add(new Todo(counter++,"aranjan", "Learn JPA", new Date(), true));
	todoList.add(new Todo(counter++,"aranjan", "Learn Docker", new Date(), false));
	todoList.add(new Todo(counter++,"aranjan", "Learn JOT", new Date(), false));
}

public List<Todo> findAllTodo(){
	return todoList;
}

public Todo deleteById(long id) {
	Todo deleteThis = findById(id);
	if(deleteThis !=null) {
		todoList.remove(deleteThis);
		return deleteThis;
	}else {
		return null;
	}
}

public Todo findById(long id) {

	for(Todo t : todoList) {
		if(t.getId() == id ) {
			return t;
		}
	}
	return null;
}

public Todo saveTodo(Todo td) {
	if(td.getId() == -1 || td.getId() == 0) {
		td.setId(counter++);
		todoList.add(td);
		return td;
	}else {
		deleteById(td.getId());
		todoList.add(td);
		return td;
	}
}
}
