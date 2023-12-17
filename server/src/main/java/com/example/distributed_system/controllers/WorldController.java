package com.example.distributed_system.controllers;

import com.example.distributed_system.dto.WorldResp;
import com.example.distributed_system.interfaces.WorldService;
import com.example.distributed_system.service.WorldServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/worlds")
public class WorldController {
    private final WorldService worldService;

    public WorldController(WorldServiceImpl worldService) {
        this.worldService = worldService;
    }

    @GetMapping("/{id}")
    public WorldResp getWorldById(@PathVariable Integer id) {
        return worldService.findWorldById(id);
    }

    @PostMapping("/{id}/genocide")
    public void genocideStart(@PathVariable Integer id) {
        worldService.genocideStart(id);
    }

    @PostMapping("/{id}/amnesty")
    public void amnestyStart(@PathVariable Integer id) {
        worldService.amnestyStart(id);
    }

    @PostMapping("/{id}/nextYear")
    public void nextYear(@PathVariable Integer id) {
        worldService.nextYear(id);
    }

}
