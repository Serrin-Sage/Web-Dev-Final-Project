import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  if (course.instructor === null) {
    return (
      <div>
        No Instructors
      </div>
    )
  }
  return (
    <div className="course-page">
      <div className="indv-course">
        <h1>{course.title}</h1>
        <h3>Professor:  
          <Link to={`/instructor/${course.instructor.id}`} className="instructor-link">
            {" " + course.instructor.firstname + " " + course.instructor.lastname}
          </Link>
        </h3>
        <h3>Professor ID #: {course.instructor.id}</h3>
      </div>
      <div className="links-to-return">
          <Link to={`/courses`}>
            <button className="go-back-button">Back To Courses</button>
          </Link>
          <Link to={`/instructors`}>
            <button className="go-back-button">Back To Instructors</button>
          </Link>
        </div>
    </div>
  );

};

export default CourseView;