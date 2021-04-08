import { Switch, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion'
import './App.scss';
import Home from './pages/home.js'
import Info from './pages/info.js'
import NotFound from './pages/404.js'

function App({data}) {
  const location = useLocation();

  return (
    <div className="container">
      <AnimatePresence 
        // initial={false} 
        exitBeforeEnter
      >
        <Switch location={location} key={location.key}>  
          <Route 
            path='/' 
            exact
            render={() => <Home cars={data} />}
          />
          <Route 
            path='/car/:id' 
            exact
            render={() => <Info cars={data} />}
          />
          <Route
            path='*'
            render={() => <NotFound />} 
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
