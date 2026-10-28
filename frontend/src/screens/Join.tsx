// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, Badge, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Users, Clock, ArrowRight, AlertCircle, CheckCircle } = Icons;

const INVITE = {
  token: "inv_8K3QD",
  email: "satya.ganaraju@quorq.ai",
  invited_by: "Priya Nair",
  created_at: "26 Oct 2026",
  expires_at: "4 Nov 2026",
};

const GROUP = {
  name: "Goa Trip 2026",
  default_currency: "USD",
  member_count: 5,
};

const MEMBERS = [
  { name: "Priya Nair", role: "admin", joined: "12 Mar 2026" },
  { name: "Arjun Mehta", role: "member", joined: "12 Mar 2026" },
  { name: "Dev Raman", role: "member", joined: "14 Mar 2026" },
  { name: "Lakshmi Iyer", role: "member", joined: "02 Apr 2026" },
  { name: "Tom Whelan", role: "member", joined: "18 Oct 2026" },
];

const LAST_EXPENSE = {
  description: "Beach shack dinner, Anjuna",
  amount: "184.50",
  expense_date: "26 Oct 2026",
  payer: "Arjun Mehta",
};

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const cream = brand.backgroundColor;
  const brass = brand.accentColor;

  const alpha = (hex, a) => {
    const h = hex.replace("#", "");
    const n = parseInt(h, 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  };

  const body = alpha(ink, 0.78);
  const hair = alpha(ink, 0.12);
  const tint = alpha(ink, 0.05);

  const [status, setStatus] = React.useState("pending"); // pending | accepting | accepted | invalid
  const timers = React.useRef([]);

  React.useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const acceptInvitation = () => {
    if (status !== "pending") return;
    setStatus("accepting");
    timers.current.push(
      setTimeout(() => setStatus("accepted"), 900),
      setTimeout(() => navigate("group-detail"), 1900)
    );
  };

  const busy = status === "accepting" || status === "accepted";
  const invalid = status === "invalid";

  const ringStyle = {
    ["--tw-ring-color"]: brass,
    ["--tw-ring-offset-color"]: cream,
  };

  const focusRing =
    "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const acceptLabel =
    status === "accepting"
      ? "adding you to Goa Trip 2026…"
      : status === "accepted"
      ? "you're in — opening the group"
      : "Accept invitation";

  return (
    <main
      className="min-h-screen w-full px-5 py-12 sm:px-8 sm:py-16"
      style={{
        backgroundColor: cream,
        color: ink,
        fontFamily: brand.fontBody,
        backgroundImage: `radial-gradient(62% 38% at 50% 0%, ${alpha(
          brass,
          0.18
        )}, transparent 72%)`,
      }}
    >
      <style>{`
        @keyframes atriumRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes atriumGrow { from { width: 8%; } to { width: 100%; } }
        @keyframes atriumPulse { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }
        .atrium-rise { animation: atriumRise 500ms cubic-bezier(.22,.61,.36,1) both; }
        .atrium-rise-2 { animation: atriumRise 500ms cubic-bezier(.22,.61,.36,1) 90ms both; }
        .atrium-rise-3 { animation: atriumRise 500ms cubic-bezier(.22,.61,.36,1) 180ms both; }
        .atrium-grow { animation: atriumGrow 1000ms linear forwards; }
        .atrium-dot { animation: atriumPulse 1.1s ease-in-out infinite; }
        .atrium-dot:nth-child(2) { animation-delay: .15s; }
        .atrium-dot:nth-child(3) { animation-delay: .3s; }
        @media (prefers-reduced-motion: reduce) {
          .atrium-rise, .atrium-rise-2, .atrium-rise-3, .atrium-grow, .atrium-dot { animation: none !important; }
          * { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[680px]">
        {/* ── Row 1: page title ───────────────────────────────── */}
        <div className="atrium-rise text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px]"
            style={{ backgroundColor: alpha(brass, 0.2), color: ink }}
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>invitation · expires {INVITE.expires_at}</span>
          </p>

          <h1
            data-wf="b-0-0"
            className="mx-auto mt-6 max-w-[16ch] text-[32px] leading-[1.15] sm:text-[40px] transition-opacity duration-500"
            style={{
              fontFamily: brand.fontHeading,
              fontStyle: "italic",
              color: ink,
              opacity: invalid ? 0.45 : 1,
            }}
          >
            You&rsquo;re invited to join &ldquo;{GROUP.name}&rdquo;
          </h1>

          <p
            className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-[1.6]"
            style={{ color: body }}
          >
            {invalid
              ? "the link you opened pointed at this group, but it can no longer be used."
              : `${INVITE.invited_by} sent this to ${INVITE.email} on ${INVITE.created_at}. accepting adds you as a member — you can log expenses and see balances straight away.`}
          </p>
        </div>

        {!invalid && (
          <>
            {/* ── Row 2: group card ──────────────────────────── */}
            <Card
              data-wf="b-1-0"
              className="atrium-rise-2 mt-10 overflow-hidden border-0 p-0 shadow-none transition-shadow duration-500"
              style={{
                backgroundColor: tint,
                border: `1px solid ${status === "accepted" ? alpha(brass, 0.55) : hair}`,
                borderTopLeftRadius: "50% 150px",
                borderTopRightRadius: "50% 150px",
                borderBottomLeftRadius: brand.radius,
                borderBottomRightRadius: brand.radius,
              }}
            >
              <div className="px-6 pb-8 pt-14 text-center sm:px-12">
                <div className="flex items-center justify-center">
                  {MEMBERS.map((m, i) => (
                    <span
                      key={m.name}
                      className="inline-flex rounded-full p-[2px]"
                      style={{
                        backgroundColor: cream,
                        marginLeft: i === 0 ? 0 : -12,
                        zIndex: MEMBERS.length - i,
                      }}
                    >
                      <Avatar name={m.name} className="h-10 w-10" />
                    </span>
                  ))}
                </div>

                <h2
                  className="mt-6 text-[26px] leading-tight sm:text-[28px]"
                  style={{
                    fontFamily: brand.fontHeading,
                    fontStyle: "italic",
                    color: ink,
                  }}
                >
                  {GROUP.name}
                </h2>

                <p
                  className="mt-3 text-[14px]"
                  style={{ color: body, fontVariantNumeric: "tabular-nums" }}
                >
                  {GROUP.member_count} members · currency {GROUP.default_currency} ·
                  invited by {INVITE.invited_by}
                </p>
              </div>

              <div className="h-px" style={{ backgroundColor: hair }} />

              <div className="px-6 py-7 sm:px-12">
                <h3
                  className="text-[13px] tracking-wide"
                  style={{ color: alpha(ink, 0.6) }}
                >
                  who&rsquo;s already in
                </h3>

                <ul className="mt-4">
                  {MEMBERS.map((m) => (
                    <li
                      key={m.name}
                      className="flex items-center gap-3 py-3"
                      style={{ borderTop: `1px solid ${hair}` }}
                    >
                      <Avatar name={m.name} className="h-9 w-9 shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px]" style={{ color: ink }}>
                          {m.name}
                        </span>
                        <span className="text-[13px]" style={{ color: alpha(ink, 0.62) }}>
                          {m.role === "admin" ? "group admin" : "member"}
                        </span>
                      </span>
                      <span
                        className="hidden shrink-0 text-[13px] sm:block"
                        style={{ color: body, fontVariantNumeric: "tabular-nums" }}
                      >
                        joined {m.joined}
                      </span>
                    </li>
                  ))}

                  <li
                    className="flex items-center gap-3 py-3"
                    style={{ borderTop: `1px solid ${hair}` }}
                  >
                    <Avatar name="Satya Ganaraju" className="h-9 w-9 shrink-0" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px]" style={{ color: ink }}>
                        {INVITE.email}
                      </span>
                      <span className="text-[13px]" style={{ color: alpha(ink, 0.62) }}>
                        that&rsquo;s you
                      </span>
                    </span>
                    <Badge
                      className="shrink-0 rounded-full border-0 px-3 py-1 text-[12px]"
                      style={{ backgroundColor: alpha(brass, 0.22), color: ink }}
                    >
                      {status === "accepted" ? "member" : "pending invite"}
                    </Badge>
                  </li>
                </ul>
              </div>

              <div className="h-px" style={{ backgroundColor: hair }} />

              <div
                className="flex flex-col gap-2 px-6 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between sm:px-12"
                style={{ color: body, fontVariantNumeric: "tabular-nums" }}
              >
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  link {INVITE.token} · expires {INVITE.expires_at}
                </span>
                <span>
                  last expense: {LAST_EXPENSE.description} · ${LAST_EXPENSE.amount} ·{" "}
                  {LAST_EXPENSE.expense_date}
                </span>
              </div>
            </Card>

            {/* ── Row 3: actions ─────────────────────────────── */}
            <div className="atrium-rise-3 mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Button
                  data-wf="b-2-0"
                  type="button"
                  onClick={acceptInvitation}
                  disabled={busy}
                  aria-busy={status === "accepting"}
                  className={`h-14 w-full justify-center rounded-full border-0 px-6 text-[15px] font-medium shadow-none transition-transform duration-200 hover:-translate-y-[2px] active:translate-y-0 disabled:cursor-not-allowed ${focusRing}`}
                  style={{
                    ...ringStyle,
                    backgroundColor: ink,
                    color: cream,
                    opacity: busy ? 0.82 : 1,
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {status === "accepting" ? (
                      <span className="inline-flex items-center gap-1" aria-hidden="true">
                        <span
                          className="atrium-dot inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: cream }}
                        />
                        <span
                          className="atrium-dot inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: cream }}
                        />
                        <span
                          className="atrium-dot inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: cream }}
                        />
                      </span>
                    ) : status === "accepted" ? (
                      <CheckCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                    ) : (
                      <Check className="h-[18px] w-[18px]" aria-hidden="true" />
                    )}
                    {acceptLabel}
                  </span>
                </Button>

                <Button
                  data-wf="b-2-1"
                  type="button"
                  onClick={() => navigate("auth")}
                  disabled={busy}
                  className={`h-14 w-full justify-center rounded-full px-6 text-[15px] font-medium shadow-none transition-colors duration-200 disabled:cursor-not-allowed ${focusRing}`}
                  style={{
                    ...ringStyle,
                    backgroundColor: "transparent",
                    border: `1px solid ${alpha(ink, 0.28)}`,
                    color: ink,
                    opacity: busy ? 0.45 : 1,
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    Register first to join
                    <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                </Button>
              </div>

              <div className="mt-5" role="status" aria-live="polite">
                {status === "accepted" ? (
                  <div
                    className="rounded-[24px] px-5 py-4"
                    style={{ backgroundColor: alpha(brass, 0.16) }}
                  >
                    <p className="text-[14px]" style={{ color: ink }}>
                      welcome to {GROUP.name} — opening the group workspace.
                    </p>
                    <div
                      className="mt-3 h-1 w-full overflow-hidden rounded-full"
                      style={{ backgroundColor: alpha(ink, 0.12) }}
                    >
                      <div
                        className="atrium-grow h-full rounded-full"
                        style={{ backgroundColor: ink, width: "8%" }}
                      />
                    </div>
                  </div>
                ) : status === "accepting" ? (
                  <p className="text-center text-[14px]" style={{ color: body }}>
                    adding {INVITE.email} to {GROUP.name}…
                  </p>
                ) : (
                  <p
                    className="mx-auto max-w-[58ch] text-center text-[13px] leading-[1.7]"
                    style={{ color: body }}
                  >
                    already have a verified account on this email? accepting signs you in
                    as {INVITE.email}. new here &mdash; register, verify your email, and
                    we&rsquo;ll bring you back to this invitation.
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── Row 4: invitation no longer valid ────────────── */}
        {invalid && (
          <div
            data-wf="b-3-0"
            className="atrium-rise mt-10 overflow-hidden px-6 py-10 sm:px-12"
            style={{
              backgroundColor: tint,
              border: `1px solid ${hair}`,
              borderTopLeftRadius: "50% 90px",
              borderTopRightRadius: "50% 90px",
              borderBottomLeftRadius: brand.radius,
              borderBottomRightRadius: brand.radius,
              color: body,
            }}
          >
            <div className="flex justify-center">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: alpha(brass, 0.22), color: ink }}
              >
                <AlertCircle className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            <Empty
              className="[&_*]:text-inherit mt-2"
              title="This invitation is no longer valid"
              description="it expired or was revoked. ask a group admin for a new link — Priya Nair can send one from the group's members page."
              action={
                <Button
                  type="button"
                  onClick={() => navigate("auth")}
                  className={`h-12 rounded-full border-0 px-6 text-[15px] font-medium shadow-none transition-transform duration-200 hover:-translate-y-[2px] active:translate-y-0 ${focusRing}`}
                  style={{ ...ringStyle, backgroundColor: ink, color: cream }}
                >
                  Go to sign in
                </Button>
              }
            />

            <p
              className="mt-6 text-center text-[13px]"
              style={{ color: body, fontVariantNumeric: "tabular-nums" }}
            >
              link {INVITE.token} · sent to {INVITE.email} · expired {INVITE.expires_at}
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-[13px]" style={{ color: alpha(ink, 0.6) }}>
            we only track who owes whom. no money moves through this app.
          </p>
        </div>
      </div>
    </main>
  );
}
