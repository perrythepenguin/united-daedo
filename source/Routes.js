import React from 'react';
import NotFound from 'components/NotFound';
import Home from 'containers/Tabs/Home';
import {Route, IndexRoute} from 'react-router';
import App from 'containers/App';


export const tabs = [
  {
    pathname: '/',
    tabLabel: '홈',
    component: Home
  },
  {
    pathname: 'unitedboard',
    tabLabel: '통일게시판',
    component: <div>통일</div>
  },
  {
    pathname: 'unitednews',
    tabLabel: '통일뉴스',
    component: <div>news</div>
  },
  {
    pathname: 'informationboard',
    tabLabel: '자료게시판',
    component: <div>w/e</div>
  }
]

export const routes = (
  <Route
    name="app"
    component={App}
    path="/"
  >
    {tabs.map((tab, index) => {
      if (index === 0) return <IndexRoute key={index} component={tab.component} />
      return <Route key={index} path={`/${tab.pathname}`} component={tab.component} />
    })}
    <Route path='*' component={NotFound} />
  </Route>
)
