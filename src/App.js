import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  NewInstructorContainer
} from './components/containers';

import Header from "./components/Header";
import Footer from "./components/Footer";

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/newinstructor" component={NewInstructorContainer} />
        <Route exact path="/instructor/:id" component={InstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/course/:id" component={CourseContainer} />

      </Switch>    
      <Footer />    
    </div>
  );
}

export default App;

