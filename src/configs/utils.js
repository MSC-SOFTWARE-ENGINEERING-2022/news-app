import configs from "./configs"

export function DEPE(){}

DEPE.getAllTopics = () => {
    const allTopics = Object.keys(configs.topics).sort((a,b) => a.length - b.length);
    
    return allTopics;
}

DEPE.firstCase = (txt) => {
    return `${txt.slice(0,1).toUpperCase()}${txt.slice(1)}`
}

DEPE.capitalize = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

DEPE.randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;