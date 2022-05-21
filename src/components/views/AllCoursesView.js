import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p className="no-content-message">There are no courses.</p>
      <Link to={`/newcourse`}>
        <button className="add-new-button">Add New Course</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className="course-container">
      <div className="course-container-row">
      {courses.map((course) => {
        let title = course.title;
        return (
          <div className="course-list">
            <div key={course.id} className="course-item">
              <Link to={`/course/${course.id}`} className="course-link">
                <h1 className="course-name">{title}</h1>
              </Link>
              <p className="course-dept">{course.instructor.firstname + " " + course.instructor.lastname}</p>
            <button onClick={() => deleteCourse(course.id)} className="delete-button">Delete</button>
            </div>
          </div>
        );
      }
      )}
      </div>
      <Link to={`/newcourse`}>
        <button className="add-new-button">Add New Course</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;