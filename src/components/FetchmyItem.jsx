// src/components/FetchmyItem.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchStatusSlice from '../store/fetchStatusSlice';
import { addInitialItems } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";




const FetchmyItem = () => {
  const fetchStatus = useSelector(store => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted())
    fetch("http://localhost:8080/items", { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(addInitialItems(items));
      })
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch failed", err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return (
    <></>
  );
};

export default FetchmyItem;
