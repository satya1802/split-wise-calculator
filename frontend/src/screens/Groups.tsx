// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Badge, Avatar, Separator, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, ChevronRight, Users, Clock, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const SYSTEM_DEFAULT_CURRENCY = "USD";

const CURRENCIES = [
  { code: "USD", label: "USD — US dollar" },
  { code: "EUR", label: "EUR — euro" },
  { code: "GBP", label: "GBP — pound sterling" },
  { code: "INR", label: "INR — Indian rupee" },
  { code: "CAD", label: "CAD — Canadian dollar" },
  { code: "AUD", label: "AUD — Australian dollar" },
  { code: "JPY", label: "JPY — Japanese yen" },
];

const SEED_GROUPS = [
  {
    id: "grp_8120",
    wf: "i-1-0-0",
    name: "Goa Trip 2026",
    default_currency: "USD",
    created_at: "14 Jan 2026",
    creator_is_you: true,
    activity: "last expense 26 Oct — Beach shack dinner, ₹ paid by Meera",
    net: 124.5,
    members: [
      "Satya Ganaraju",
      "Meera Rao",
      "Dev Patel",
      "Anjali Kulkarni",
      "Tom Whitfield",
    ],
  },
  {
    id: "grp_7741",
    wf: "i-1-0-1",
    name: "Flat 4B Household",
    default_currency: "USD",
    created_at: "03 Sep 2025",
    creator_is_you: false,
    activity: "last expense 27 Oct — October electricity, paid by Priya",
    net: -32.0,
    members: ["Satya Ganaraju", "Priya Nair", "Jonas Bergström"],
  },
  {
    id: "grp_6508",
    wf: "i-1-0-2",
    name: "Office Lunch Club",
    default_currency: "USD",
    created_at: "22 Feb 2025",
    creator_is_you: false,
    activity: "settled on 21 Oct — Leah repaid $18.40",
    net: 0,
    members: [
      "Satya Ganaraju",
      "Leah Moreau",
      "Chidi Okonkwo",
      "Hana Sato",
      "Marco Ruiz",
      "Ellie Dunne",
      "Rahul Varma",
    ],
  },
];

function hexToRgba(hex, alpha) {
  const clean = String(hex).replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

function initialsOf(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function money(amount, currency) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(Math.abs(amount));
  } catch (e) {
    return currency + " " + Math.abs(amount).toFixed(2);
  }
}

