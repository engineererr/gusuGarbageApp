import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function GusuTable() {
    const data = useStaticQuery(
        graphql`
        query MyQuery {
            internalGusuEntities(children: {}) {
              text {
                data {
                  alternative_id
                  name
                }
              }
            }
          }
          
        `
      )
      debugger;
  return (
    <div>
      <h1>This will be the gusu table.</h1>
      <ul>
        {data.internalGusuEntities.text.data
          .map((node) => (
            <li key={node.alternative_id}>{node.name}</li>
          ))}
      </ul>
    </div>
  )
}
