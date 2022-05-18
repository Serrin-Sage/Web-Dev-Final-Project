

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div className='home-page-container'>
      <span className='home-title'>
        <h1>CUNYFirst Clone</h1>
      </span>
      
      <div className='main-container'>
        <Link to={'/instructors'} className="link-button" id="instructor-link"> View Instructors </Link>
        <Link to={'/courses'} className="link-button" id="course-link"> View Courses </Link>
      </div>
      
      
    </div>
  );    
}




export default HomePageView;
