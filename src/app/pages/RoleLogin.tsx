import React, { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import pncLogo from "../../assets/PNC_LOGO.png";
import ccsLogo from "../../assets/CSS_LOGO.png";

type Role = "student" | "admin" | "faculty";

function isRole(value: string | undefined): value is Role {
  return value === "student" || value === "admin" || value === "faculty";
}

const ROLE_META: Record<
  Role,
  { title: string; helper: string; idLabel: string; idPlaceholder: string; accent: string }
> = {
  student: {
    title: "Student Login",
    helper: "Use your Student Number and password to sign in.",
    idLabel: "Student Number",
    idPlaceholder: "e.g., 2026-00001",
    accent: "#10b981",
  },
  faculty: {
    title: "Faculty Login",
    helper: "Use your username and password to sign in.",
    idLabel: "Username",
    idPlaceholder: "Enter your faculty username",
    accent: "#06b6d4",
  },
  admin: {
    title: "Admin Login",
    helper: "Use your username and password to sign in.",
    idLabel: "Username",
    idPlaceholder: "Enter your admin username",
    accent: "#1f2937",
  },
};

export default function RoleLogin() {
  const params = useParams();
  const navigate = useNavigate();

  const role: Role = useMemo(() => {
    const value = params.role;
    return isRole(value) ? value : "student";
  }, [params.role]);

  const meta = ROLE_META[role];
  const portalTitle =
    role === "student" ? "Student Portal" : role === "faculty" ? "Faculty Portal" : "Admin Portal";
  const logoSrc = role === "admin" ? pncLogo : ccsLogo;

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [touched, setTouched] = useState<{ identifier: boolean; password: boolean }>({
    identifier: false,
    password: false,
  });

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const identifierError =
    touched.identifier && identifier.trim().length === 0 ? `${meta.idLabel} is required.` : "";
  const passwordError =
    touched.password && password.trim().length === 0 ? "Password is required." : "";

  const hasError = Boolean(identifierError || passwordError);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setDidSubmit(false);
    setLoginError("");
    setTouched({ identifier: true, password: true });
    if (identifier.trim().length === 0 || password.trim().length === 0) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("ccs_portal_role", role);
        localStorage.setItem("ccs_portal_user", JSON.stringify(data.user));
        setDidSubmit(true);

        if (role === "student") navigate("/student-dashboard");
        else if (role === "faculty") navigate("/faculty-dashboard");
        else navigate("/admin-dashboard");
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (error) {
      setLoginError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portal-bg d-flex align-items-center justify-content-center px-3 py-4">
      <div className="portal-surface w-100" style={{ maxWidth: 520 }}>
        <header className="portal-header d-flex align-items-center justify-content-between gap-3">
          <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
            <div className="portal-logo d-flex align-items-center justify-content-center">
              <img
                src={logoSrc}
                alt="University logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="portal-title" style={{ color: "var(--portal-text)" }}>
                {portalTitle}
              </p>
              <p className="portal-subtitle">{meta.title}</p>
            </div>
          </Link>
          <span
            className="badge"
            style={{
              background: `${meta.accent}14`,
              color: meta.accent,
              border: `1px solid ${meta.accent}2e`,
              borderRadius: 999,
              padding: "0.45rem 0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2px",
            }}
          >
            {role.toUpperCase()}
          </span>
        </header>

        <div className="px-4 pb-4">
          <p className="mb-4" style={{ color: "rgba(15, 23, 42, 0.64)" }}>
            {meta.helper}
          </p>

          {loginError && (
            <div
              className="mb-3 p-3 rounded"
              style={{
                background: "#fee2e2",
                border: "1px solid #fecaca",
                color: "#dc2626",
              }}
              role="alert"
            >
              {loginError}
            </div>
          )}

          {didSubmit && (
            <div
              className="mb-3 p-3 rounded"
              style={{
                background: `${meta.accent}12`,
                border: `1px solid ${meta.accent}2e`,
                color: "rgba(15, 23, 42, 0.8)",
              }}
              role="status"
            >
              Login successful! Redirecting...
            </div>
          )}

          <form onSubmit={onSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label" htmlFor="identifier">
                {meta.idLabel}
              </label>
              <input
                id="identifier"
                className={`form-control portal-input ${identifierError ? "is-invalid" : ""}`}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, identifier: true }))}
                placeholder={meta.idPlaceholder}
                autoComplete={role === "student" ? "username" : "username"}
              />
              {identifierError && <div className="portal-error">{identifierError}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`form-control portal-input ${passwordError ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              {passwordError && <div className="portal-error">{passwordError}</div>}
            </div>

            <button
              type="submit"
              className="btn portal-btn w-100"
              disabled={loading}
              style={{
                background: meta.accent,
                color: "white",
                border: "1px solid rgba(0,0,0,0)",
                opacity: (hasError && (touched.identifier || touched.password)) || loading ? 0.95 : 1,
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <Link to="/" className="text-sm" style={{ color: "rgba(15, 23, 42, 0.7)" }}>
                Back to role selection
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

