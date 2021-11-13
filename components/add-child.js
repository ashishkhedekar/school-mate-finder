import {useState} from "react";

function AddChild({setAllChildren})
{
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [isAddChildOpen, setIsAddChildOpen] = useState(false)
  const addChildAccordionClassname = isAddChildOpen
    ? `accordion-collapse collapse show` : `accordion-collapse collapse`;

  const handleAddChild = (e) => {
    e.preventDefault()
    setAllChildren(oldChildren => [...oldChildren, {
      id: new Date(),
      name: childName,
      age: childAge
    }])
    setChildName("")
    setChildAge("")
    setIsAddChildOpen(false)
  }

  return <>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne" onClick={() => setIsAddChildOpen(!isAddChildOpen)}>
            Add Child
          </button>
        </h2>
        <div id="collapseOne" className={addChildAccordionClassname} aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <div className="form-group">
              <label htmlFor="childName">Name</label>
              <input type="text" className="form-control" id="childName" value={childName} placeholder="Your Child's name" onChange={(e) => setChildName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="childAge">Age</label>
              <input type="text" className="form-control" id="childAge" value={childAge} placeholder="Your Child's age" onChange={(e) => setChildAge(e.target.value)}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" onClick={(e) => handleAddChild(e)}>Add Child</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

}

export default AddChild