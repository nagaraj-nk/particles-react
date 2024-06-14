import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MasterPage } from "./MasterPage";
import { DetailsPage } from "./DetailsPage";

export function MasterDetailPage() {
  const [updateState, setUpdateState] = useState({
    state: {
      selectedId: 1,
    },
  });

  const refreshState = (key, value) => {
    updateState.state[key] = value;
    setUpdateState({
      state: updateState.state,
    });
  };

  useEffect(() => {
    refreshState("selectedId", updateState.state.selectedId);
  }, [updateState.state.selectedId]);

  const selectedItem = () => {
    var id = localStorage.getItem("selectedId");
    console.log("id", id);
    updateState.state.selectedId = id;
    refreshState("selectedId", updateState.state.selectedId);
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <MasterPage selectedItem={selectedItem} />
      </div>
      <div className="col-sm-4">
        <DetailsPage selectedId={updateState.state.selectedId} />
      </div>
    </div>
  );
}
