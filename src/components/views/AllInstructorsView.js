import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  let { instructors, deleteInstructor } = props
  if (!props.allInstructors.length) {
    return (
    <div>
      <p className="no-content-message">There are no instructors.</p>
        <Link to={`/newinstructor`}>
          <button className="add-new-button">Add New Instructor</button>
        </Link>
    </div>
    )
  }

  return (
    <div className="instructor-container">
      <div className="instructor-container-row">
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div className="instructor-list">
            <div key={instructor.id} className="instructor-item">
              <Link to={`/instructor/${instructor.id}`} className="instructor-link">
                <h1 className="instructor-name">{name}</h1>
              </Link>
              <p className="instructor-dept">{instructor.department}</p>
              <p className="instructor-id">ID#: {instructor.id} </p>
              <button onClick={() => deleteInstructor(instructor.id)} className="delete-button">Delete</button>
            </div>
          </div>
        );
      })}
      </div>
      <div className="links-to-return">
          <Link to={`/newcourse`}>
            <button className="go-back-button">Add New Course</button>
          </Link>
          <Link to={`/newinstructor`}>
            <button className="add-new-button">Add New Instructor</button>
          </Link>
        </div>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  deleteInstructor: PropTypes.func.isRequired,
};

export default AllInstructorsView;