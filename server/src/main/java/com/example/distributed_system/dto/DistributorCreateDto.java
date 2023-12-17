package com.example.distributed_system.dto;

import com.example.distributed_system.entity.Distributor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DistributorCreateDto extends Distributor {
    private Integer worldId;
}
