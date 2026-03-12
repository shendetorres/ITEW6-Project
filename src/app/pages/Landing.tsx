import { useNavigate } from "react-router";
import { Link } from "react-router";
import pncLogo from "../../assets/PNC_LOGO.png";
import ccsLogo from "../../assets/CSS_LOGO.png";

type Role = "student" | "faculty";

function IconUser(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <path
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUsers(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <path
        d="M9.5 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 9.5 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M2.75 20a6.75 6.75 0 0 1 13.5 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 10.25a3 3 0 1 0-1.9-5.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18.2 20a6.9 6.9 0 0 0-3.2-5.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDoc(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <path
        d="M7 3.75h7l3 3V20.25A1.5 1.5 0 0 1 15.5 21.75H7A1.5 1.5 0 0 1 5.5 20.25V5.25A1.5 1.5 0 0 1 7 3.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3.75V7.5h3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 11.25h7M8 14.25h7M8 17.25h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalendar(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <path
        d="M7 4.5V3M17 4.5V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 8.25h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.25 5.25h11.5A1.5 1.5 0 0 1 19.25 6.75v12A1.5 1.5 0 0 1 17.75 20.25H6.25A1.5 1.5 0 0 1 4.75 18.75v-12A1.5 1.5 0 0 1 6.25 5.25Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 11.25h3M13 11.25h3M8 14.5h3M13 14.5h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RoleSelectCard(props: {
  role: Role;
  title: string;
  description: string;
  features: string[];
  accent: string;
  icon: "user" | "users";
  continueTo: string;
}) {
  const navigate = useNavigate();

  const Icon = props.icon === "users" ? IconUsers : IconUser;

  return (
    <div className="portal-role-card p-4">
      <div className="d-flex justify-content-center mb-3">
        <div
          className="portal-role-icon"
          style={{
            background: `${props.accent}1a`,
            borderColor: `${props.accent}33`,
            color: props.accent,
          }}
        >
          <Icon className="portal-feature-icon" />
        </div>
      </div>

      <p className="portal-card-title text-center" style={{ fontSize: "1.25rem" }}>
        {props.title}
      </p>
      <p className="portal-card-help text-center">{props.description}</p>

      <ul className="portal-feature-list">
        {props.features.slice(0, 3).map((text, idx) => {
          const FeatureIcon = idx === 1 ? IconCalendar : IconDoc;
          return (
            <li key={`${props.role}-${idx}`} className="portal-feature-item justify-content-center">
              <FeatureIcon className="portal-feature-icon" />
              <span>{text}</span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="btn portal-btn w-100 portal-card-action"
        style={{
          background: `${props.accent}12`,
          borderColor: `${props.accent}1f`,
          color: props.accent,
        }}
        onClick={() => navigate(props.continueTo)}
      >
        Continue to {props.title} Login
      </button>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="portal-bg d-flex justify-content-center px-3 pt-3 pb-4">
      <div className="w-100" style={{ maxWidth: 1100 }}>
        <header className="portal-header">
          <div className="portal-logos">
            <div className="portal-logo-lg d-flex align-items-center justify-content-center">
              <img
                src={pncLogo}
                alt="PNC logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="portal-logo-lg d-flex align-items-center justify-content-center">
              <img
                src={ccsLogo}
                alt="CCS logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <h1 className="portal-system-title">CCS Comprehensive Profiling System</h1>
        </header>

        <div
          className="portal-surface px-4 pb-3 pt-3"
          style={{ maxWidth: 820, margin: "1.25rem auto 0" }}
        >
          <div className="portal-card-grid">
            <RoleSelectCard
              role="student"
              title="Student"
              description="Access your profile, enrollment details, and academic records."
              features={["View Profile & Records", "Check Schedule", "Track Requirements"]}
              accent="#ea580c"
              icon="user"
              continueTo="/login/student"
            />

            <RoleSelectCard
              role="faculty"
              title="Faculty"
              description="Manage student profiling, research, and academic information."
              features={["Student Profiling", "Manage Research", "View Schedules"]}
              accent="#f97316"
              icon="users"
              continueTo="/login/faculty"
            />
          </div>
        </div>

        <div className="mt-2 px-1 text-center" style={{ color: "rgba(15, 23, 42, 0.65)" }}>
          <small>
            © {new Date().getFullYear()} CCS Portal •{" "}
            <Link
              to="/login/admin"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              For authorized personnel only
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

