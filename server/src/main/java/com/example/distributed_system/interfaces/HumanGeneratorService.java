package com.example.distributed_system.interfaces;

import com.example.distributed_system.entity.Human;
import com.example.distributed_system.entity.World;

import java.util.Set;

public interface HumanGeneratorService {
    // Генерирование людей
    Set<Human> generate(int count, World world);
}
