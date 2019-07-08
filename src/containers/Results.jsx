import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div style={{display: !this.props.resultTop ? 'none': ''}}>
        <div className='result'>
        <h3>RESULT</h3>
          <div className="result-value">{(!this.props.resultTop)?'0': this.props.resultTop}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    resultTop: state.formTest.result,
  }
}

export default connect(mapStateToProps)(Results);