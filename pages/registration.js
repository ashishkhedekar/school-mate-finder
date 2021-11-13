import {useState} from "react";
import ChildrenDetails from "../components/children-details";
import AddChild from "../components/add-child";


function Registration() {

  const [name, setName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [allChildren, setAllChildren] = useState([]);

  const handleRegistration = (e) => {
    e.preventDefault()
    console.log("Handling registration for name " + name + " and " + postcode);
  }

  const removeChild = (id) => {
    console.log("Removing child with id" + id);
    const filteredChildren = allChildren.filter(child => child.id !== id)
    setAllChildren(filteredChildren)
  }

  return <>
    <h1>Registration</h1>
    <div>
      <form>
        <div className="form-group" >
          <label htmlFor="parentName">Name</label>
          <input type="name" className="form-control" id="parentName" placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group formgroup" >
          <label htmlFor="parentPostcode">Postcode</label>
          <input type="postcode" className="form-control" id="parentPostcode" placeholder="Postcode"/>
        </div>
        <div className="form-group">
          <ChildrenDetails allChildren={allChildren} removeChild={removeChild}/>
        </div>

        <AddChild setAllChildren={setAllChildren}/>

        <div className="form-group">
          <button type="submit" className="btn btn-primary" onClick={(e) => handleRegistration(e)}>Submit</button>
        </div>
      </form>

    </div>
  </>
}

export default Registration;