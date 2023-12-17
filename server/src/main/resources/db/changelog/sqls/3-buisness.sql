CREATE or replace FUNCTION add_good_and_righteous_deals() RETURNS trigger AS
$add_good_and_righteous_deals$
declare
    diff int = new.year - old.year;
BEGIN
    if (diff < 1) then
        return null;
    end if;
    UPDATE human
    SET number_of_good_deeds=number_of_good_deeds + floor(random() * 10 + 1)::int * diff,
        number_of_righteous_deeds=number_of_righteous_deeds + floor(random() * 10 + 1)::int * diff
    FROM world
    WHERE human.real_world_id IS NOT NULL;
    return new;
END;
$add_good_and_righteous_deals$
    LANGUAGE plpgsql;
CREATE or replace TRIGGER update_year
    before UPDATE
    ON world
--     for each row
EXECUTE procedure add_good_and_righteous_deals();


CREATE or replace FUNCTION validate_connected_to_only_one_layer() RETURNS TRIGGER AS
$moveToDistributionLayer$
BEGIN
    if (old.real_world_id is null and new.real_world_id is not null) then
        if (new.distribution_layer_id is not null or new.hell_id is not null) then
            return null;
        end if;
        new.hell_id = null;
        new.distribution_layer_id = null;
        return new;
    end if;

    if (old.distribution_layer_id is null and new.distribution_layer_id is not null) then
        if (new.real_world_id is not null or new.hell_id is not null) then
            return null;
        end if;
        new.real_world_id = null;
        new.hell_id = null;
        return new;
    end if;

    if (old.hell_id is null and new.hell_id is not null) then
        if (new.real_world_id is not null or new.distribution_layer_id is not null) then
            return null;
        end if;
        new.real_world_id = null;
        new.distribution_layer_id = null;
        return new;
    end if;
    return new;
END;
$moveToDistributionLayer$ LANGUAGE plpgsql;

CREATE or replace TRIGGER from_world_to_distributor
    before update
    on human
    for each row
execute procedure validate_connected_to_only_one_layer();
