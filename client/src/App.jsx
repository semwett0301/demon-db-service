import React, {useLayoutEffect, useState} from 'react';
import classes from './App.module.css'
import {request} from "./api/request";
import CustomHeader from "./components/CustomHeader/CustomHeader";
import WorldInfo from "./components/WorldInfo/WorldInfo";
import {Context} from "./context/context";
import DistributionLayer from "./components/DistributionLayer/DistributionLayer";

function App() {
    const [worldId] = useState(1)
    const [world, setWorld] = useState({})

    const getWorld = async (id) => {
        await request.getWorld(id).then(r => setWorld(r.data))
    }

    useLayoutEffect(() => {
        getWorld(worldId).catch(e => console.log(e))
    }, [])


    return (
        <Context.Provider value={
            {
                getCurrentWorld: () => getWorld(worldId),
                worldId
            }
        }>
            <div className={classes.App}>
                <CustomHeader worldName={world.name} negative={world?.distributionLayer?.screamsCount}
                              positive={world?.hell?.producedScreams}
                              requestFunction={async () => {
                                  await request.nextYear(worldId).then(() => getWorld(worldId))
                                  console.log("Next Year")
                                  console.log(world)
                              }}/>
                <DistributionLayer committees={world?.distributionLayer?.distributionCommittees} humansAmount={world?.distributionLayer?.humans?.length}/>
                <WorldInfo hell={world.hell || {}} real={world.realWorld || {}}/>
            </div>
        </Context.Provider>
    );
}

export default App;
