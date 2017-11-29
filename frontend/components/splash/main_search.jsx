import React from 'react';

class MainSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const value = e.target.value
    this.setState({query: value})
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('search', this.state.query)
    this.props.ownProps.history.push(`query/${this.state.query}`)
    // debugger
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.query} />
        <input type="submit" value="Go" />
      </form>
    )
  }
}

export default MainSearch;