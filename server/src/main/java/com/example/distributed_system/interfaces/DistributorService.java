package com.example.distributed_system.interfaces;

import com.example.distributed_system.dto.DistributorCreateDto;

public interface DistributorService {
    // Удалить дистрибьютора
    void deleteDistributor(Integer distributorID);

    // Добавить дистрибьютора
    void addDistributor(DistributorCreateDto distributor);
}
