package com.example.distributed_system.interfaces;

import com.example.distributed_system.dto.DistributorCreateDto;

public interface DistributorService {
    void deleteDistributor(Integer distributorID);

    void addDistributor(DistributorCreateDto distributor);
}
