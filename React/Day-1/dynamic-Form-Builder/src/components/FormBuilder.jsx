import { useState } from "react";

function FormBuilder() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { text: "", type: "text" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedQuestions = questions.map((q, i) =>
      i === index ? { ...q, [name]: value } : q
    );

    setQuestions(updatedQuestions);
  };

  // Remove Question
  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Survey Form</h2>

      <button onClick={addQuestion}>Add Question</button>

      {questions.map((q, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          
          <input
            name="text"
            placeholder="Enter question"
            value={q.text}
            onChange={(e) => handleChange(index, e)}
          />

          <select
            name="type"
            value={q.type}
            onChange={(e) => handleChange(index, e)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>

          <button onClick={() => removeQuestion(index)}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Live Preview</h3>
      {questions.map((q, index) => (
        <p key={index}>
          {index + 1}. {q.text} ({q.type})
        </p>
      ))}
    </div>
  );
}

export default FormBuilder;
