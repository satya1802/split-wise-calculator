// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, ChevronRight, Bell, Home, FileText, Filter, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const SEED_NOTIFICATIONS = [
  {
    id: "ntf_9412",
    type: "new_expense",
    group_id: "grp_goa",
    group_name: "Goa Trip 2026",
    is_read: false,
    created_at: "2026-10-28T07:40:00Z",
    when: "2 hours ago",
    headline: "Dinner at Baga",
    amount: "$240.00",
    person: "Priya Nair",
    message: 'New expense: "Dinner at Baga" $240.00 paid by Priya Nair',
    sub: "your equal share is $48.00",
  },
  {
    id: "ntf_9388",
    type: "payment_reminder",
    group_id: "grp_goa",
    group_name: "Goa Trip 2026",
    is_read: false,
    created_at: "2026-10-27T18:05:00Z",
    when: "Yesterday",
    headline: "you owe Priya Nair",
    amount: "$32.50",
    person: "Priya Nair",
    message: "Reminder: you owe Priya Nair $32.50",
    sub: "outstanding since 14 october",
  },
  {
    id: "ntf_9361",
    type: "payment_reminder",
    group_id: "grp_flat",
    group_name: "Flat 4B Household",
    is_read: false,
    created_at: "2026-10-26T09:20:00Z",
    when: "2 days ago",
    headline: "you owe Sam Diaz",
    amount: "$44.20",
    person: "Sam Diaz",
    message: "Reminder: you owe Sam Diaz $44.20",
    sub: "covers september utilities",
  },
  {
    id: "ntf_9340",
    type: "new_expense",
    group_id: "grp_flat",
    group_name: "Flat 4B Household",
    is_read: true,
    created_at: "2026-10-25T16:02:00Z",
    when: "3 days ago",
    headline: "Electricity bill",
    amount: "$96.00",
    person: "Sam Diaz",
    message: 'New expense: "Electricity bill" $96.00 paid by Sam Diaz',
    sub: "split by shares — your share is $24.00",
  },
  {
    id: "ntf_9312",
    type: "new_expense",
    group_id: "grp_goa",
    group_name: "Goa Trip 2026",
    is_read: true,
    created_at: "2026-10-24T11:15:00Z",
    when: "4 days ago",
    headline: "Scooter rental (3 days)",
    amount: "$75.00",
    person: "Arjun Mehta",
    message: 'New expense: "Scooter rental (3 days)" $75.00 paid by Arjun Mehta',
    sub: "split equally between 3 members",
  },
  {
    id: "ntf_9287",
    type: "payment_reminder",
    group_id: "grp_lisbon",
    group_name: "Lisbon Offsite",
    is_read: true,
    created_at: "2026-10-23T08:45:00Z",
    when: "5 days ago",
    headline: "Nadia Khan owes you",
    amount: "$61.00",
    person: "Nadia Khan",
    message: "Reminder sent: Nadia Khan owes you $61.00",
    sub: "reminder delivered by email and in-app",
  },
  {
    id: "ntf_9260",
    type: "new_expense",
    group_id: "grp_lisbon",
    group_name: "Lisbon Offsite",
    is_read: true,
    created_at: "2026-10-22T20:30:00Z",
    when: "6 days ago",
    headline: "Tapas dinner, Rua Nova",
    amount: "$188.30",
    person: "Nadia Khan",
    message: 'New expense: "Tapas dinner, Rua Nova" $188.30 paid by Nadia Khan',
    sub: "split by exact amounts — your share is $41.10",
  },
  {
    id: "ntf_9233",
    type: "new_expense",
    group_id: "grp_flat",
    group_name: "Flat 4B Household",
    is_read: true,
    created_at: "2026-10-21T10:05:00Z",
    when: "7 days ago",
    headline: "Wi-Fi — October",
    amount: "$39.99",
    person: "Mara Okafor",
    message: 'New expense: "Wi-Fi — October" $39.99 paid by Mara Okafor',
    sub: "split equally between 4 members",
  },
  {
    id: "ntf_9201",
    type: "payment_reminder",
    group_id: "grp_goa",
    group_name: "Goa Trip 2026",
    is_read: true,
    created_at: "2026-10-19T07:00:00Z",
    when: "19 October",
    headline: "you owe Arjun Mehta",
    amount: "$27.80",
    person: "Arjun Mehta",
    message: "Reminder: you owe Arjun Mehta $27.80",
    sub: "settled offline on 20 october",
  },
];

const TAB_DEFS = [
  { key: "all", label: "All" },
  { key: "unread", label: "Unread" },
  { key: "reminders", label: "Payment reminders" },
];

