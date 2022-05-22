import { Link } from "react-router-dom";

const InstructorView = (props) => {
  const {instructor} = props;
  if (!instructor.courses.length)
  {
    return (
      <div className="instructor-page">
      <div className="indv-instructor">
        <h1 className="indv-ins-title">{instructor.firstname} {instructor.lastname}</h1>
        <p className="indv-department">{instructor.department}</p>
        <div>
      <p className="no-content-message">This instructor has no available courses</p>
      <Link to={`/newcourse`}>
        <button className="add-new-button">Add New Course</button>
      </Link>
    </div>
      </div>   
      <br/>
      <br/>   
      <Link to={`/instructors`}>
            <button className="go-back-button">Back To Instructors</button>
      </Link>
    </div>
    )
  }
  return (
    <div className="instructor-page">
      <div className="indv-instructor">
        <h1 className="indv-ins-title">{instructor.firstname} {instructor.lastname}</h1>
        <p className="indv-department">{instructor.department}</p>
        <div className="ordered-list">
        <h3 className="ins-course-title">Courses:</h3>
          <ul>
          {instructor.courses.map( course => {
            return (
              <li key={course.id} className="list-item">{course.title}</li>
            );
          })}
          </ul>
        </div>
        <Link to={`/newcourse`}>
          <button className="add-new-button plus-button">+</button>
        </Link>
      </div>   
      <br/>
      <br/>   
      <Link to={`/instructors`}>
            <button className="go-back-button">Back To Instructors</button>
      </Link>
    </div>
  );

};

export default InstructorView;