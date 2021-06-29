package com.mili.poc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mili.poc.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
	public Employee findByEmailId(String email);
	public Employee findByEmailIdAndPassword(String email,String password);
}
