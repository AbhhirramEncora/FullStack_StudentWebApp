package com.test.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.model.Student;
import com.test.repository.StudentRepository;


@Service 
public class StudentService {
	
	@Autowired
	private StudentRepository repository;
	
	public List<Student> getAllStudents(){
		return repository.findAll();
	}
	
	public Student saveStudent(Student student) {
	    return repository.save(student);
	}

	
	public Student updateStudent(Student student) {
	    // Check if student with given ID exists
	    Optional<Student> existing = repository.findById(student.getId());

	    if (existing.isPresent()) {
	        // Copy updated fields
	        Student old = existing.get();
	        old.setName(student.getName());
	        old.setEmail(student.getEmail());
//	        old.setAge(student.getAge());
	        // add any other fields...

	        return repository.save(old);   // save updated record
	    } else {
	        throw new RuntimeException("Student with ID " + student.getId() + " not found");
	    }
	}

	
	public void deleteStudent(int id) {
		repository.deleteById(id);
	}
}
