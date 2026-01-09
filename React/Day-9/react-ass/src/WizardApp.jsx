import { useState } from "react";

function WizardApp() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    shipping: "",
    billing: "",
    payment: ""
  });

  const isValid = () => {
    if (step === 0) return data.shipping !== "";
    if (step === 1) return data.billing !== "";
    if (step === 2) return data.payment !== "";
    return true;
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Wizard</h2>

      <div>
        <button onClick={() => setStep(0)}>Shipping</button>
        <button onClick={() => step > 0 && setStep(1)}>Billing</button>
        <button onClick={() => step > 1 && setStep(2)}>Payment</button>
        <button onClick={() => step > 2 && setStep(3)}>Review</button>
      </div>

      <hr />

      {step === 0 && (
        <>
          <h3>Shipping</h3>
          <input
            placeholder="Shipping address"
            value={data.shipping}
            onChange={(e) =>
              setData({ ...data, shipping: e.target.value })
            }
          />
          {!isValid() && <p style={{ color: "red" }}>Required</p>}
        </>
      )}

      {step === 1 && (
        <>
          <h3>Billing</h3>
          <input
            placeholder="Billing address"
            value={data.billing}
            onChange={(e) =>
              setData({ ...data, billing: e.target.value })
            }
          />
          {!isValid() && <p style={{ color: "red" }}>Required</p>}
        </>
      )}

      {step === 2 && (
        <>
          <h3>Payment</h3>
          <input
            placeholder="Payment details"
            value={data.payment}
            onChange={(e) =>
              setData({ ...data, payment: e.target.value })
            }
          />
          {!isValid() && <p style={{ color: "red" }}>Required</p>}
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review</h3>
          <p>Shipping: {data.shipping}</p>
          <p>Billing: {data.billing}</p>
          <p>Payment: {data.payment}</p>
        </>
      )}

      <br />

      {step > 0 && (
        <button onClick={() => setStep(step - 1)}>Back</button>
      )}

      {step < 3 && (
        <button
          onClick={() => isValid() && setStep(step + 1)}
          disabled={!isValid()}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default WizardApp;
