function Preferences({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={(e) =>
            setFormData({ ...formData, newsletter: e.target.checked })
          }
        />
        Subscribe to newsletter
      </label>

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Preferences;
