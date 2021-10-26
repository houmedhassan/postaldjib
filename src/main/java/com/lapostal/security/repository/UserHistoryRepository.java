package com.lapostal.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lapostal.security.entities.UserHistory;


public interface UserHistoryRepository extends JpaRepository<UserHistory, Integer>{

}
