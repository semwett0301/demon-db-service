package com.example.distributed_system.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "demon")
public class Demon {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "demon_id_seq")
    @SequenceGenerator(name = "demon_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "power", nullable = false)
    private Long power;

    @ManyToOne()
    @JoinColumn(name = "hell_id")
    private Hell hell;

    @Column(name = "ages_left_in_hell")
    private Integer agesLeftInHell;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(name = "demon_human", joinColumns = @JoinColumn(name = "demon_id"), inverseJoinColumns = @JoinColumn(name = "human_id"))
    private Set<Human> demonHumen = new LinkedHashSet<>();

    public Demon(Integer agesLeftInHell, Long power, Hell hell) {
        this.agesLeftInHell = agesLeftInHell;
        this.hell = hell;
        this.power = power;
    }

    public Demon(Integer id, Hell hell, Integer agesLeftInHell, Set<Human> demonHumen) {
        this.id = id;
        this.hell = hell;
        this.agesLeftInHell = agesLeftInHell;
        this.demonHumen = demonHumen;
    }

    public void clearRelations() {
        setDemonHumen(new HashSet<>());
        setDemonHumen(new HashSet<>());
    }
}