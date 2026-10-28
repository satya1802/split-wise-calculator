// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Clock, AlertCircle, CheckCircle } = Icons;

const PRODUCT = "Splitwise Calculator";
const PAGE_TITLE = "Splitwise Calculator — sign in or create your account";
const VERIFY_WINDOW_HOURS = 24;

// Accounts already in the demo directory (users: email, is_verified)
const ACCOUNTS = [
  { email: "alex@example.com", password: "greenhouse2026", is_verified: false },
  { email: "mira.okonkwo@example.com", password: "lanternlight", is_verified: true },
  { email: "jonas.weber@example.com", password: "fennel-and-figs", is_verified: true },
];

const tint = (pct) => `color-mix(in srgb, ${brand.primaryColor} ${pct}%, ${brand.backgroundColor})`;
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function Screen() {
  const navigate = useNavigate();
  // sign in
  const [signinEmail, setSigninEmail] = React.useState("alex@example.com");
  const [signinPassword, setSigninPassword] = React.useState("");
  const [signinStatus, setSigninStatus] = React.useState("idle"); // idle | invalid | unverified | signing-in
  // create account
  const [regEmail, setRegEmail] = React.useState("");
  const [regPassword, setRegPassword] = React.useState("");
  const [regConfirm, setRegConfirm] = React.useState("");
  const [regErrors, setRegErrors] = React.useState({});
  const [regStatus, setRegStatus] = React.useState("idle"); // idle | creating | created
  // verification banner
  const [pendingEmail, setPendingEmail] = React.useState("alex@example.com");
  const [resendStatus, setResendStatus] = React.useState("idle"); // idle | sending | sent
  const [resendCount, setResendCount] = React.useState(1);

  React.useEffect(() => {
    if (signinStatus !== "signing-in") return undefined;
    const t = setTimeout(() => navigate("groups"), 650);
    return () => clearTimeout(t);
  }, [signinStatus]);

  React.useEffect(() => {
    if (regStatus !== "creating") return undefined;
    const t = setTimeout(() => setRegStatus("created"), 650);
    return () => clearTimeout(t);
  }, [regStatus]);

  React.useEffect(() => {
    if (resendStatus !== "sending") return undefined;
    const t = setTimeout(() => {
      setResendStatus("sent");
      setResendCount((n) => n + 1);
    }, 600);
    return () => clearTimeout(t);
  }, [resendStatus]);

  const pill = { borderRadius: 999, border: 0, backgroundColor: tint(8), color: brand.primaryColor };
  const panel = { backgroundColor: tint(6), borderRadius: "170px 170px 24px 24px" };
  const label = { color: brand.neutralColor };

  function handleSignIn(e) {
    e.preventDefault();
    const found = ACCOUNTS.find((a) => a.email === signinEmail.trim().toLowerCase());
    if (!isEmail(signinEmail) || signinPassword.length < 8 || !found || found.password !== signinPassword) {
      setSigninStatus("invalid");
      return;
    }
    if (!found.is_verified) {
      setPendingEmail(found.email);
      setResendStatus("idle");
      setSigninStatus("unverified");
      return;
    }
    setSigninStatus("signing-in");
  }

  function handleRegister(e) {
    e.preventDefault();
    const next = {};
    if (!isEmail(regEmail)) next.email = "that does not look like an email address — check for a typo.";
    else if (ACCOUNTS.some((a) => a.email === regEmail.trim().toLowerCase()))
      next.email = "that email is already in use. sign in on the left instead.";
    if (regPassword.length < 8) next.password = "passwords must be at least 8 characters.";
    if (regConfirm !== regPassword) next.confirm = "the two passwords do not match yet.";
    setRegErrors(next);
    if (Object.keys(next).length > 0) return;
    setPendingEmail(regEmail.trim().toLowerCase());
    setResendStatus("idle");
    setResendCount(1);
    setRegStatus("creating");
  }

  const signingIn = signinStatus === "signing-in";
  const creating = regStatus === "creating";

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: brand.backgroundColor, color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <style>{`
        .atr-ctl:focus-visible { outline: 2px solid ${brand.primaryColor}; outline-offset: 3px; }
        .atr-ctl:hover:not(:disabled) { filter: brightness(0.98); }
        @keyframes atr-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes atr-pulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
        .atr-rise { animation: atr-rise .34s ease-out both; }
        .atr-pulse { animation: atr-pulse 1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .atr-rise, .atr-pulse { animation: none !important; }
          .atr-ctl { transition: none !important; }
        }
      `}</style>

      <header className="px-10 py-5" style={{ backgroundColor: tint(10) }}>
        <p className="text-lg italic" style={{ fontFamily: brand.fontHeading }}>{PRODUCT}</p>
      </header>

      <div className="flex flex-1 justify-center px-6 py-12">
        <main className="w-full max-w-4xl">
          {/* Row 1 — page title */}
          <div data-wf="b-0-0" className="text-center">
            <h1 className="text-3xl italic leading-tight sm:text-4xl" style={{ fontFamily: brand.fontHeading }}>
              {PAGE_TITLE}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm lowercase" style={label}>
              keep every trip, flat and dinner tab in one calm place — split it, settle it, forget it.
            </p>
          </div>

          {/* Row 2 — the two forms */}
          <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2">
            <form id="signin-form" className="flex h-full flex-col" onSubmit={handleSignIn} noValidate>
              <section data-wf="b-1-0" className="atr-rise flex-1 px-7 pb-8 pt-14 text-left" style={panel}>
                <h2 className="text-center text-2xl italic" style={{ fontFamily: brand.fontHeading }}>Sign in</h2>
                <p className="mt-2 text-center text-sm lowercase" style={label}>
                  welcome back — your groups are where you left them.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="signin-email" className="block pl-4 text-xs lowercase" style={label}>Email</label>
                    <input
                      data-wf="i-1-0-0"
                      id="signin-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="atr-ctl h-12 w-full px-5 text-sm outline-none transition-[filter]"
                      style={pill}
                      value={signinEmail}
                      onChange={(e) => { setSigninEmail(e.target.value); if (signinStatus === "invalid") setSigninStatus("idle"); }}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="signin-password" className="block pl-4 text-xs lowercase" style={label}>Password</label>
                    <input
                      data-wf="i-1-0-1"
                      id="signin-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      aria-describedby="signin-help"
                      className="atr-ctl h-12 w-full px-5 text-sm outline-none transition-[filter]"
                      style={pill}
                      value={signinPassword}
                      onChange={(e) => { setSigninPassword(e.target.value); if (signinStatus === "invalid") setSigninStatus("idle"); }}
                    />
                    <p id="signin-help" className="pl-4 text-xs lowercase" style={label}>
                      signing out later ends the session on this device only.
                    </p>
                  </div>
                </div>
              </section>
            </form>

            <form id="register-form" className="flex h-full flex-col" onSubmit={handleRegister} noValidate>
              <section data-wf="b-1-1" className="atr-rise flex-1 px-7 pb-8 pt-14 text-left" style={panel}>
                <h2 className="text-center text-2xl italic" style={{ fontFamily: brand.fontHeading }}>Create account</h2>
                <p className="mt-2 text-center text-sm lowercase" style={label}>
                  new here? we will email you a link to confirm your address.
                </p>

                {regStatus === "created" ? (
                  <div role="status" className="mt-7 px-4 py-6 text-center" style={{ backgroundColor: tint(10), borderRadius: 24 }}>
                    <CheckCircle className="mx-auto h-6 w-6" aria-hidden="true" style={{ color: brand.accentColor }} />
                    <p className="mt-3 text-lg italic" style={{ fontFamily: brand.fontHeading }}>account started.</p>
                    <p className="mt-2 text-sm lowercase" style={label}>
                      we sent a verification link to <span className="font-semibold" style={{ color: brand.primaryColor }}>{pendingEmail}</span>. open it within{" "}
                      <span style={{ fontVariantNumeric: "tabular-nums" }}>{VERIFY_WINDOW_HOURS}</span> hours, then sign in on the left.
                    </p>
                    <button
                      type="button"
                      className="atr-ctl mt-4 text-xs italic underline underline-offset-4"
                      style={{ color: brand.primaryColor, fontFamily: brand.fontHeading }}
                      onClick={() => { setRegStatus("idle"); setRegEmail(""); setRegPassword(""); setRegConfirm(""); setRegErrors({}); }}
                    >
                      register a different email
                    </button>
                  </div>
                ) : (
                  <div className="mt-7 space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="reg-email" className="block pl-4 text-xs lowercase" style={label}>Email</label>
                      <input
                        data-wf="i-1-1-0"
                        id="reg-email"
                        name="reg-email"
                        type="email"
                        autoComplete="email"
                        placeholder="mira.okonkwo@example.com"
                        aria-invalid={regErrors.email ? "true" : undefined}
                        aria-describedby={regErrors.email ? "reg-email-error" : undefined}
                        className="atr-ctl h-12 w-full px-5 text-sm outline-none transition-[filter]"
                        style={pill}
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                      />
                      {regErrors.email && (
                        <p id="reg-email-error" className="atr-rise flex items-start gap-1.5 pl-4 text-xs lowercase" style={{ color: brand.primaryColor }}>
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{regErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="reg-password" className="block pl-4 text-xs lowercase" style={label}>Password (at least 8 characters)</label>
                      <input
                        data-wf="i-1-1-1"
                        id="reg-password"
                        name="reg-password"
                        type="password"
                        autoComplete="new-password"
                        aria-invalid={regErrors.password ? "true" : undefined}
                        aria-describedby={regErrors.password ? "reg-password-error" : "reg-password-count"}
                        className="atr-ctl h-12 w-full px-5 text-sm outline-none transition-[filter]"
                        style={pill}
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                      />
                      {regErrors.password ? (
                        <p id="reg-password-error" className="atr-rise flex items-start gap-1.5 pl-4 text-xs lowercase" style={{ color: brand.primaryColor }}>
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{regErrors.password}</span>
                        </p>
                      ) : (
                        <p id="reg-password-count" className="pl-4 text-xs lowercase" style={{ ...label, fontVariantNumeric: "tabular-nums" }}>
                          {regPassword.length} of 8 characters
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="reg-confirm" className="block pl-4 text-xs lowercase" style={label}>Confirm password</label>
                      <input
                        data-wf="i-1-1-2"
                        id="reg-confirm"
                        name="reg-confirm"
                        type="password"
                        autoComplete="new-password"
                        aria-invalid={regErrors.confirm ? "true" : undefined}
                        aria-describedby={regErrors.confirm ? "reg-confirm-error" : undefined}
                        className="atr-ctl h-12 w-full px-5 text-sm outline-none transition-[filter]"
                        style={pill}
                        value={regConfirm}
                        onChange={(e) => setRegConfirm(e.target.value)}
                      />
                      {regErrors.confirm && (
                        <p id="reg-confirm-error" className="atr-rise flex items-start gap-1.5 pl-4 text-xs lowercase" style={{ color: brand.primaryColor }}>
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{regErrors.confirm}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </section>
            </form>
          </div>

          {/* Row 3 — the two form buttons */}
          <div className="mt-5 grid items-stretch gap-8 md:grid-cols-2">
            <button
              data-wf="b-2-0"
              type="submit"
              form="signin-form"
              disabled={signingIn}
              className="atr-ctl inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-wait"
              style={{ borderRadius: 999, backgroundColor: brand.accentColor, color: brand.backgroundColor, opacity: signingIn ? 0.75 : 1 }}
            >
              {signingIn ? (
                <>
                  <Clock className="atr-pulse h-4 w-4" aria-hidden="true" />
                  <span>opening your groups…</span>
                </>
              ) : (
                <span>Sign in</span>
              )}
            </button>

            <button
              data-wf="b-2-1"
              type="submit"
              form="register-form"
              disabled={creating || regStatus === "created"}
              className="atr-ctl inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
              style={{ borderRadius: 999, backgroundColor: tint(12), color: brand.primaryColor, opacity: creating || regStatus === "created" ? 0.6 : 1 }}
            >
              {creating ? (
                <>
                  <Clock className="atr-pulse h-4 w-4" aria-hidden="true" />
                  <span>creating your account…</span>
                </>
              ) : regStatus === "created" ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span>Account created</span>
                </>
              ) : (
                <span>Create account</span>
              )}
            </button>
          </div>

          {/* Row 4 — credentials message */}
          <div
            data-wf="b-3-0"
            role={signinStatus === "invalid" ? "alert" : undefined}
            className={`mt-8 px-6 py-4 text-center text-sm ${signinStatus === "invalid" ? "atr-rise" : ""}`}
            style={{ backgroundColor: signinStatus === "invalid" ? tint(12) : tint(5), borderRadius: 24 }}
          >
            {signinStatus === "invalid" ? (
              <p className="flex items-center justify-center gap-2 font-semibold" style={{ color: brand.primaryColor }}>
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>That email or password is not correct. Passwords must be at least 8 characters.</span>
              </p>
            ) : (
              <p className="lowercase" style={label}>
                your email is only used for sign-in, group invites and settle-up reminders. nothing else.
              </p>
            )}
          </div>

          {/* Row 5 — verification notice and resend */}
          <div className="mt-6 grid gap-5 md:grid-cols-3 md:items-center">
            <div
              data-wf="b-4-0"
              role={signinStatus === "unverified" ? "alert" : undefined}
              className={`px-6 py-5 text-sm md:col-span-2 ${signinStatus === "unverified" ? "atr-rise" : ""}`}
              style={{ backgroundColor: signinStatus === "unverified" ? tint(12) : tint(6), borderRadius: 24 }}
            >
              <p className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" style={{ color: brand.accentColor }} />
                <span>
                  <span className="font-semibold">Not verified yet.</span> Your account is not verified yet. Open the verification link we emailed to{" "}
                  <span className="font-semibold">{pendingEmail}</span> to activate it.
                </span>
              </p>
              <p className="mt-2 pl-6 text-xs lowercase" style={{ ...label, fontVariantNumeric: "tabular-nums" }}>
                {resendStatus === "sent"
                  ? `sent again just now — ${resendCount} links sent today, only the newest one works. it expires in ${VERIFY_WINDOW_HOURS} hours.`
                  : `the link expires ${VERIFY_WINDOW_HOURS} hours after it is sent. already opened it? sign in above.`}
              </p>
            </div>

            <button
              data-wf="b-4-1"
              type="button"
              disabled={resendStatus === "sending"}
              onClick={() => setResendStatus("sending")}
              className="atr-ctl inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-wait"
              style={{ borderRadius: 999, backgroundColor: tint(12), color: brand.primaryColor, opacity: resendStatus === "sending" ? 0.65 : 1 }}
            >
              {resendStatus === "sending" ? (
                <>
                  <Clock className="atr-pulse h-4 w-4" aria-hidden="true" />
                  <span>sending…</span>
                </>
              ) : resendStatus === "sent" ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span>Verification email sent</span>
                </>
              ) : (
                <span>Resend verification email</span>
              )}
            </button>
          </div>

          <p className="mt-10 text-center text-xs lowercase" style={label}>
            splitwise calculator tracks who owes whom. it never moves real money.
          </p>
        </main>
      </div>
    </div>
  );
}
