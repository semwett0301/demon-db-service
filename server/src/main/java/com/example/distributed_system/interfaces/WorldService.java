package com.example.distributed_system.interfaces;

import com.example.distributed_system.dto.WorldResp;

public interface WorldService {
    // Поиск мира по id
    WorldResp findWorldById(Integer id);

    // Запустить геноцид
    void genocideStart(Integer worldId);

    // Запустить амнистирование
    void amnestyStart(Integer worldID);

    // Перейти на следующий год
    void nextYear(Integer worldId);
}