function positionOf(group) {
  if (group.net > 0) {
    return { key: "owed", word: "You are owed", amount: money(group.net, group.default_currency) };
  }
  if (group.net < 0) {
    return { key: "owe", word: "You owe", amount: money(group.net, group.default_currency) };
  }
  return { key: "settled", word: "Settled up", amount: null };
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;

  const [groups, setGroups] = React.useState(SEED_GROUPS);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [error, setError] = React.useState(null);
  const [saving, setSaving] = React.useState(false);
  const [banner, setBanner] = React.useState(null);

  const triggerRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const saveTimer = React.useRef(null);
  const navTimer = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      if (navTimer.current) clearTimeout(navTimer.current);
    };
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      if (nameRef.current) nameRef.current.focus();
    }, 30);
    return () => clearTimeout(t);
  }, [open]);

  const rootStyle = {
    backgroundColor: brand.backgroundColor,
    color: ink,
    fontFamily: brand.fontBody,
    "--atrium-ink": ink,
    "--atrium-accent": accent,
    "--atrium-hover": hexToRgba(ink, 0.06),
    "--atrium-press": hexToRgba(ink, 0.1),
    "--atrium-hairline": hexToRgba(ink, 0.13),
    "--atrium-ink-hover": hexToRgba(ink, 0.86),
    "--atrium-surface": "rgba(255,255,255,0.58)",
  };

  const css =
    ".atrium :focus-visible{outline:2px solid var(--atrium-accent);outline-offset:3px;}" +
    ".atrium-row-btn{transition:background-color .18s ease,transform .18s ease;}" +
    ".atrium-row-btn:hover{background-color:var(--atrium-hover);}" +
    ".atrium-row-btn:active{transform:scale(.996);}" +
    ".atrium-row-btn:hover .atrium-chev{transform:translateX(3px);}" +
    ".atrium-chev{transition:transform .18s ease;}" +
    ".atrium-primary{transition:background-color .18s ease,transform .12s ease;}" +
    ".atrium-primary:hover:not(:disabled){background-color:var(--atrium-ink-hover);}" +
    ".atrium-primary:active:not(:disabled){transform:translateY(1px);}" +
    ".atrium-primary:disabled{opacity:.6;cursor:not-allowed;}" +
    ".atrium-quiet{transition:background-color .18s ease;}" +
    ".atrium-quiet:hover{background-color:var(--atrium-hover);}" +
    ".atrium-field{transition:box-shadow .18s ease,background-color .18s ease;}" +
    "@keyframes atriumFade{from{opacity:0}to{opacity:1}}" +
    "@keyframes atriumRise{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:none}}" +
    "@keyframes atriumRow{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}" +
    "@keyframes atriumSpin{to{transform:rotate(360deg)}}" +
    ".atrium-fade{animation:atriumFade .22s ease-out both}" +
    ".atrium-rise{animation:atriumRise .28s cubic-bezier(.2,.7,.3,1) both}" +
    ".atrium-new{animation:atriumRow .4s cubic-bezier(.2,.7,.3,1) both}" +
    ".atrium-spin{animation:atriumSpin .9s linear infinite}" +
    "@media (prefers-reduced-motion: reduce){.atrium *{animation:none !important;transition:none !important}}";

  function openDialog() {
    setError(null);
    setOpen(true);
  }

  function closeDialog() {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    setSaving(false);
    setOpen(false);
    setError(null);
    if (triggerRef.current) triggerRef.current.focus();
  }

  function onDialogKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeDialog();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const nodes = dialogRef.current.querySelectorAll(
      'button:not([disabled]),input,select,textarea,[href],[tabindex]:not([tabindex="-1"])'
    );
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError({
        field: "name",
        msg: "a group needs a name before it can be created — try “Lisbon, March 2027”.",
      });
      if (nameRef.current) nameRef.current.focus();
      return;
    }
    if (trimmed.length > 40) {
      setError({
        field: "name",
        msg: "that name is " + trimmed.length + " characters. keep it under 40 so it fits on the balance cards.",
      });
      return;
    }
    const clash = groups.find(
      (g) => g.name.trim().toLowerCase() === trimmed.toLowerCase()
    );
    if (clash) {
      setError({
        field: "name",
        msg: "you already have a group called “" + clash.name + "”. pick another name, or open the one you have.",
      });
      if (nameRef.current) nameRef.current.focus();
      return;
    }

    setError(null);
    setSaving(true);
    saveTimer.current = setTimeout(() => {
      const chosen = currency || SYSTEM_DEFAULT_CURRENCY;
      const created = {
        id: "grp_" + Math.floor(1000 + Math.random() * 8999),
        wf: null,
        name: trimmed,
        default_currency: chosen,
        created_at: "28 Oct 2026",
        creator_is_you: true,
        activity: "no expenses yet — you are the only member",
        net: 0,
        members: ["Satya Ganaraju"],
        isNew: true,
      };
      setGroups(function (prev) {
        return [created].concat(prev);
      });
      setBanner({
        name: trimmed,
        currency: chosen,
        usedDefault: currency === "",
      });
      setSaving(false);
      setOpen(false);
      setName("");
      setCurrency("");
      navTimer.current = setTimeout(function () {
        navigate("group-detail");
      }, 700);
    }, 700);
  }

  const countLabel = groups.length === 1 ? "1 group" : groups.length + " groups";

  return (
    <div className="atrium min-h-full" style={rootStyle}>
      <style>{css}</style>

      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 lg:px-10">
        {/* ---------------- Row 1 ---------------- */}
        <div className="grid grid-cols-12 items-end gap-6">
          <header className="col-span-12 sm:col-span-8" data-wf="b-0-0">
            <p
              className="text-xs uppercase tracking-[0.18em]"
              style={{ color: hexToRgba(ink, 0.8) }}
            >
              shared ledgers
            </p>
            <h1
              className="mt-3 text-4xl leading-tight sm:text-[40px]"
              style={{
                fontFamily: brand.fontHeading,
                fontStyle: "italic",
                color: ink,
                letterSpacing: "-0.01em",
              }}
            >
              My groups
            </h1>
            <p
              className="mt-3 max-w-[56ch] text-[15px] leading-relaxed"
              style={{ color: hexToRgba(ink, 0.8) }}
            >
              every group keeps its own members, its own currency and one running
              balance for you.
            </p>
          </header>

          <div className="col-span-12 flex sm:col-span-4 sm:justify-end">
            <Button
              data-wf="b-0-1"
              ref={triggerRef}
              onClick={openDialog}
              className="atrium-primary inline-flex min-h-[48px] items-center justify-center gap-2 px-7 text-[15px] font-semibold"
              style={{
                backgroundColor: ink,
                color: brand.backgroundColor,
                borderRadius: "999px",
                border: "none",
                fontFamily: brand.fontBody,
              }}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              New group
            </Button>
          </div>
        </div>

        {/* ---------------- Row 2 ---------------- */}
        <section className="mt-10" data-wf="b-1-0" aria-labelledby="group-list-heading">
          {banner ? (
            <div
              role="status"
              className="atrium-fade mb-6 flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderRadius: "24px",
                backgroundColor: hexToRgba(accent, 0.16),
                border: "1px solid " + hexToRgba(accent, 0.4),
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="mt-[2px] h-5 w-5 shrink-0"
                  style={{ color: ink }}
                  aria-hidden="true"
                />
                <p className="text-[14px] leading-relaxed" style={{ color: ink }}>
                  <span className="font-semibold">“{banner.name}” is ready.</span>{" "}
                  it uses {banner.currency}
                  {banner.usedDefault ? " — the system default" : ""} and you are its
                  creator and first member.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Button
                  onClick={() => navigate("group-detail")}
                  className="atrium-quiet min-h-[40px] px-5 text-[13px] font-semibold"
                  style={{
                    borderRadius: "999px",
                    backgroundColor: "transparent",
                    border: "1px solid " + hexToRgba(ink, 0.3),
                    color: ink,
                  }}
                >
                  open group
                </Button>
                <Button
                  onClick={() => setBanner(null)}
                  aria-label="Dismiss the group created message"
                  className="atrium-quiet flex h-10 w-10 items-center justify-center"
                  style={{
                    borderRadius: "999px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: ink,
                  }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ) : null}

          <div
            style={{
              borderRadius: "24px",
              backgroundColor: "rgba(255,255,255,0.58)",
              border: "1px solid " + hexToRgba(ink, 0.13),
              overflow: "hidden",
            }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3 px-6 pb-4 pt-6 sm:px-8">
              <h2
                id="group-list-heading"
                className="text-[20px]"
                style={{
                  fontFamily: brand.fontHeading,
                  fontStyle: "italic",
                  color: ink,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {countLabel}
              </h2>
              <p
                className="flex items-center gap-2 text-xs"
                style={{
                  color: hexToRgba(ink, 0.8),
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                balances synced 11:42 am
              </p>
            </div>

            {groups.length === 0 ? (
              <div className="px-6 pb-10 pt-2 sm:px-8">
                <Empty
                  title="no groups yet"
                  description="a group is where the people, the expenses and one running balance live together. name your first one — a trip, a flat, a lunch club — and invite the rest afterwards."
                  action={
                    <Button
                      onClick={openDialog}
                      className="atrium-primary inline-flex min-h-[44px] items-center gap-2 px-6 text-[14px] font-semibold"
                      style={{
                        backgroundColor: ink,
                        color: brand.backgroundColor,
                        borderRadius: "999px",
                        border: "none",
                      }}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                      New group
                    </Button>
                  }
                />
              </div>
            ) : (
              <ul className="list-none p-0">
                {groups.map(function (g, idx) {
                  const pos = positionOf(g);
                  const tint =
                    pos.key === "owed"
                      ? hexToRgba(accent, 0.18)
                      : pos.key === "owe"
                      ? hexToRgba(ink, 0.1)
                      : hexToRgba(brand.neutralColor, 0.18);
                  return (
                    <li
                      key={g.id}
                      className={g.isNew ? "atrium-new" : ""}
                      style={{
                        borderTop:
                          idx === 0 ? "1px solid " + hexToRgba(ink, 0.13) : "1px solid " + hexToRgba(ink, 0.13),
                      }}
                    >
                      <button
                        type="button"
                        data-wf={g.wf || undefined}
                        onClick={() => navigate("group-detail")}
                        className="atrium-row-btn flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
                        style={{ background: "transparent", border: "none" }}
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-16 w-14 shrink-0 items-end justify-center pb-3"
                          style={{
                            borderRadius: "28px 28px 10px 10px",
                            backgroundColor: hexToRgba(accent, 0.18),
                            border: "1px solid " + hexToRgba(accent, 0.45),
                          }}
                        >
                          <span
                            className="text-[15px]"
                            style={{
                              fontFamily: brand.fontHeading,
                              fontStyle: "italic",
                              color: ink,
                            }}
                          >
                            {initialsOf(g.name)}
                          </span>
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span
                              className="text-[19px] leading-snug"
                              style={{
                                fontFamily: brand.fontHeading,
                                fontStyle: "italic",
                                color: ink,
                              }}
                            >
                              {g.name}
                            </span>
                            {g.isNew ? (
                              <Badge
                                className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                                style={{
                                  borderRadius: "999px",
                                  backgroundColor: hexToRgba(accent, 0.22),
                                  color: ink,
                                  border: "1px solid " + hexToRgba(accent, 0.45),
                                }}
                              >
                                new
                              </Badge>
                            ) : null}
                            {g.creator_is_you ? (
                              <Badge
                                className="px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
                                style={{
                                  borderRadius: "999px",
                                  backgroundColor: "transparent",
                                  color: hexToRgba(ink, 0.82),
                                  border: "1px solid " + hexToRgba(ink, 0.24),
                                }}
                              >
                                you created it
                              </Badge>
                            ) : null}
                          </span>

                          <span
                            className="mt-2 block text-[13px]"
                            style={{
                              color: hexToRgba(ink, 0.8),
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            {g.default_currency} · {g.members.length}{" "}
                            {g.members.length === 1 ? "member" : "members"} · created{" "}
                            {g.created_at}
                          </span>
                          <span
                            className="mt-1 block truncate text-[13px]"
                            style={{ color: hexToRgba(ink, 0.8) }}
                          >
                            {g.activity}
                          </span>

                          <span className="mt-3 flex items-center gap-2">
                            {g.members.slice(0, 3).map(function (m) {
                              return (
                                <Avatar
                                  key={m}
                                  name={m}
                                  className="h-7 w-7 text-[11px]"
                                />
                              );
                            })}
                            {g.members.length > 3 ? (
                              <span
                                className="flex items-center gap-1 text-[12px]"
                                style={{
                                  color: hexToRgba(ink, 0.8),
                                  fontVariantNumeric: "tabular-nums",
                                }}
                              >
                                <Users className="h-3.5 w-3.5" aria-hidden="true" />+
                                {g.members.length - 3} more
                              </span>
                            ) : null}
                          </span>
                        </span>

                        <span className="flex shrink-0 items-center gap-4">
                          <span className="text-right">
                            <span
                              className="inline-flex items-center gap-1.5 px-3 py-1 text-[12px] font-semibold"
                              style={{
                                borderRadius: "999px",
                                backgroundColor: tint,
                                color: ink,
                              }}
                            >
                              {pos.key === "settled" ? (
                                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                              ) : pos.key === "owed" ? (
                                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                              ) : (
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                              )}
                              {pos.word}
                            </span>
                            {pos.amount ? (
                              <span
                                className="mt-2 block text-[22px] font-semibold"
                                style={{
                                  color: ink,
                                  fontVariantNumeric: "tabular-nums",
                                }}
                              >
                                {pos.amount}
                              </span>
                            ) : (
                              <span
                                className="mt-2 block text-[13px]"
                                style={{ color: hexToRgba(ink, 0.8) }}
                              >
                                nothing outstanding
                              </span>
                            )}
                          </span>
                          <ChevronRight
                            className="atrium-chev h-5 w-5"
                            style={{ color: hexToRgba(ink, 0.6) }}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <p
            className="mt-4 px-1 text-[13px]"
            style={{ color: hexToRgba(ink, 0.8) }}
          >
            amounts shown are your net position in each group's own currency.
            Atrium tracks balances only — no money moves here.
          </p>
        </section>
      </div>

      {/* ---------------- Rows 3–5: create group dialog ---------------- */}
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
          <div
            className="atrium-fade absolute inset-0"
            style={{ backgroundColor: hexToRgba(ink, 0.5) }}
            aria-hidden="true"
            onClick={closeDialog}
          />
          <div
            data-wf="b-2-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-group-title"
            onKeyDown={onDialogKeyDown}
            className="atrium-rise relative w-full max-w-[512px] overflow-y-auto"
            style={{
              maxHeight: "92vh",
              backgroundColor: "rgba(255,253,246,0.99)",
              borderRadius: "256px 256px 24px 24px",
              border: "1px solid " + hexToRgba(ink, 0.14),
              boxShadow: "0 24px 60px " + hexToRgba(ink, 0.22),
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-6 right-6 top-6 h-[240px]"
              style={{
                borderRadius: "244px 244px 0 0",
                borderTop: "1px solid " + hexToRgba(accent, 0.45),
                borderLeft: "1px solid " + hexToRgba(accent, 0.45),
                borderRight: "1px solid " + hexToRgba(accent, 0.45),
              }}
            />

            <div className="relative px-10 pb-10 pt-16 sm:px-12">
              <div className="flex items-start justify-between gap-4">
                <div className="pt-1">
                  <p
                    className="text-xs uppercase tracking-[0.18em]"
                    style={{ color: hexToRgba(ink, 0.8) }}
                  >
                    new ledger
                  </p>
                  <h2
                    id="create-group-title"
                    className="mt-2 text-[26px] leading-tight"
                    style={{
                      fontFamily: brand.fontHeading,
                      fontStyle: "italic",
                      color: ink,
                    }}
                  >
                    Create a new group
                  </h2>
                </div>
                <Button
                  onClick={closeDialog}
                  aria-label="Close the create a new group dialog"
                  className="atrium-quiet flex h-11 w-11 shrink-0 items-center justify-center"
                  style={{
                    borderRadius: "999px",
                    backgroundColor: "transparent",
                    border: "1px solid " + hexToRgba(ink, 0.18),
                    color: ink,
                  }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <form data-wf="b-3-0" onSubmit={handleSubmit} noValidate className="mt-8">
                {error ? (
                  <div
                    role="alert"
                    className="atrium-fade mb-6 flex items-start gap-3 px-5 py-4"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: hexToRgba(ink, 0.07),
                      border: "1px solid " + hexToRgba(ink, 0.22),
                    }}
                  >
                    <AlertCircle
                      className="mt-[2px] h-4 w-4 shrink-0"
                      style={{ color: ink }}
                      aria-hidden="true"
                    />
                    <p className="text-[13px] leading-relaxed" style={{ color: ink }}>
                      {error.msg}
                    </p>
                  </div>
                ) : null}

                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="group-name"
                      className="mb-2 block text-[13px] font-semibold"
                      style={{ color: ink }}
                    >
                      Group name
                    </Label>
                    <Input
                      data-wf="i-3-0-0"
                      id="group-name"
                      ref={nameRef}
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={error && error.field === "name" ? "true" : undefined}
                      aria-describedby="group-name-hint"
                      placeholder="Lisbon, March 2027"
                      className="atrium-field min-h-[48px] w-full px-5 text-[15px]"
                      style={{
                        borderRadius: "999px",
                        backgroundColor: hexToRgba(ink, 0.05),
                        border:
                          "1px solid " +
                          (error && error.field === "name"
                            ? hexToRgba(ink, 0.45)
                            : hexToRgba(ink, 0.16)),
                        color: ink,
                        fontFamily: brand.fontBody,
                      }}
                    />
                    <p
                      id="group-name-hint"
                      className="mt-2 px-5 text-[12px]"
                      style={{ color: hexToRgba(ink, 0.8) }}
                    >
                      a trip, a flat, a club — whatever the group calls itself.
                    </p>
                  </div>

                  <div>
                    <Label
                      htmlFor="group-currency"
                      className="mb-2 block text-[13px] font-semibold"
                      style={{ color: ink }}
                    >
                      Default currency (USD)
                    </Label>
                    <Select
                      data-wf="i-3-0-1"
                      id="group-currency"
                      name="default_currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      aria-describedby="group-currency-hint"
                      className="atrium-field min-h-[48px] w-full px-5 text-[15px]"
                      style={{
                        borderRadius: "999px",
                        backgroundColor: hexToRgba(ink, 0.05),
                        border: "1px solid " + hexToRgba(ink, 0.16),
                        color: ink,
                        fontFamily: brand.fontBody,
                      }}
                    >
                      <option value="">
                        use the system default — {SYSTEM_DEFAULT_CURRENCY}
                      </option>
                      {CURRENCIES.map(function (c) {
                        return (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        );
                      })}
                    </Select>
                    <p
                      id="group-currency-hint"
                      className="mt-2 px-5 text-[12px]"
                      style={{ color: hexToRgba(ink, 0.8) }}
                    >
                      one currency per group — every expense, balance and settlement
                      inside it is shown in{" "}
                      {currency || SYSTEM_DEFAULT_CURRENCY}.
                    </p>
                  </div>
                </div>

                <div
                  className="my-8"
                  style={{ borderTop: "1px solid " + hexToRgba(ink, 0.13) }}
                >
                  <Separator className="opacity-0" />
                </div>

                <div className="grid grid-cols-12 items-center gap-6">
                  <p
                    data-wf="b-4-0"
                    className="col-span-12 text-[13px] leading-relaxed sm:col-span-8"
                    style={{ color: hexToRgba(ink, 0.8) }}
                  >
                    Enter a name — a group cannot be created without one. Leave the
                    currency blank to use the system default, USD.
                  </p>
                  <div className="col-span-12 flex sm:col-span-4 sm:justify-end">
                    <Button
                      data-wf="b-4-1"
                      type="submit"
                      disabled={saving}
                      className="atrium-primary inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-7 text-[15px] font-semibold sm:w-auto"
                      style={{
                        backgroundColor: ink,
                        color: brand.backgroundColor,
                        borderRadius: "999px",
                        border: "none",
                        fontFamily: brand.fontBody,
                      }}
                    >
                      {saving ? (
                        <React.Fragment>
                          <span
                            aria-hidden="true"
                            className="atrium-spin inline-block h-4 w-4 rounded-full"
                            style={{
                              border:
                                "2px solid " + hexToRgba(brand.backgroundColor, 0.4),
                              borderTopColor: brand.backgroundColor,
                            }}
                          />
                          saving…
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          Create group
                        </React.Fragment>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
