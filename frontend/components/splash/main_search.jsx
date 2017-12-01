import React from 'react';
import Search from 'material-ui-icons/Search';
import { fetchEvents } from '../../util/events_api_util';
import values from 'lodash/values';
import { Link } from 'react-router-dom';
class MainSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", matches: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const value = e.target.value
    this.setState({query: value})

    fetchEvents(value)
      .then(res => {
          //show first 4 matches
        const matches = values(res).map((event) => {
          return [event.id, event.title]
        }).slice(0,4)
        this.setState({matches})
      })
  }
  componentWillUpdate(nextProps, nextState) {
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.ownProps.history.push(`query/${this.state.query}`)
  }
  render() {
    const matchItems = this.state.matches.map((match) => {
      const matchPath = `/events/${match[0]}`
      return (
        <li key={match[1]}><Link to={matchPath}>{match[1]}</Link></li>
      )
    })
    return (
      <form onSubmit={this.handleSubmit}>
        <span className="magnifier"><Search /></span>
        <input type="text" onChange={this.handleChange} value={this.state.query} />
        {matchItems.length > 0 &&
          <ul className="query-match">{matchItems}</ul>
        }
        {/* <input type="submit" value="Go" /> */}
      </form>
    )
  }
}

export default MainSearch;