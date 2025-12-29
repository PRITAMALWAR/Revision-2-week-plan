import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import Preferences from "./Preferences";
import Review from "./Review";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    newsletter: false
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div style={{ maxWidth: "400px" }}>
      <h3>Step {step} of 4</h3>

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <AccountDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <Preferences
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <Review
          formData={formData}
          prevStep={prevStep}
        />
      )}
    </div>
  );
}

export default MultiStepForm;
