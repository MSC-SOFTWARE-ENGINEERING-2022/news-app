const API_KEY = '5eWsNiAesgdXhfyl9ih60aCG71Db0PFc';

const fetchNews = async (query = '') => {
    // const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
    const url = `${window.location.origin}/data/articlesearch.json`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data", data);
    // console.log("response", data.response);
    return data.response.docs;
};

export default fetchNews;