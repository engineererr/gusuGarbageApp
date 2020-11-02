import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import CustomSelect from "./select"
import withLocation from "./withLocation";

const options = [
  { value: "dominique", label: "Dominique" },
  { value: "kai", label: "Kai" },
]

function GusuTable( {search }) {
  const { name } = search
  const [state, setState] = useState({
    selected: name,
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

  const getDefaultValue = (name) => {
    let res = data.internalGusuEntities.text.data.filter((node) => node.name == name).map(node => ({
      value: node.alternative_id,
      label: node.name,
    }))
    return res
  }
  
  //<Button primary>I'm a button</Button>
  return (
    <div>
      <h1>This will be the gusu table.</h1>
      <CustomSelect options={getOptions()} onChange={handleInputChange} defaultValue={getDefaultValue(name)}/>
      <ul>
        {data.internalGusuEntities.text.data.filter((node) => node.name == state.selected).map(node => (
          <li key={node.alternative_id}>{node.name}</li>
        ))}
      </ul>
    </div>
  )
}

GusuTable.propTypes = {
  search: PropTypes.object,
}

export default withLocation(GusuTable)
