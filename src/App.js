import './App.css';
import AllPics from './components/AllPics';
import AllCategories from './components/AllCategories';
import CategoryDetails from './components/CategoryDetails';
import PhotoDetails from './components/PhotoDetails';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
 
function App() {
  return (
       <Router>
       <div className="App">
         <Switch>
          <Route exact path="/" component={AllPics} />
          <Route exact path={`/categories`}  component={AllCategories} />
          <Route exact path={`/categories/:category_id`}  component={CategoryDetails} />
          <Route exact path={`/categories/:category_id/:photo_id`}  component={PhotoDetails} />
          </Switch>
          
       </div>
       </Router>
  );
}

export default App;
/* let weathers = list.filter(item => item.id === 0).map(x=> ((x.includes).slice(page * perPage, (page + 1) * perPage)).map(thiy=> {
     return (
      <div className="col-md-4  col-xs-6" key={(thiy.categoryNumber) + x.name} >
      <a href={`/en/photos/`}>
      <div className="photo--container">
      <div className="bg-img" >
      <img src={`${thiy.imageUrl}`} alt="Medium"/>
      </div>
      <h3>{thiy.title}</h3>
      </div>
      </a>
      </div>
     )
   })) || '';*/

   /* */

