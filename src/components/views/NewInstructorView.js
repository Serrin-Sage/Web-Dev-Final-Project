import { Link } from "react-router-dom";

const NewInstructorView = (props) => {
    const {handleChange, handleSubmit } = props;
  
    return (
      <div className="form-container">
        <div className="form-header">
          <div className="form-title">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif'}}>
              New Instructor
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)} className="form-items">
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" onChange={(e) => handleChange(e)} />
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
          <Link to={`/instructors`}>
            <button className="go-back-button">Back To Instructors</button>
          </Link>
        </div>
      
    )
  }
  
  export default NewInstructorView;