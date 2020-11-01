import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./button"
import CustomSelect from "./select"

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

  //<Button primary>I'm a button</Button>
  return (
    <div>
      <h1>This will be the gusu table.</h1>
      <CustomSelect />
      <ul>
        {data.internalGusuEntities.text.data.map(node => (
          <li key={node.alternative_id}>{node.name}</li>
        ))}
      </ul>
    </div>
  )
}
