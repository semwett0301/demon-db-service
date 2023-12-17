package com.example.distributed_system.service;

import com.example.distributed_system.dto.WorldResp;
import com.example.distributed_system.entity.*;
import com.example.distributed_system.interfaces.WorldService;
import com.example.distributed_system.repository.WorldRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

import static java.lang.Math.min;

@Service
@Transactional
public class WorldServiceImpl implements WorldService {

    private final WorldRepository worldRepository;

    private final ModelMapper modelMapper;
    private final DemonGeneratorServiceImpl demonGenerator;
    private final HumanGeneratorServiceImpl humanGenerator;

    public WorldServiceImpl(WorldRepository worldRepository, ModelMapper modelMapper, DemonGeneratorServiceImpl demonGenerator, HumanGeneratorServiceImpl humanGenerator) {
        this.worldRepository = worldRepository;
        this.modelMapper = modelMapper;
        this.demonGenerator = demonGenerator;
        this.humanGenerator = humanGenerator;
    }

    @Override
    public WorldResp findWorldById(Integer id) {
        World world = worldRepository.findById(id).orElseThrow();

        return modelMapper.map(world, WorldResp.class);
    }

    @Override
    public void genocideStart(Integer worldId) {
        World world = worldRepository.findById(worldId).orElseThrow();
        world.getRealWorld().getHumans().forEach(human -> {
            human.setDistributionLayer(world.getDistributionLayer());
            human.setRealWorld(null);
        });
        worldRepository.save(world);
    }

    @Override
    public void amnestyStart(Integer worldID) {
        World world = worldRepository.findById(worldID).orElseThrow();
        var hell = world.getHell();
        var realWorld = world.getRealWorld();
        int size = world.getHell().getDemons().size();
        hell.getDemons().forEach(Demon::clearRelations);
        hell.getDemons().clear();
        Set<Human> generate = humanGenerator.generate(size, world);
        realWorld.getHumans().addAll(generate);
        worldRepository.save(world);
    }

    @Override
    public void nextYear(Integer worldId) {
        World world = worldRepository.findById(worldId).orElseThrow();
        peopleRoutine(world);
        peopleToDistributionLayer(world);
        boolean gameOver = gameOverCheck(world);
        humanToDemon(world);
        demonToHuman(world);
        if (gameOver) evilDistribute(world);
        else distributeHuman(world);
        burnNewHuman(world);
        worldRepository.save(world);

    }

    private void evilDistribute(World world) {
        var hell = world.getHell();
        var distributionLayer = world.getDistributionLayer();
        for (Human human : distributionLayer.getHumans()) {
            human.setHell(hell);
            human.setDistributionLayer(null);
            if (!hell.getDemons().isEmpty()) {
                Demon demon1 = hell.getDemons().stream().min(Comparator.comparing(demon -> demon.getDemonHumen().size())).get();
                demon1.getDemonHumen().add(human);
            }
        }
    }

    private void peopleRoutine(World world) {
        world.getRealWorld().getHumans().forEach(human -> {
            human.setAge(human.getAge() + 1);
            human.setNumberOfGoodDeeds(human.getNumberOfGoodDeeds() + new Random().nextInt(10 + 1));
            human.setNumberOfRighteousDeeds(human.getNumberOfRighteousDeeds() + new Random().nextInt(10 + 1));
        });
    }

    private void peopleToDistributionLayer(World world) {
        RealWorld realWorld = world.getRealWorld();
        DistributionLayer distributionLayer = world.getDistributionLayer();
        realWorld.getHumans().forEach(human -> {
            if (human.hashCode() % 5 == 0 || human.getAge() > 60) {
                human.setRealWorld(null);
                human.setDistributionLayer(distributionLayer);
            }
        });
    }

    private boolean gameOverCheck(World world) {

        var distributionLayer = world.getDistributionLayer();
        var hell = world.getHell();

        var totalRequiredScreams = distributionLayer.getDistributionCommittees().stream().mapToInt(distributionCommittee -> distributionCommittee.getDistributors().stream().mapToInt(distributor -> distributor.getDistributorSkills().stream().mapToInt(DistributorSkill::getRequiredScreams).sum()).sum()).sum();
        distributionLayer.setScreamsCount(totalRequiredScreams);

        var hellProducedScreams = hell.getDemons().stream().
                mapToLong(Demon::getPower).sum();
        hell.setProducedScreams(hellProducedScreams);

        var totalScreams = distributionLayer.getScreamsCount() + hell.getProducedScreams();
        return totalScreams < totalRequiredScreams;
    }

    private void humanToDemon(World world) {
        var hell = world.getHell();

        hell.getHumans().forEach(human -> {
            long sum = human.getDemonHumen().stream().mapToLong(Demon::getPower).sum();
            human.setNumberOfRighteousDeeds((int) (human.getNumberOfRighteousDeeds() - sum - 5));
            if (human.getNumberOfRighteousDeeds() <= 0) {
                Demon generate = demonGenerator.generate(human, hell);
                hell.getDemons().add(generate);
                human.setDemonHumen(new HashSet<>());
            }
        });
        hell.getHumans().stream().filter(human -> human.getNumberOfRighteousDeeds() <= 0).collect(Collectors.toList()).forEach(hell.getHumans()::remove);
    }

    private void demonToHuman(World world) {
        var hell = world.getHell();
        var realWorld = world.getRealWorld();
        var hellDemons = hell.getDemons();

        hellDemons.forEach(demon -> demon.setAgesLeftInHell(demon.getAgesLeftInHell() - 1));
        List<Demon> demonsToHumanList = hellDemons.stream().filter(demon -> demon.getAgesLeftInHell() <= 0).collect(Collectors.toList());
        demonsToHumanList.forEach(Demon::clearRelations);
        demonsToHumanList.forEach(hellDemons::remove);
        Set<Human> newPeople = humanGenerator.generate(demonsToHumanList.size(), world);
        realWorld.getHumans().addAll(newPeople);
    }

    private void distributeHuman(World world) {
        var hell = world.getHell();
        var distributionLayer = world.getDistributionLayer();
        var realWorld = world.getRealWorld();

        for (Human human : distributionLayer.getHumans()) {
            human.setDistributionLayer(null);
            if (human.getNumberOfGoodDeeds() > human.getNumberOfRighteousDeeds()) {
                human.setRealWorld(realWorld);
            } else {
                human.setHell(hell);
                if (!hell.getDemons().isEmpty()) {
                    Demon demon1 = hell.getDemons().stream().min(Comparator.comparing(demon -> demon.getDemonHumen().size())).get();
                    demon1.getDemonHumen().add(human);
                }
            }
        }
    }

    private void burnNewHuman(World world) {
        var realWorld = world.getRealWorld();
        int femaleCount = 0, maleCount = 0;
        int ageOfConsent = 18;
        for (Human human : realWorld.getHumans()) {
            if (human.getAge() > ageOfConsent) {
                if (human.getSex() == Sex.FEMALE) {
                    femaleCount++;
                }
                if (human.getSex() == Sex.MALE) {
                    maleCount++;
                }
            }
        }
        Set<Human> burnedPeople = humanGenerator.generate(min(femaleCount, maleCount), world);
        realWorld.getHumans().addAll(burnedPeople);
    }
}
