function ChildrenDetails({allChildren, removeChild}) {

  return <>
    <div className="form-group {styles.form-element}">
      {allChildren.map(child => {
        return <div key={child.id}>
          {child.name} - {child.age}
          <button type="button" onClick={() => removeChild(child.id)} className="btn btn-sm btn-danger">Remove</button>
        </div>
      })}
    </div>
  </>

}

export default ChildrenDetails