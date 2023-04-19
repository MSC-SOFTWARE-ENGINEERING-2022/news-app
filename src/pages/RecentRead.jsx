import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

const RecentRead = ({readItem}) => {
    const [localItems, setLocaItems] = useState([]);

    const itemObj = (itm) => ({
        key: itm._id,
        id: uuid(),
        timestamp: Date.now(),
        item: itm
    })

    useEffect(() => {
        // console.log('localstorage', localStorage);
        // console.log('readItem', readItem);
        if(!localStorage.readNewsItems && readItem){
            localStorage.setItem('readNewsItems', JSON.stringify([itemObj(readItem)]))
            setLocaItems(JSON.parse(localStorage.readNewsItems));
            // console.log('absentItems', JSON.parse(localStorage.readNewsItems));
        }
        if(localStorage.readNewsItems && readItem){
            const storedItems = JSON.parse(localStorage.readNewsItems);
            const currentItemClicked = storedItems.filter(ci => ci.key === readItem._id);
            // console.log('currentItemClicked', currentItemClicked);
            if(!currentItemClicked.length){
                // console.log('nocurrent', currentItemClicked);
                localStorage.setItem('readNewsItems', JSON.stringify([itemObj(readItem), ...storedItems]));
            }else{
                const updatedCurrentItem = {...currentItemClicked[0], timestamp: Date.now()}
                localStorage.setItem('readNewsItems', JSON.stringify([updatedCurrentItem, ...storedItems.filter(ci => ci.key !== readItem._id)]));
            }
            setLocaItems(JSON.parse(localStorage.readNewsItems));
            // console.log('presentItems', JSON.parse(localStorage.readNewsItems));
        }
    }, [readItem]);

    const clearRecent = () => {
        localStorage.removeItem('readNewsItems');
        setLocaItems([]);
    }

  return (
    <>
        <h5 className="mb-3">Recently Read</h5>
            <button onClick={clearRecent}>Clear</button>
            {!localItems && <p>No news items have been read yet.</p>}
            {localItems && localItems.map((li) => <p key={li.key}>{li.timestamp}::{li.id}</p>)}
        <hr />
        <h5 className="mb-3">Recent Updates</h5>
        <ul>
            <li>Update 1</li>
            <li>Update 2</li>
        </ul>
    </>
  )
}

export default RecentRead;