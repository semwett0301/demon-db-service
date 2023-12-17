package com.example.distributed_system.interfaces;

import com.example.distributed_system.dto.WorldResp;

public interface WorldService {
    WorldResp findWorldById(Integer id);

    void genocideStart(Integer worldId);

    void amnestyStart(Integer worldID);

    void nextYear(Integer worldId);
}
