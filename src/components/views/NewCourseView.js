import { Link } from "react-router-dom";

const NewCourseView = (props) => {
  const {handleChange, handleSubmit } = props;

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-title">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif'}}>
            New Course
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)} className="form-items">
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
          <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Instructor Id: </label>
          <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit" className="submit-button">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        </div>
        <br/>
        <br/>
        <div className="links-to-return">
          <Link to={`/courses`}>
            <button className="go-back-button">Back To Courses</button>
          </Link>
          <Link to={`/instructors`}>
            <button className="go-back-button">Back To Instructors</button>
          </Link>
        </div>
          
      </div>
    
  )
}

export default NewCourseView;