function hexToRgba(hex, alpha) {
  const h = String(hex || "#000000").replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const canvas = brand.backgroundColor;

  const tint = (a) => hexToRgba(ink, a);
  const gold = (a) => hexToRgba(accent, a);

  const [items, setItems] = React.useState(SEED_NOTIFICATIONS);
  const [tab, setTab] = React.useState("all");
  const [loading, setLoading] = React.useState(true);
  const [marking, setMarking] = React.useState(false);
  const [announcement, setAnnouncement] = React.useState("");
  const tabRefs = React.useRef([]);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 480);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!marking) return undefined;
    const t = setTimeout(() => {
      setItems((prev) => {
        const n = prev.filter((i) => !i.is_read).length;
        setAnnouncement(
          n === 1 ? "1 notification marked as read." : n + " notifications marked as read."
        );
        return prev.map((i) => (i.is_read ? i : { ...i, is_read: true }));
      });
      setMarking(false);
    }, 620);
    return () => clearTimeout(t);
  }, [marking]);

  const unreadCount = items.filter((i) => !i.is_read).length;
  const reminderCount = items.filter((i) => i.type === "payment_reminder").length;

  const visible = items.filter((i) => {
    if (tab === "unread") return !i.is_read;
    if (tab === "reminders") return i.type === "payment_reminder";
    return true;
  });

  const markOne = (id, label) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, is_read: true } : i)));
    setAnnouncement("“" + label + "” marked as read.");
  };

  const openGroup = (item) => {
    if (!item.is_read) {
      setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, is_read: true } : i)));
    }
    navigate("group-detail");
  };

  const onTabKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % TAB_DEFS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + TAB_DEFS.length) % TAB_DEFS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TAB_DEFS.length - 1;
    if (next === null) return;
    e.preventDefault();
    setTab(TAB_DEFS[next].key);
    const node = tabRefs.current[next];
    if (node) node.focus();
  };

  const tabLabel = (t) => {
    if (t.key === "unread") return "Unread (" + unreadCount + ")";
    return t.label;
  };

  const emptyCopy = () => {
    if (tab === "unread") {
      return {
        title: "nothing unread",
        description:
          "you're all caught up. new expenses and payment reminders from your groups land here first.",
        actionLabel: "Show all notifications",
        onAction: () => setTab("all"),
      };
    }
    if (tab === "reminders") {
      return {
        title: "no payment reminders",
        description:
          "when you owe someone — or someone owes you — a reminder appears here and goes out by email.",
        actionLabel: "Show all notifications",
        onAction: () => setTab("all"),
      };
    }
    return {
      title: "No notifications yet",
      description: "No notifications yet — you'll see new expenses and payment reminders here.",
      actionLabel: "Go to my groups",
      onAction: () => navigate("groups"),
    };
  };

  const css = `
    @keyframes atrRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes atrPulse { 0%, 100% { opacity: .35; } 50% { opacity: .75; } }
    .atr-row { animation: atrRise .38s cubic-bezier(.22,.8,.3,1) both; }
    .atr-skel { animation: atrPulse 1.5s ease-in-out infinite; }
    .atr-f:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; }
    .atr-row-hit:hover .atr-arch { transform: translateY(-2px); }
    .atr-arch { transition: transform .25s ease, background-color .25s ease; }
    @media (prefers-reduced-motion: reduce) {
      .atr-row, .atr-skel { animation: none !important; }
      .atr-arch { transition: none !important; }
    }
  `;

  const empty = emptyCopy();

  return (
    <div
      className="min-h-full w-full px-6 py-10 sm:px-10 lg:px-12"
      style={{ backgroundColor: canvas, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-5xl">
        {/* Row 1 — title + primary action */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 sm:col-span-8" data-wf="b-0-0">
            <p
              className="mb-3 text-xs uppercase tracking-[0.22em]"
              style={{ color: tint(0.62) }}
            >
              your activity
            </p>
            <h1
              className="text-[34px] leading-tight sm:text-[40px]"
              style={{ fontFamily: brand.fontHeading, fontStyle: "italic", color: ink }}
            >
              Notifications
            </h1>
            <p
              className="mt-3 max-w-[58ch] text-[15px] leading-relaxed"
              style={{ color: tint(0.72), fontVariantNumeric: "tabular-nums" }}
            >
              {unreadCount > 0
                ? unreadCount + " unread across 4 groups · synced 4 minutes ago"
                : "all read · synced 4 minutes ago"}
            </p>
          </div>

          <div className="col-span-12 flex sm:col-span-4 sm:justify-end">
            <Button
              data-wf="b-0-1"
              type="button"
              onClick={() => setMarking(true)}
              disabled={unreadCount === 0 || marking || loading}
              aria-busy={marking ? "true" : "false"}
              className="atr-f inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-6 text-[15px] font-medium transition-opacity sm:w-auto"
              style={{
                backgroundColor: unreadCount === 0 || marking ? tint(0.28) : ink,
                color: canvas,
                borderRadius: 999,
                border: "none",
                opacity: unreadCount === 0 && !marking ? 0.75 : 1,
                cursor: unreadCount === 0 || marking ? "not-allowed" : "pointer",
              }}
            >
              {marking ? (
                <span
                  className="atr-skel inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: canvas }}
                  aria-hidden="true"
                />
              ) : (
                <Check className="h-4 w-4" aria-hidden="true" />
              )}
              <span>{marking ? "Marking as read…" : "Mark all as read"}</span>
            </Button>
          </div>
        </div>

        <p aria-live="polite" className="sr-only">
          {announcement}
        </p>

        {/* Email-delivery notice (in-app still delivered) */}
        <div
          className="mt-8 flex items-start gap-4 px-6 py-4"
          style={{
            backgroundColor: gold(0.14),
            borderRadius: "28px 28px 20px 20px",
          }}
          role="status"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ color: ink }}
            aria-hidden="true"
          />
          <p className="flex-1 text-[14px] leading-relaxed" style={{ color: tint(0.86) }}>
            <span className="font-semibold">email reminders are paused.</span>{" "}
            our mail service rejected the last 4 sends, so the 27 oct reminder to
            nadia khan went out in-app only. nothing is lost — everything still arrives
            on this page.
          </p>
        </div>

        {/* Row 2 — tabs */}
        <div className="mt-8" data-wf="b-1-0">
          <div
            role="tablist"
            aria-label="Filter notifications"
            className="flex flex-wrap gap-2 p-1.5"
            style={{ backgroundColor: tint(0.07), borderRadius: 999 }}
          >
            {TAB_DEFS.map((t, idx) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  data-wf={"i-1-0-" + idx}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  id={"notif-tab-" + t.key}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls="notif-panel"
                  tabIndex={active ? 0 : -1}
                  onKeyDown={(e) => onTabKeyDown(e, idx)}
                  onClick={() => setTab(t.key)}
                  className="atr-f min-h-[44px] px-5 text-[14px] font-medium transition-colors"
                  style={{
                    borderRadius: 999,
                    backgroundColor: active ? ink : "transparent",
                    color: active ? canvas : tint(0.78),
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {tabLabel(t)}
                  {t.key === "reminders" ? (
                    <span className="sr-only">{", " + reminderCount + " items"}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3 — list */}
        <section
          id="notif-panel"
          role="tabpanel"
          aria-labelledby={"notif-tab-" + tab}
          data-wf="b-2-0"
          className="mt-6 overflow-hidden"
          style={{
            backgroundColor: hexToRgba("#ffffff", 0.62),
            borderRadius: "48px 48px 24px 24px",
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 px-7 pb-5 pt-8 sm:px-9">
            <h2
              className="text-[22px]"
              style={{ fontFamily: brand.fontHeading, fontStyle: "italic", color: ink }}
            >
              Recent activity
            </h2>
            <p
              className="text-[13px]"
              style={{ color: tint(0.62), fontVariantNumeric: "tabular-nums" }}
            >
              {loading
                ? "gathering the last 30 days…"
                : visible.length + (visible.length === 1 ? " notification" : " notifications")}
            </p>
          </div>

          {loading ? (
            <ul className="list-none">
              {[0, 1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-5 px-7 py-6 sm:px-9"
                  style={{ borderTop: "1px solid " + tint(0.1) }}
                >
                  <span
                    className="atr-skel block h-12 w-11 shrink-0"
                    style={{ backgroundColor: tint(0.16), borderRadius: "22px 22px 8px 8px" }}
                    aria-hidden="true"
                  />
                  <span className="flex-1 space-y-2.5" aria-hidden="true">
                    <span
                      className="atr-skel block h-3 w-28 rounded-full"
                      style={{ backgroundColor: tint(0.14) }}
                    />
                    <span
                      className="atr-skel block h-4 w-3/5 rounded-full"
                      style={{ backgroundColor: tint(0.14) }}
                    />
                  </span>
                </li>
              ))}
              <li className="sr-only">Loading your notifications.</li>
            </ul>
          ) : visible.length > 0 ? (
            <ul className="list-none">
              {visible.map((n, idx) => {
                const unread = !n.is_read;
                const isReminder = n.type === "payment_reminder";
                const wfId =
                  n.id === "ntf_9412"
                    ? "i-2-0-0"
                    : n.id === "ntf_9388"
                    ? "i-2-0-1"
                    : n.id === "ntf_9340"
                    ? "i-2-0-2"
                    : undefined;
                const Glyph = isReminder ? Bell : FileText;
                return (
                  <li
                    key={n.id}
                    className="atr-row"
                    style={{
                      borderTop: "1px solid " + tint(0.1),
                      animationDelay: Math.min(idx, 6) * 40 + "ms",
                    }}
                  >
                    <div
                      className="atr-row-hit flex items-start gap-5 px-7 py-6 transition-colors sm:px-9"
                      style={{ backgroundColor: unread ? gold(0.09) : "transparent" }}
                    >
                      <span
                        className="atr-arch flex h-12 w-11 shrink-0 items-center justify-center"
                        style={{
                          backgroundColor: unread ? gold(0.3) : tint(0.08),
                          borderRadius: "22px 22px 8px 8px",
                        }}
                        aria-hidden="true"
                      >
                        <Glyph className="h-[18px] w-[18px]" style={{ color: ink }} />
                      </span>

                      <button
                        type="button"
                        data-wf={wfId}
                        onClick={() => openGroup(n)}
                        className="atr-f flex-1 text-left"
                        style={{ borderRadius: 20 }}
                      >
                        <span className="flex flex-wrap items-center gap-2">
                          <span
                            className="text-[11px] uppercase tracking-[0.18em]"
                            style={{ color: tint(0.65) }}
                          >
                            {isReminder ? "payment reminder" : "new expense"}
                          </span>
                          <span
                            className="px-3 py-0.5 text-[12px]"
                            style={{
                              backgroundColor: tint(0.09),
                              color: tint(0.82),
                              borderRadius: 999,
                            }}
                          >
                            {n.group_name}
                          </span>
                        </span>

                        <span
                          className="mt-2 block text-[16px] font-semibold leading-snug"
                          style={{ color: ink, fontVariantNumeric: "tabular-nums" }}
                        >
                          {n.message}
                        </span>

                        <span
                          className="mt-1.5 block text-[13.5px]"
                          style={{ color: tint(0.68), fontVariantNumeric: "tabular-nums" }}
                        >
                          {n.sub} · {n.when}
                        </span>
                      </button>

                      <div className="flex shrink-0 flex-col items-end gap-3">
                        {unread ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-[12px] font-medium"
                            style={{ backgroundColor: ink, color: canvas, borderRadius: 999 }}
                          >
                            <span
                              className="inline-block h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: accent }}
                              aria-hidden="true"
                            />
                            unread
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center gap-1.5 text-[12px]"
                            style={{ color: tint(0.6) }}
                          >
                            <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            read
                          </span>
                        )}

                        {unread ? (
                          <button
                            type="button"
                            onClick={() => markOne(n.id, n.headline)}
                            className="atr-f inline-flex min-h-[36px] items-center gap-1.5 px-3.5 text-[13px] transition-colors"
                            style={{
                              borderRadius: 999,
                              backgroundColor: tint(0.08),
                              color: tint(0.85),
                            }}
                          >
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            Mark read
                            <span className="sr-only">{" — " + n.headline}</span>
                          </button>
                        ) : (
                          <span
                            className="inline-flex items-center gap-1 text-[12px]"
                            style={{ color: tint(0.5) }}
                          >
                            open group
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            /* Row 4 — empty state */
            <div
              data-wf="b-3-0"
              className="px-7 pb-12 pt-6 sm:px-9"
              style={{ borderTop: "1px solid " + tint(0.1) }}
            >
              <div className="mx-auto flex max-w-md flex-col items-center text-center">
                <span
                  className="mb-6 mt-8 flex h-20 w-16 items-center justify-center"
                  style={{
                    backgroundColor: gold(0.18),
                    borderRadius: "32px 32px 10px 10px",
                  }}
                  aria-hidden="true"
                >
                  <Bell className="h-6 w-6" style={{ color: ink }} />
                </span>
                <Empty
                  title={empty.title}
                  description={empty.description}
                  action={
                    <Button
                      type="button"
                      onClick={empty.onAction}
                      className="atr-f mt-2 inline-flex min-h-[44px] items-center gap-2 px-5 text-[14px] font-medium"
                      style={{
                        backgroundColor: "transparent",
                        color: ink,
                        border: "1px solid " + tint(0.28),
                        borderRadius: 999,
                      }}
                    >
                      {empty.actionLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  }
                />
              </div>
            </div>
          )}
        </section>

        <p className="mt-6 text-center text-[13px]" style={{ color: tint(0.58) }}>
          reminders go out by email and in-app only — splitwise never moves real money.
        </p>
      </div>
    </div>
  );
}
