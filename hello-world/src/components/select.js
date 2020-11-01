import React from "react"
import Select from "react-select"

const options = [
  { value: "chocolate", label: "Chocoloate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]
export default class CustomSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: false,
    }

    this.setSetStateCallback = this.setSetStateCallback.bind(this)
  }

  setSetStateCallback() {
    console.log("State set")

    this.setState({
      test: true,
    })
  }

  handleInputChange = (newValue) => {
    console.log(newValue.label)
  }

  render() {
    return (
      <div>
        <Select options={options} onSelectResetsInput={false} onChange={this.handleInputChange}  />
      </div>
    )
  }
}
