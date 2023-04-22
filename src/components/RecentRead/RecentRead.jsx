import { useContext, useEffect, useState } from 'react'
import LocalStorageCtx from '../../contexts/LocalStorage';
import Loader from '../Loader';
import SingleModal from '../SingleModal/SingleModal';

const RecentRead = ({place, itemClass}) => {
    const [isLoading, setIsLoading] = useState(false);
    const retrieve = (item) => <SingleModal elem={item} place={place} />

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("content", localContent.openedItems);
    const raw_local_data = localStorage.length && JSON.parse(localStorage?.openedNewsItems);
    const local_data = raw_local_data? raw_local_data.map(op => op.newsitem).slice(0, 5) : [];
    // console.log("data", local_data);

    const clearRecent = () => {
        localStorage.removeItem('openedNewsItems');
        setLocalContent(lc => ({...lc, openedItems: []}))
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    return <>
        {isLoading && <Loader />}
        {!isLoading && <>
            {local_data.map((ldt, idx) => {
                return <div key={idx} className={itemClass}>
                    {retrieve(ldt)}
                </div>
            })}
        </> || 'Checking for recent items'}
        {!isLoading && local_data.length < 1 && "No recent items"}
        <button 
            className="clearRecent btn btn-outline-secondary btn-sm btn-block" 
            onClick={clearRecent}
            disabled={local_data.length < 1}
            >Clear</button>
    </>
}

export default RecentRead;