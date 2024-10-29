import { Route,BrowserRouter,Routes} from 'react-router-dom';
import './main.css';
import Login from './Components/Login';
import CategoryContentViewer from './Components/CategoryContentViewer';
import CategoryContentAdmin from './Components/CategoryContentAdmin';
import CategoryContentEditor from './Components/CategoryContentEditor';
import AddTerm from './Components/AddTerm';
import AddTermEditor from './Components/AddTermEditor';
import AddCategory from './Components/AddCategory';
import TermContent from './Components/TermContent';
import HomeViewer from './Components/HomeViewer';
import AddCategoryEditor from './Components/AddCategoryEditor';
import HomeAdmin from './Components/HomeAdmin';
import HomeEditor from './Components/HomeEditor';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/login' index element={<Login />}/>
      <Route path='/homeViewer' element={<HomeViewer />}/>
      <Route path='/homeAdmin' element={<HomeAdmin />}/>
      <Route path='/homeEditor' element={<HomeEditor />}/>
      <Route path='/categorytitle' element={<CategoryContentViewer />}/>
      <Route path='/categorytitleadmin' element={<CategoryContentAdmin />}/>
      <Route path='/addterm' element={<AddTerm />}/>
      <Route path='/addcategory' element={<AddCategory />}/>
      <Route path='/termcontent' element={<TermContent />}/>
      <Route path='/categorytitleEditor' element={<CategoryContentEditor />}/>
      <Route path='/addcategoryeditor' element={<AddCategoryEditor />}/>
      <Route path='/addtermeditor' element={<AddTermEditor />}/>


    </Routes>
    </BrowserRouter>




    </>
  )
}

export default App
