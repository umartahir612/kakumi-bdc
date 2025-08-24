import { useState } from "react";
import "./Compliance.css";

export default function CompliancePage() {
  const [report, setReport] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setReport("");
  };

  const documents = [
    { name: "AML/CFT Policy", link: "/docs/aml_policy.pdf" },
    { name: "Compliance Manual", link: "/docs/compliance_manual.pdf" },
    { name: "Training Register", link: "/docs/training_register.pdf" },
  ];

  const trainingData = [
    { staff: "Sani Dahiru", role: "Cashier", lastTraining: "March 2025" },
    { staff: "Abubakar Umar Tahir", role: "Compliance Officer", lastTraining: "February 2025" },
    { staff: "Auwal Shuaibu", role: "Teller", lastTraining: "January 2025" },
  ];

  return (
    <div className="compliance-page">
      {/* Banner */}
      <div className="compliance-banner">
        ⚖️ Our Commitment to Compliance
      </div>

      {/* Documents */}
      <div className="compliance-section">
        <h2>📂 Key Compliance Documents</h2>
        <ul>
          {documents.map((doc, i) => (
            <li key={i}>
              <a href={doc.link} download>{doc.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Training Register */}
      <div className="compliance-section">
        <h2>📋 Staff Training Register</h2>
        <table className="compliance-table">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Role</th>
              <th>Last Training</th>
            </tr>
          </thead>
          <tbody>
            {trainingData.map((t, i) => (
              <tr key={i}>
                <td>{t.staff}</td>
                <td>{t.role}</td>
                <td>{t.lastTraining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Compliance Officer */}
      <div className="compliance-section officer-box">
        <h2>👨‍💼 Compliance Officer</h2>
        <p><strong>Name:</strong> Abubakar Umar Tahir</p>
        <p><strong>Email:</strong> compliance@kakumibdc.com.ng</p>
        <p><strong>Phone:</strong> +234 813 713 6871</p>
        <p><em>Sign-off: Ensuring AML/CFT compliance and integrity in all operations.</em></p>
      </div>

      {/* Report Form */}
      <div className="compliance-section">
        <h2>📨 Report a Compliance Concern</h2>
        {submitted ? (
          <p className="success-msg">✅ Thank you! Your report has been submitted securely.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Enter your compliance concern here..."
              required
            />
            <button type="submit">Submit Report</button>
          </form>
        )}
      </div>
    </div>
  );
}
