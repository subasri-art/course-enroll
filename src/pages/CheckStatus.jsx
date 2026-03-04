// CheckStatus.jsx
import { useState, useEffect } from "react";

function CheckStatus() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("studentApplication");
    if (saved) {
      setStudent(JSON.parse(saved));
    }
  }, []);

  if (!student) {
    return (
      <div style={styles.noApplicationContainer}>
        <h2 style={styles.noApplicationText}>No Application Found</h2>
      </div>
    );
  }

  const statusStyles = {
    Approved: { backgroundColor: "#D4EDDA", color: "#155724" },
    Rejected: { backgroundColor: "#F8D7DA", color: "#721C24" },
    Review: { backgroundColor: "#FFF3CD", color: "#856404" },
  };

  const statusMessage =
    student.status === "Approved"
      ? "✅ Your application is approved! Our management will reach you in 1 day."
      : student.status === "Rejected"
      ? "❌ Your application is rejected."
      : "⏳ Your application is under review.";

  const currentStatusStyle =
    student.status === "Approved"
      ? statusStyles.Approved
      : student.status === "Rejected"
      ? statusStyles.Rejected
      : statusStyles.Review;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Application Status</h2>
        <div style={styles.infoRow}>
          <span style={styles.label}>Admission ID:</span>
          <span style={styles.value}>{student.applicationId}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Name:</span>
          <span style={styles.value}>{student.name}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Course:</span>
          <span style={styles.value}>{student.course}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Status:</span>
          <span style={{ ...styles.statusBadge, ...currentStatusStyle }}>
            {student.status}
          </span>
        </div>
        <p style={styles.message}>{statusMessage}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6A82FB, #FC5C7D)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "40px 30px",
    maxWidth: "450px",
    width: "100%",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  header: {
    marginBottom: "25px",
    color: "#333",
    fontSize: "28px",
    fontWeight: "600",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  label: {
    fontWeight: "500",
    color: "#555",
  },
  value: {
    fontWeight: "600",
    color: "#111",
  },
  statusBadge: {
    padding: "5px 15px",
    borderRadius: "20px",
    fontWeight: "600",
    minWidth: "100px",
    textAlign: "center",
    display: "inline-block",
  },
  message: {
    marginTop: "25px",
    fontSize: "16px",
    color: "#444",
    fontWeight: "500",
  },
  noApplicationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFB75E, #ED8F03)",
  },
  noApplicationText: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "600",
  },
};

export default CheckStatus;