const API_KEY = '5eWsNiAesgdXhfyl9ih60aCG71Db0PFc';

const searchNews = async (id) => {
    // const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&fq=_id:"${id}"`;
    // console.log(window.location)
    const url = `${window.location.origin}/data/articlesearch_by_id.json`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data", data);
    // console.log("response", data.response);
    return data.response.docs;
};

export default searchNews;