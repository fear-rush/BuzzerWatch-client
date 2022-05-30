import React from 'react'

const Table = (props) => {
    return(
        <table className="table table-striped">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Tweets</th>
                <th scope="col">Polarity</th>
                <th scope="col">Subjectivity</th>
                <th scope="col">Sentiment</th>
                <th scope="col">Positive</th>
                <th scope="col">Neutral</th>
                <th scope="col">Negative</th>
              </tr>
            </thead>
            <tbody>
                {props.data.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.clean}</td>
                        <td>{data.polarity}</td>
                        <td>{data.subjectivity}</td>
                        <td>{data.sentiment}</td>
                        <td>{data.pos}</td>
                        <td>{data.neu}</td>
                        <td>{data.neg}</td>
                    </tr>
                ))}
              
            </tbody>
          </table>
    )
}

export default Table