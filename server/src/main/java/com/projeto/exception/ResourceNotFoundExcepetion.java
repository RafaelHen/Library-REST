package com.projeto.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundExcepetion extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundExcepetion(String ex) {
		super(ex);
	}

	}
