
const Multiple = ({data}) => {
  // console.log('data', data)

  const retrieve = (item) => {
    const {headline, news_desk, pub_date, multimedia} = item;
    const img_src = multimedia.length && multimedia.find(mu => mu.subType === "blog533").url
    return <> 
      <div className="tp-img">
        <img src={img_src && `http://www.nytimes.com/${img_src}`} alt={headline.main} />
        </div>
        <div className="tp-title">
          <a href="">{headline.main}</a>
        </div>                            
    </>
  }
  const sd = (idx) => {
      return <div className="tp-news">{<>{
          data[idx]? retrieve(data[idx]): 'No data'
        }</>
      }</div>
  }

  return <>
    <div className="topic-news scroll-inner">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="topic-content">
                <div id="featured" className="container tab-pane active">
                {sd(1)}
                {sd(2)}
                {sd(3)}
                {sd(4)}
                {sd(5)}
                {sd(6)}
                {sd(7)}
                {sd(8)}
                {sd(9)}
    </div></div></div></div></div></div>
  </>
}

export default Multiple;