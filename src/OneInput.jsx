import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class OneInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
  }

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { validation, id, ermsg, type } = this.props
    const {value } = this.state
    let valid = validation(value)
    return (
        <FormGroup
          controlId={id}
          validationState={valid}
        >
          <ControlLabel>{id}</ControlLabel>
          <FormControl
            type={type || "text"}
            value={this.state.value}
            placeholder={"Enter "+id}
            onChange={this.handleChange}
          />
          {valid !== 'success' && <div>{ermsg}</div>}
          <FormControl.Feedback />
        </FormGroup>
    );
  }
}
export default OneInput