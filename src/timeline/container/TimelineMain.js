import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList.js";
import { getNextTimeline } from "../../common/mockData";
import { useSelector } from "react-redux";

export default function TimelineMain() {
    const timeline = useSelector(state=>state.timeline.timelines);
//   const [, forceUpdate] = useReducer((v) => v + 1, 0);
//   useEffect(() => {
//     let prevTimelines = store.getState().timeline.timelines;
//     const unsubscribe = store.subscribe(() => {
//         const timelines = store.getState().timeline.timelines;
//         if(prevTimelines !== timelines){
//             forceUpdate();
//         }
//         prevTimelines = timelines;
//     });
//     return () => unsubscribe();
//   }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log("TimelineMain render");
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
