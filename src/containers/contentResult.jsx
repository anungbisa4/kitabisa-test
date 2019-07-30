import React, { Component } from 'react'
import Content from '../components/content';

export default class ContentResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Sample for props",
      header: "This is header",
      body: "This is body",
      footer: "This is footer"
    }
  }
  render() {
    const { title, header, body, footer } = this.state
    return (
      <div>
        <Content title="sample props" content={this.state}></Content>
      </div>
    )
  }
}
