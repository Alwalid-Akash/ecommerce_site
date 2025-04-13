// src/components/FetchmyItem.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ItemAction } from '../store/itemSlice'; // match actual file name

const FetchmyItem = () => {
  const fetchStatus = useSelector(store => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(ItemAction.addInitialItems(items));
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
    <div>
      Fetch Done: {fetchStatus.fetchDone ? "Yes" : "No"} <br />
      Currently Fetching: {fetchStatus.currentlyFetching ? "Yes" : "No"}
    </div>
  );
};

export default FetchmyItem;
