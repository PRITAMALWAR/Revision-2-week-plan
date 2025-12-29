function Review({ formData, prevStep }) {
  return (
    <div>
      <h4>Review Details</h4>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>
      <p>Newsletter: {formData.newsletter ? "Yes" : "No"}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>
        Submit
      </button>
    </div>
  );
}

export default Review;
