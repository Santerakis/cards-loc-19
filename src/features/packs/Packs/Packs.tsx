import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/packs/packs.slice";
import s from "./styles.module.css";
import { PackType } from "features/packs/packs.api";
import {filteredByNamePacksSelector, selectCardPacks} from "../packsSelectors";
import {useActions} from "../../../common/hooks/useActions";

export const Packs = () => {
  const cardPacks = useAppSelector(selectCardPacks);
  // const cardPacks = useAppSelector(filteredByNamePacksSelector);
  const { fetchPacks, removePack, createPack, updatePack } = useActions(packsThunks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(packsThunks.fetchPacks());
    fetchPacks()
  }, []);

  const addPackHandler = () => {
    const newPack = {
      name: "🦁" + Math.random(),
    };
    // dispatch(packsThunks.createPack(newPack));
    createPack(newPack)
  };

  const removePackHandler = (id: string) => {
    // dispatch(packsThunks.removePack(id));
    removePack(id)
  };

  const updatePackHandler = (pack: PackType) => {
    const newName = "🦖" + Math.random();
    // dispatch(packsThunks.updatePack({ ...pack, name: newName }));
    updatePack({ ...pack, name: newName })
  };

  return (
    <div>
      <h1>Packs</h1>
      <button onClick={addPackHandler}>add pack</button>
      <div>
        {cardPacks.map((p) => {
          return (
            <div key={p._id} className={s.container}>
              <p>
                <b>pack name</b>: {p.name}
              </p>
              <p>
                <b>cardsCount</b>: {p.cardsCount}
              </p>
              <p>
                <b>user name</b>: {p.user_name}
              </p>
              <button onClick={() => removePackHandler(p._id)}>remove</button>
              <button onClick={() => updatePackHandler(p)}>update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
