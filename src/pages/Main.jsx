import React, { useEffect, useState, use } from 'react'
import { CustomNavbar, Footer, ScrollBackToTop } from '../components'
import LocalStorageCtx from '../contexts/LocalStorage'

import Contact from './Contact'
import Error from './Error'
import Home from './Home/Home'
import Single from './Single/Single'
import Topic from './Topic/Topic'

const contentObj = {
    home: <Home />,
    news: <Topic topic="politics"/>,
    by_id: <Single id="22" />,
    contacts: <Contact />,
    error: <Error />
}

const Main = ({entity}) => {
    const [localContent, setLocalContent] = useState({
        entity: entity,
        lang: "es",
        topic: "politics",
        news_id: "22"
    });

    const checkEntity = (entity, elem) => {
        // console.log(entity)
        return (entity === "news")? <Topic topic={localContent.topic} />: contentObj[entity]
    }

    return <LocalStorageCtx.Provider value={{localContent, setLocalContent}}>
        <CustomNavbar />
            {checkEntity(localContent.entity)}
        <Footer />
        <ScrollBackToTop />
    </LocalStorageCtx.Provider>
}

export default Main;