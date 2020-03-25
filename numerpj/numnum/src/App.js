import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bisec from './Component/Bisec'
import False from './Component/False'
import Fix from './Component/Fix'
import Newton from './Component/Newton'
import Secant from './Component/Secant'

import Bwoh from './Component/Bwoh'
import Bwoh2 from './Component/Bwoh2'
import Oh2 from './Component/Oh2'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



import { Menu } from 'antd';
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Router>
        <div class="head">
          <h1 class="text"> Numerical Method</h1>
          </div>

        <div class="home">
          <Menu mode="horizontal" theme="dark">
          <SubMenu title="Root of Equation" key="sub1" 
          title={
            <span class="dropdown-item" class="font-sub">      
              <span>Root of Equation</span>
            </span>
          }>
            <Menu.Item>
              <Link to='/bisec'>Bisection Method</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/false'>False Position Method</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/fix'>Fixpoint (One-point Iteration Method)</Link>
              </Menu.Item>
              <Menu.Item>
              <Link to='/newton'>Newton Rapson</Link>
              </Menu.Item>
              <Menu.Item>
              <Link to='/secant'>Secant Method</Link>
              </Menu.Item>
          </SubMenu>

              <SubMenu title="Derivative" key="sub2" 
          title={
            <span class="dropdown-item" class="font-sub"> 
              <span>Derivertion</span>
            </span>
          }>
              <Menu.Item>
              <Link to='/Bwoh'>Bwoh</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/Bwoh2'>Bwoh2</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/Oh2'>Oh2</Link>
            </Menu.Item>
            </SubMenu>
          </Menu>

          <Switch>
            <Route path='/bisec'>
              <Bisec />
            </Route>
            <Route path='/false'>
              <False />
            </Route>
            <Route path='/fix'>
              <Fix/>
            </Route>
            <Route path='/newton'>
              <Newton/>
            </Route>
            <Route path='/secant'>
              <Secant/>
            </Route>

            <Route path='/Bwoh'>
              <Bwoh/>
            </Route>
            <Route path='/Bwoh2'>
              <Bwoh2/>
            </Route>
            <Route path='/Oh2'>
              <Oh2/>
            </Route>

          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
