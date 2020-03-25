import React, { Component } from 'react';
import { Input, Button,Table } from 'antd'
import axios from 'axios';
import './Home.css'
const header = [{
    title: 'Iteration',
    dataIndex: 'iteration'
}, {
    title: 'X',
    dataIndex: 'x'
}, {
    title: 'Error',
    dataIndex: 'Error',
}]

export default class Fix extends Component {
    state = {
        result:[],
        equation: "",
        X: "",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({ [e.target.name]: e.target.value }, console.log(this.state))
    }
    cal = () => {
        axios
          .post("http://localhost:8000/fixapi/fixapi", {
           x :parseFloat(this.state.X),
           equation: this.state.equation
        })
        .then(res => {
          this.setState({result:res.data.result})
            console.log(this.state.result)
        })
        .catch(err => {
          console.log(err);
        });
      } 

    render() {
        return (
            <div className='bg'>
                <div className='inputbox'>
                <h1 class="butto">Fix Point (One-point Iteration)</h1>
                    <Input name="equation" onChange={this.input.bind(this)} placeholder="Equation" />
                    <Input name="X" onChange={this.input.bind(this)} placeholder="X" />
                </div>
                <Button style={{margin:"30px"}} class="butto" type="primary" size="large" onClick={this.cal.bind(this)}>Submit</Button>
                {<Table style={{width:"900px",margin:"auto"}} dataSource={this.state.result} columns={header} pagination={false} />}
            </div>
        );
    }
}
