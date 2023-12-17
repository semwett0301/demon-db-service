package com.example.distributed_system.repository;

import com.example.distributed_system.entity.World;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WorldRepository extends JpaRepository<World, Integer> {
}