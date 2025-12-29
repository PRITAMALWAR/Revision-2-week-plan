function PersonalInfo({ formData, setFormData, nextStep }) {
  return (
    <div>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default PersonalInfo;
