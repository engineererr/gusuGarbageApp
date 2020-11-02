import React from "react"
import Select from "react-select"


export default class CustomSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Select
          options={this.props.options}
          onSelectResetsInput={false}
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}
        />
      </div>
    )
  }
}
