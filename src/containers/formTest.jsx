import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputFirstValue, inputSecondValue, pressButtonTop, inputThirdValue, selectedOption} from '../actions/index';
import ChooseButton from '../components/button';

class FirstForm extends Component {
  constructor() {
    super();

    this.state = {
        selectedOption: 'sum',
        firstValue:'',
        secondValue:'',
    };

}

handleOptionChange = (event) => {
  this.setState({
    selectedOption: event.target.value
  })
  this.props.dispatch(selectedOption(event.target.value))
}
firstHandleChange = (event) => { this.props.dispatch(inputFirstValue(event.target.value)) }
secondHandleChange = (event) => { this.props.dispatch(inputSecondValue(event.target.value)) }
thirdHandleChange = (event) => { this.props.dispatch(inputThirdValue(event.target.value)) }
  render() {
    const { selectedOption } = this.state;
    const { dispatch,  firstValue, secondValue, thirdValue} = this.props;
    return(
          <ChooseButton>
          <div className="form line">
            <div className="row mt-4">
              <div className="col-sm-6">
                <div className="input-group">
                <input id="radio1" name="radio" type="radio" value="sum" checked={selectedOption === 'sum'} onChange={this.handleOptionChange}/>
                <label htmlFor="radio1">SUM</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                <input id="radio2" name="radio" type="radio" value="multiply" checked={selectedOption === 'multiply'} onChange={this.handleOptionChange}/>
                <label htmlFor="radio2">MULTIPLY</label>
            </div>
          </div>
          <div className="col-sm-6">
              <div className="input-group">
              <input id="radio3" name="radio" type="radio" value="primeNumber" checked={selectedOption === 'primeNumber'} onChange={this.handleOptionChange}/>              
              <label htmlFor="radio3">PRIME NUMBER</label>
            </div>
            </div>
            <div className="col-sm-6">
            <div className="input-group">
            <input id="radio4" name="radio" type="radio" value="fibonacci" checked={selectedOption === 'fibonacci'} onChange={this.handleOptionChange}/>                          
            <label htmlFor="radio4">FIBONACCI</label>
          </div>
            </div>
            </div>
            <div className="row mb-2" style={{ display: selectedOption ===  'sum' || selectedOption ===  'multiply' ? '' : 'none' }}>
                <div className="col-sm-6 mb-2">
                  <input type="number" className="form-control" placeholder="Input value" onChange={ this.firstHandleChange}/>
                </div>
                <div className="col-sm-6 mb-2">
                  <input type="number" className="form-control" placeholder="Input value" onChange={ this.secondHandleChange}/>
                </div>
            </div>
            <div className="row mb-2" style={{ display: selectedOption ===  'sum' || selectedOption ===  'multiply' ? 'none' : '' }}>
                <div className="col-sm-12 mb-2">
                  <input type="number" className="form-control" placeholder="Input value" onChange={ this.thirdHandleChange}/>
                </div>
            </div>
                <button type="submit" className="btn w-100 rounded" onClick={() => {dispatch(pressButtonTop(firstValue,secondValue, thirdValue, selectedOption))}}>ANSWER</button>
          </div>
          </ChooseButton>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {dispatch}
}

function mapStateToProps (state) {
    console.log(state)
    return {
      firstValue: state.formTest.firstValue,
      secondValue: state.formTest.secondValue,
      thirdValue : state.formTest.thirdValue,
      selected: state.formTest.selected
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstForm);