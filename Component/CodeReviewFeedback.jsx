import React, { useState } from 'react'
import '../src/App.css'
function CodeReviewFeedback() {

    const [list, setList] = useState([
        {
            label: "Readability",
            key: 1,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Performance",
            key: 2,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Security",
            key: 3,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Documentation",
            key: 4,
            upvote: 0,
            downvote: 0
        },
        {
            label: "Testing",
            key: 5,
            upvote: 0,
            downvote: 0
        },
    ]);

    // const handleVote = (index, key) => {
    //     list[index][key] += 1;
    //     setList([...list]);
    // }

    const handleupVote = (index, key) => {
    list[index][key] = list[index][key] +1
      setList([...list]);
  }

  const handledownVote = (index, key) => {
    list[index][key] = list[index][key] +1
    setList([...list]);
}


    return (
       <>
                 <h1 className='cod'>React Code Review Feedback</h1>
        <div className="container">
        {list.map((aspect, index) => (
          <div className="card" key={aspect.key}>
            <div className="card-body">
              <h5 className="card-title">{aspect.label}</h5>
              <div className="button-group">
                {/* <button className="btn btn-outline-primary" onClick={() => handleVote(index, "upvote")}>Upvote</button>
                <button className="btn btn-outline-danger" onClick={() => handleVote(index, "downvote")}>Downvote</button> */}
                  <button className="btn btn-outline-primary" onClick={() => handleupVote(index, "upvote")}>Upvote</button>
                  <button className="btn btn-outline-danger" onClick={() => handledownVote(index, "downvote")}>Downvote</button>
              </div>
              <div>
                <p className="m-0"><strong>Upvote:</strong> {aspect.upvote}</p>
                <p className="m-0"><strong>Downvote:</strong> {aspect.downvote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
       </>
      
    )
}

export default CodeReviewFeedback