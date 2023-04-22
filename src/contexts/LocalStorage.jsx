import React from 'react';

const LocalStorageCtx = React.createContext({
    localstore: [],
    openedItems: localStorage?.openedNewsItems || []
});

export default LocalStorageCtx;