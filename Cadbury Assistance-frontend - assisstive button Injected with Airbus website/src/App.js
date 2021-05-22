import AssistMenu from './AssistMenu';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AssistMenu} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;