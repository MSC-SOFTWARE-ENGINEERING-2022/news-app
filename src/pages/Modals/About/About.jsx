import "./about.css"

const About = () => {
  return (
    <div className='modalAbout'>
        
        <h3 id="news-app-using-react">News App using React</h3>
        <p>This project is hosted in Netlify <a href="https://jkuatmsc-group1-newsapp.netlify.app" target="_blank">https://jkuatmsc-group1-newsapp.netlify.app</a>.</p>
        <p>This Github project repository is: <a href="https://github.com/MSC-SOFTWARE-ENGINEERING-2022/news-app" target="_blank">repo-link</a>.</p>        
        <h4 id="context">Context</h4>
        <p>The task was an assignment for JKUAT Masters HCI (Human Computer Interaction) unit.<br />
        It is about developing a user-interface for a news-app.</p>
        <h4 id="code">Code</h4>
        <p>This is a React based app and data is from <a href="https://developer.nytimes.com/apis" target="_blank">NewYorkTimes API</a>.</p>
        <p>Due to restriction in API requests per minute and per day, the decision to download some json files was viable.
          Hence the current data is static but you can enable the "live-data" in /src/api files.</p>
        <p>The API token is for <u>development purposes only</u> and will be deleted after assignment has been delivered and assessment completed.</p>
        <h4 id="local-deployment">Local Deployment</h4>
        <p>Please remember to install all dependencies in the package.json file first before running the application.<br />
        From the project folder, open the command-line execute the command:</p>
        <h5 id="-npm-i-"><code>npm i</code></h5>
        <p>Then run:</p>
        <h5 id="-npm-start-"><code>npm start</code></h5>
        <p>This runs the app in the development mode.<br/>
        Open <a href="http://localhost:3000" target="_blank" disabled>http://localhost:3000</a> to view it in your browser.</p>
        <p>The page will reload when you make changes.<br />
        You may also see any lint errors in the console.</p>
        
    </div>
  )
}

export default About