import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SingleModal } from "../../components";

const Multiple = ({data, selectItem}) => {
  // console.log('data', data)
  // const navigate = useNavigate();

  const retrieve = (item) => {
    return <SingleModal elem={item} place="multiple"/> 
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