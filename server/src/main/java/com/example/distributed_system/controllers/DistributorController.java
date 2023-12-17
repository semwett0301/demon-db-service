package com.example.distributed_system.controllers;


import com.example.distributed_system.dto.DistributorCreateDto;
import com.example.distributed_system.interfaces.DistributorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/distributors")
public class DistributorController {
    @Autowired
    private DistributorService distributorService;

    @PostMapping("")
    public void addDistributor(@RequestBody DistributorCreateDto distributorDto) {
        distributorService.addDistributor(distributorDto);
    }

    @DeleteMapping("/{id}")
    public void deleteDistributor(@PathVariable Integer id) {
        distributorService.deleteDistributor(id);
    }

}
