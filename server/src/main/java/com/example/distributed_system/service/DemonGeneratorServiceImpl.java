package com.example.distributed_system.service;

import com.example.distributed_system.entity.Demon;
import com.example.distributed_system.entity.Hell;
import com.example.distributed_system.entity.Human;
import com.example.distributed_system.interfaces.DemonGeneratorService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DemonGeneratorServiceImpl implements DemonGeneratorService {

    private final Random random = new Random();

    @Override
    public Demon generate(Human human,  Hell hell) {
        var agesLeft = 100 - human.getNumberOfGoodDeeds();
        return new Demon(agesLeft, (long) (random.nextInt(401) + 100), hell);
    }
}
