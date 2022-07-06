import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { actions as timeActions } from "../state";
import TimelineList from "../component/TimelineList.js";
import { getNextTimeline } from "../../common/mockData";
import { useDispatch, useSelector } from "react-redux";

export default function TimelineMain() {
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
  const dispatch = useDispatch();
  const timelines = useSelector(state => state.timeline.timelines);
  const isLoading = useSelector(state => state.timeline.isLoading);
  function onLike(e){
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    dispatch(timeActions.requestLike(timeline));
  }
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(timeActions.addTimeline(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>loading...</p>}
    </div>
  );
}
