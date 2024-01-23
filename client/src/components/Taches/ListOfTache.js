import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettache } from "../../Redux/actions/Tacheaction";
import CardTache from "./CardTache";

function ListOfTache() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettache());
  }, []);
  const Taches = useSelector((state) => state.TacheReducer.Taches);
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Taches &&
          Taches.map((Tache) => <CardTache Tache={Tache} key={Tache._id} />)}
      </div>
    </div>
  );
}

export default ListOfTache;
