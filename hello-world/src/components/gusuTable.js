import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./button"
import CustomSelect from "./select"

const options = [
  { value: "dominique", label: "Dominique" },
  { value: "kai", label: "Kai" },
]

export default function GusuTable() {
  const [state, setState] = useState({
    selected: "empty",
  })
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

  const handleInputChange = newValue => {
    console.log(newValue.label)
    setState({ ...state, selected: newValue.label })
  }

  const getOptions = () => {
    let res = data.internalGusuEntities.text.data.map(node => ({
      value: node.alternative_id,
      label: node.name,
    }))
    return res
  }

  //<Button primary>I'm a button</Button>
  return (
    <div>
      <h1>This will be the gusu table.</h1>
      <CustomSelect options={getOptions()} onChange={handleInputChange} />
      <p>Selected : {state.selected}</p>
      <ul>
        {data.internalGusuEntities.text.data.map(node => (
          <li key={node.alternative_id}>{node.name}</li>
        ))}
      </ul>
    </div>
  )
}
