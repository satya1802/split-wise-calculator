// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardContent, Input, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, User, Users, Settings, FileText, Clock, Trash, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const INK = brand.primaryColor;
const ACCENT = brand.accentColor;
const NEUTRAL = brand.neutralColor;
const CANVAS = brand.backgroundColor;

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}
function rgba(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const c = a.map((v, i) => Math.round(v * t + b[i] * (1 - t)));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}
function lighten(hex, t) {
  const [r, g, b] = hexToRgb(hex);
  const c = [r, g, b].map((v) => Math.round(v + (255 - v) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

const PANEL = lighten(CANVAS, 0.58);
const SOFT = rgba(INK, 0.06);
const SOFTER = rgba(INK, 0.04);
const HAIRLINE = rgba(INK, 0.14);
const MUTED = mix(INK, '#fdfbf6', 0.8);

const CURRENCIES = [
  { code: 'USD', label: 'USD — US dollar (workspace default)' },
  { code: 'EUR', label: 'EUR — euro' },
  { code: 'GBP', label: 'GBP — pound sterling' },
  { code: 'INR', label: 'INR — Indian rupee' },
  { code: 'AUD', label: 'AUD — Australian dollar' },
  { code: 'CAD', label: 'CAD — Canadian dollar' },
  { code: 'SGD', label: 'SGD — Singapore dollar' },
  { code: 'JPY', label: 'JPY — Japanese yen' },
];

const INITIAL_MEMBERS = [
  {
    id: 'u_01',
    name: 'Priya Raghavan',
    email: 'priya.raghavan@gmail.com',
    role: 'admin',
    joined: '12 Sep 2026',
    self: true,
  },
  {
    id: 'u_02',
    name: 'Dev Ramanathan',
    email: 'dev.r@outlook.com',
    role: 'admin',
    joined: '12 Sep 2026',
    self: false,
  },
  {
    id: 'u_03',
    name: 'Rahul Menon',
    email: 'rahul.menon@gmail.com',
    role: 'member',
    joined: '14 Sep 2026',
    self: false,
  },
  {
    id: 'u_04',
    name: 'Ana Beatriz Costa',
    email: 'ana.costa@protonmail.com',
    role: 'member',
    joined: '2 Oct 2026',
    self: false,
  },
  {
    id: 'u_05',
    name: 'Tomás Oliveira',
    email: 'tomas.oliveira@me.com',
    role: 'member',
    joined: '19 Oct 2026',
    self: false,
  },
];

const INITIAL_INVITES = [
  {
    id: 'inv_01',
    wf: 'i-6-0-0',
    kind: 'email',
    label: 'maya@example.com',
    meta: 'Sent 24 Oct 2026',
    status: 'Pending',
  },
  {
    id: 'inv_02',
    wf: 'i-6-0-1',
    kind: 'link',
    label: 'Link invite',
    meta: 'Expires 4 Nov 2026',
    status: 'Active',
  },
  {
    id: 'inv_03',
    wf: null,
    kind: 'email',
    label: 'jonas.weber@example.com',
    meta: 'Sent 11 Oct 2026 · no longer valid',
    status: 'Expired',
  },
];

const INVITE_LINK = 'https://splitcalc.app/join/8f3ad02c';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Screen() {
  const navigate = useNavigate();
  const [savedName, setSavedName] = React.useState('Goa Trip 2026');
  const [savedCurrency, setSavedCurrency] = React.useState('USD');
  const [groupName, setGroupName] = React.useState('Goa Trip 2026');
  const [currency, setCurrency] = React.useState('USD');
  const [nameError, setNameError] = React.useState('');
  const [saveState, setSaveState] = React.useState('idle');

  const [members, setMembers] = React.useState(INITIAL_MEMBERS);
  const [confirmId, setConfirmId] = React.useState(null);
  const [removed, setRemoved] = React.useState(null);

  const [inviteEmail, setInviteEmail] = React.useState('');
  const [inviteError, setInviteError] = React.useState('');
  const [inviteSent, setInviteSent] = React.useState('');
  const [sending, setSending] = React.useState(false);

  const [copied, setCopied] = React.useState(false);
  const [invites, setInvites] = React.useState(INITIAL_INVITES);
  const [revoked, setRevoked] = React.useState('');

  const inviteInputRef = React.useRef(null);
  const timers = React.useRef([]);
  React.useEffect(
    () => () => timers.current.forEach((t) => clearTimeout(t)),
    []
  );
  const after = (ms, fn) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const dirty = groupName !== savedName || currency !== savedCurrency;

  function handleSaveSettings(e) {
    e.preventDefault();
    if (!groupName.trim()) {
      setNameError("give the group a name — it's how members find it in their list.");
      return;
    }
    setNameError('');
    setSaveState('saving');
    after(650, () => {
      setSavedName(groupName.trim());
      setSavedCurrency(currency);
      setSaveState('idle');
      navigate('group-detail');
    });
  }

  function handleRemove(member) {
    setMembers((prev) => prev.filter((m) => m.id !== member.id));
    setConfirmId(null);
    setRemoved(member);
  }

  function undoRemove() {
    if (!removed) return;
    setMembers((prev) => {
      const next = [...prev, removed];
      return next.sort(
        (a, b) =>
          INITIAL_MEMBERS.findIndex((m) => m.id === a.id) -
          INITIAL_MEMBERS.findIndex((m) => m.id === b.id)
      );
    });
    setRemoved(null);
  }

  function handleInvite(e) {
    e.preventDefault();
    const raw = inviteEmail.trim();
    const value = raw.toLowerCase();
    setInviteSent('');
    if (!raw) {
      setInviteError("add an email address and we'll send the invitation.");
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setInviteError(`“${raw}” doesn't look like an email address — check for a typo.`);
      return;
    }
    if (members.some((m) => m.email.toLowerCase() === value)) {
      setInviteError(`${value} is already a member of ${savedName}.`);
      return;
    }
    if (
      invites.some(
        (i) => i.kind === 'email' && i.label.toLowerCase() === value && i.status === 'Pending'
      )
    ) {
      setInviteError(`an invitation to ${value} is already waiting to be accepted.`);
      return;
    }
    setInviteError('');
    setSending(true);
    after(650, () => {
      setSending(false);
      setInvites((prev) => [
        {
          id: 'inv_' + Math.random().toString(36).slice(2, 8),
          wf: null,
          kind: 'email',
          label: value,
          meta: 'Sent 28 Oct 2026',
          status: 'Pending',
          fresh: true,
        },
        ...prev,
      ]);
      setInviteSent(value);
      setInviteEmail('');
    });
  }

  function copyLink() {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(INVITE_LINK);
      }
    } catch (err) {
      /* clipboard unavailable in this frame — the link stays selectable */
    }
    setCopied(true);
    after(2400, () => setCopied(false));
  }

  function revokeInvite(inv) {
    setInvites((prev) => prev.filter((i) => i.id !== inv.id));
    setRevoked(inv.kind === 'link' ? 'the shareable link' : inv.label);
  }

  /* ---------- shared styles ---------- */
  const panelStyle = {
    backgroundColor: PANEL,
    border: `1px solid ${HAIRLINE}`,
    borderRadius: brand.radius,
    boxShadow: 'none',
  };
  const archStyle = {
    backgroundColor: SOFT,
    border: `1px solid ${HAIRLINE}`,
    borderRadius: '170px 170px ' + brand.radius + ' ' + brand.radius,
  };
  const fieldStyle = {
    borderRadius: '999px',
    backgroundColor: lighten(CANVAS, 0.8),
    border: `1px solid ${HAIRLINE}`,
    color: INK,
    padding: '12px 20px',
    width: '100%',
    fontSize: '15px',
    boxShadow: 'none',
  };
  const primaryBtn = {
    backgroundColor: INK,
    color: lighten(CANVAS, 0.7),
    borderRadius: '999px',
    border: '1px solid transparent',
    padding: '14px 28px',
    fontSize: '15px',
    minHeight: '48px',
  };
  const quietBtn = {
    backgroundColor: 'transparent',
    color: INK,
    borderRadius: '999px',
    border: `1px solid ${HAIRLINE}`,
    padding: '12px 22px',
    fontSize: '14px',
    minHeight: '44px',
  };

  const statusTone = {
    Pending: { bg: rgba(ACCENT, 0.2), Icon: Clock },
    Active: { bg: rgba(INK, 0.09), Icon: Check },
    Expired: { bg: rgba(NEUTRAL, 0.2), Icon: AlertCircle },
  };

  const label = (text, htmlFor) => (
    <Label
      htmlFor={htmlFor}
      className="mb-2 block text-xs font-semibold uppercase"
      style={{ color: MUTED, letterSpacing: '0.09em' }}
    >
      {text}
    </Label>
  );

  const Arch = () => (
    <span
      aria-hidden="true"
      className="mb-4 block"
      style={{
        width: '30px',
        height: '19px',
        backgroundColor: ACCENT,
        borderRadius: '15px 15px 0 0',
      }}
    />
  );

  return (
    <div
      className="atrium w-full px-5 pb-20 pt-8 sm:px-8"
      style={{
        backgroundColor: CANVAS,
        color: INK,
        fontFamily: brand.fontBody,
        ['--atrium-ink']: INK,
        ['--atrium-accent']: ACCENT,
      }}
    >
      <style>{`
        .atrium :is(button,input,select,textarea,a,[tabindex]):focus-visible{
          outline:2px solid var(--atrium-ink);
          outline-offset:3px;
          box-shadow:0 0 0 6px ${rgba(ACCENT, 0.32)};
        }
        .atrium input::placeholder{color:${mix(NEUTRAL, '#ffffff', 0.85)};}
        @keyframes atrium-rise{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:none;}}
        @keyframes atrium-fade{from{opacity:0;}to{opacity:1;}}
        .atrium-rise{animation:atrium-rise .34s cubic-bezier(.22,.8,.3,1) both;}
        .atrium-fade{animation:atrium-fade .3s ease-out both;}
        @media (prefers-reduced-motion: reduce){
          .atrium-rise,.atrium-fade{animation:none !important;}
          .atrium *{transition:none !important;}
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 gap-y-10">
        {/* ---------- Row 1 ---------- */}
        <div className="col-span-12 lg:col-span-9">
          <p
            className="mb-3 text-xs font-semibold uppercase"
            style={{ color: MUTED, letterSpacing: '0.14em' }}
          >
            group administration
          </p>
          <h1
            data-wf="b-0-0"
            className="text-3xl italic leading-tight sm:text-4xl"
            style={{ fontFamily: brand.fontHeading, color: INK }}
          >
            Goa Trip 2026 — members &amp; settings
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed" style={{ color: MUTED }}>
            you're an admin here. change the group's name or currency, invite the rest of the
            house, and keep the member list honest.
          </p>
        </div>
        <div className="col-span-12 flex items-start lg:col-span-3 lg:justify-end">
          <Button
            data-wf="b-0-1"
            type="button"
            onClick={() => navigate('group-detail')}
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={quietBtn}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to group
          </Button>
        </div>

        {/* ---------- Row 2 ---------- */}
        <div data-wf="b-1-0" className="col-span-12 lg:col-span-8">
          <Card style={panelStyle} className="h-full overflow-hidden">
            <CardHeader className="px-7 pb-2 pt-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2
                  className="text-2xl italic"
                  style={{ fontFamily: brand.fontHeading, color: INK }}
                >
                  Group settings
                </h2>
                {dirty ? (
                  <span
                    className="atrium-fade inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold"
                    style={{ backgroundColor: rgba(ACCENT, 0.22), color: INK, borderRadius: '999px' }}
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    unsaved changes
                  </span>
                ) : (
                  <span className="text-xs" style={{ color: MUTED }}>
                    last saved 26 Oct 2026
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="px-7 pb-8 pt-4">
              <form id="group-settings-form" onSubmit={handleSaveSettings} noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    {label('Group name', 'group-name')}
                    <Input
                      data-wf="i-1-0-0"
                      id="group-name"
                      name="name"
                      value={groupName}
                      onChange={(e) => {
                        setGroupName(e.target.value);
                        if (nameError) setNameError('');
                      }}
                      aria-invalid={nameError ? 'true' : 'false'}
                      aria-describedby={nameError ? 'group-name-error' : 'group-name-hint'}
                      style={{
                        ...fieldStyle,
                        border: `1px solid ${nameError ? INK : HAIRLINE}`,
                      }}
                    />
                    {nameError ? (
                      <p
                        id="group-name-error"
                        className="atrium-fade mt-2 flex items-start gap-2 text-sm"
                        style={{ color: INK }}
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        {nameError}
                      </p>
                    ) : (
                      <p id="group-name-hint" className="mt-2 text-sm" style={{ color: MUTED }}>
                        members see this in their groups list.
                      </p>
                    )}
                  </div>
                  <div>
                    {label('Default currency (USD)', 'default-currency')}
                    <Select
                      data-wf="i-1-0-1"
                      id="default-currency"
                      name="default_currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      aria-describedby="currency-hint"
                      style={{ ...fieldStyle, paddingRight: '44px' }}
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </Select>
                    <p id="currency-hint" className="mt-2 text-sm" style={{ color: MUTED }}>
                      leave it as USD to keep the workspace default.
                    </p>
                  </div>
                </div>

                <div
                  className="mt-7 flex items-start gap-3 p-5"
                  style={{ backgroundColor: SOFTER, borderRadius: brand.radius }}
                >
                  <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" style={{ color: ACCENT }} />
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                    every expense, balance and settlement in {savedName} is shown in{' '}
                    <span style={{ color: INK, fontWeight: 600 }}>{currency}</span>. one currency per
                    group — nothing is converted at an exchange rate.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div
            className="flex h-full flex-col items-center justify-between px-7 pb-7 pt-10 text-center"
            style={archStyle}
          >
            <div className="flex flex-col items-center">
              <Arch />
              <h2
                className="text-xl italic"
                style={{ fontFamily: brand.fontHeading, color: INK }}
              >
                Ready when you are
              </h2>
              <p className="mt-2 max-w-[22ch] text-sm leading-relaxed" style={{ color: MUTED }}>
                {dirty
                  ? 'saving takes you back to the group workspace.'
                  : 'nothing has changed yet — edit a field to the left.'}
              </p>
            </div>
            <Button
              data-wf="b-1-1"
              type="submit"
              form="group-settings-form"
              disabled={saveState === 'saving'}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 font-semibold transition-opacity disabled:opacity-70"
              style={primaryBtn}
            >
              {saveState === 'saving' ? (
                <>
                  <Clock className="h-4 w-4 animate-pulse" aria-hidden="true" />
                  saving…
                </>
              ) : (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Save changes
                </>
              )}
            </Button>
          </div>
        </div>

        {/* ---------- Row 3 ---------- */}
        <div data-wf="b-2-0" className="col-span-12">
          <Card style={panelStyle} className="overflow-hidden">
            <CardHeader className="px-7 pb-4 pt-7">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2
                    className="text-2xl italic"
                    style={{ fontFamily: brand.fontHeading, color: INK }}
                  >
                    Members ({members.length})
                  </h2>
                  <p className="mt-1 text-sm" style={{ color: MUTED }}>
                    {members.filter((m) => m.role === 'admin').length} admins ·{' '}
                    {members.filter((m) => m.role === 'member').length} members
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  synced 2 minutes ago
                </span>
              </div>
            </CardHeader>
            <CardContent className="px-7 pb-7 pt-0">
              <div aria-live="polite">
                {removed && (
                  <div
                    className="atrium-fade mb-5 flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                    style={{ backgroundColor: rgba(ACCENT, 0.16), borderRadius: brand.radius }}
                  >
                    <p className="flex items-start gap-2 text-sm" style={{ color: INK }}>
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {removed.name} was removed — they can no longer open {savedName}'s expenses or
                      balances.
                    </p>
                    <Button
                      type="button"
                      onClick={undoRemove}
                      className="font-semibold"
                      style={{ ...quietBtn, borderColor: rgba(INK, 0.28), padding: '8px 18px', minHeight: '40px' }}
                    >
                      Undo removal
                    </Button>
                  </div>
                )}
              </div>

              {members.length === 0 ? (
                <Empty
                  title="no one is left in this group"
                  description="you removed every member. invite someone by email below to start sharing expenses again."
                />
              ) : (
                <div className="overflow-x-auto">
                  <Table
                    className="w-full text-left"
                    style={{ fontVariantNumeric: 'tabular-nums', borderCollapse: 'collapse' }}
                  >
                    <THead>
                      <TR style={{ backgroundColor: SOFTER }}>
                        {[
                          ['i-2-0-0', 'Member', 'pl-5'],
                          ['i-2-0-1', 'Email', ''],
                          ['i-2-0-2', 'Role', ''],
                          ['i-2-0-3', 'Joined', ''],
                        ].map(([wf, text, pad]) => (
                          <TH
                            key={wf}
                            data-wf={wf}
                            scope="col"
                            className={`py-4 text-xs font-semibold uppercase ${pad}`}
                            style={{ color: MUTED, letterSpacing: '0.09em' }}
                          >
                            {text}
                          </TH>
                        ))}
                        <TH
                          data-wf="i-2-0-4"
                          scope="col"
                          className="py-4 pr-5 text-right text-xs font-semibold uppercase"
                          style={{ color: MUTED, letterSpacing: '0.09em' }}
                        >
                          Remove
                        </TH>
                      </TR>
                    </THead>
                    <TBody>
                      {members.map((m) => (
                        <TR
                          key={m.id}
                          className="atrium-fade"
                          style={{ borderTop: `1px solid ${HAIRLINE}` }}
                        >
                          <TD className="py-5 pl-5 pr-4 align-middle">
                            <span className="flex items-center gap-3">
                              <Avatar name={m.name} className="h-10 w-10 shrink-0" />
                              <span className="flex flex-col">
                                <span className="font-semibold" style={{ color: INK }}>
                                  {m.name}
                                </span>
                                {m.self && (
                                  <span className="text-xs" style={{ color: MUTED }}>
                                    that's you
                                  </span>
                                )}
                              </span>
                            </span>
                          </TD>
                          <TD className="py-5 pr-4 align-middle text-sm" style={{ color: MUTED }}>
                            {m.email}
                          </TD>
                          <TD className="py-5 pr-4 align-middle">
                            <Badge
                              className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold"
                              style={{
                                backgroundColor:
                                  m.role === 'admin' ? rgba(ACCENT, 0.22) : rgba(INK, 0.07),
                                color: INK,
                                borderRadius: '999px',
                                border: 'none',
                              }}
                            >
                              {m.role === 'admin' ? (
                                <Settings className="h-3.5 w-3.5" aria-hidden="true" />
                              ) : (
                                <User className="h-3.5 w-3.5" aria-hidden="true" />
                              )}
                              {m.role}
                            </Badge>
                          </TD>
                          <TD className="py-5 pr-4 align-middle text-sm" style={{ color: MUTED }}>
                            {m.joined}
                          </TD>
                          <TD className="py-5 pr-5 align-middle text-right">
                            {m.self ? (
                              <span className="text-xs" style={{ color: MUTED }}>
                                you can't remove yourself
                              </span>
                            ) : confirmId === m.id ? (
                              <span className="atrium-fade inline-flex items-center justify-end gap-2">
                                <Button
                                  type="button"
                                  onClick={() => handleRemove(m)}
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                                  style={{ ...primaryBtn, padding: '9px 18px', minHeight: '40px', fontSize: '13px' }}
                                >
                                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                  Yes, remove
                                </Button>
                                <Button
                                  type="button"
                                  onClick={() => setConfirmId(null)}
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                                  style={{ ...quietBtn, padding: '9px 16px', minHeight: '40px', fontSize: '13px' }}
                                >
                                  Keep
                                </Button>
                              </span>
                            ) : (
                              <Button
                                type="button"
                                onClick={() => setConfirmId(m.id)}
                                aria-label={`Remove ${m.name} from ${savedName}`}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                                style={{ ...quietBtn, padding: '9px 18px', minHeight: '40px', fontSize: '13px' }}
                              >
                                <Trash className="h-3.5 w-3.5" aria-hidden="true" />
                                Remove
                              </Button>
                            )}
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ---------- Row 4 ---------- */}
        <p
          data-wf="b-3-0"
          className="col-span-12 -mt-4 max-w-3xl text-sm leading-relaxed"
          style={{ color: MUTED }}
        >
          Only group admins can remove members. Removed members lose access to this group's expenses
          and balances.
        </p>

        {/* ---------- Row 5 ---------- */}
        <div data-wf="b-4-0" className="col-span-12 lg:col-span-8">
          <Card style={panelStyle} className="h-full overflow-hidden">
            <CardHeader className="px-7 pb-2 pt-7">
              <h2 className="text-2xl italic" style={{ fontFamily: brand.fontHeading, color: INK }}>
                Invite by email
              </h2>
              <p className="mt-1 text-sm" style={{ color: MUTED }}>
                we'll email a join link. they accept it, verify their address, and land straight in{' '}
                {savedName}.
              </p>
            </CardHeader>
            <CardContent className="px-7 pb-8 pt-4">
              <form id="invite-form" onSubmit={handleInvite} noValidate>
                {label('Email address', 'invite-email')}
                <Input
                  data-wf="i-4-0-0"
                  id="invite-email"
                  name="email"
                  type="email"
                  ref={inviteInputRef}
                  value={inviteEmail}
                  placeholder="maya@example.com"
                  onChange={(e) => {
                    setInviteEmail(e.target.value);
                    if (inviteError) setInviteError('');
                  }}
                  aria-invalid={inviteError ? 'true' : 'false'}
                  aria-describedby="invite-feedback"
                  style={{ ...fieldStyle, border: `1px solid ${inviteError ? INK : HAIRLINE}` }}
                />
                <div id="invite-feedback" aria-live="polite" className="mt-3 min-h-[20px]">
                  {inviteError ? (
                    <p className="atrium-fade flex items-start gap-2 text-sm" style={{ color: INK }}>
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {inviteError}
                    </p>
                  ) : inviteSent ? (
                    <p className="atrium-fade flex items-start gap-2 text-sm" style={{ color: INK }}>
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      invitation on its way to {inviteSent} — it expires in 7 days.
                    </p>
                  ) : (
                    <p className="text-sm" style={{ color: MUTED }}>
                      one address at a time, please.
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div
            className="flex h-full flex-col items-center justify-between px-7 pb-7 pt-10 text-center"
            style={archStyle}
          >
            <div className="flex flex-col items-center">
              <Arch />
              <h2 className="text-xl italic" style={{ fontFamily: brand.fontHeading, color: INK }}>
                Grow the table
              </h2>
              <p className="mt-2 max-w-[22ch] text-sm leading-relaxed" style={{ color: MUTED }}>
                new members can log expenses the moment they accept.
              </p>
            </div>
            <Button
              data-wf="b-4-1"
              type="submit"
              form="invite-form"
              disabled={sending}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 font-semibold transition-opacity disabled:opacity-70"
              style={primaryBtn}
            >
              {sending ? (
                <>
                  <Clock className="h-4 w-4 animate-pulse" aria-hidden="true" />
                  sending…
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Send invitation
                </>
              )}
            </Button>
          </div>
        </div>

        {/* ---------- Row 6 ---------- */}
        <div data-wf="b-5-0" className="col-span-12 lg:col-span-8">
          <div
            className="px-7 py-7"
            style={{ backgroundColor: SOFTER, border: `1px solid ${HAIRLINE}`, borderRadius: brand.radius }}
          >
            {label('Shareable invite link', 'invite-link')}
            <Input
              id="invite-link"
              name="invite_link"
              readOnly
              value={INVITE_LINK}
              onFocus={(e) => e.target.select()}
              aria-describedby="invite-link-hint"
              style={{ ...fieldStyle, backgroundColor: PANEL, fontVariantNumeric: 'tabular-nums' }}
            />
            <p id="invite-link-hint" className="mt-3 text-sm" style={{ color: MUTED }}>
              anyone who opens this link can ask to join {savedName}. revoke it below if it travels
              too far.
            </p>
          </div>
        </div>
        <div className="col-span-12 flex items-center lg:col-span-4">
          <Button
            data-wf="b-5-1"
            type="button"
            onClick={copyLink}
            className="inline-flex w-full items-center justify-center gap-2 font-semibold transition-colors"
            style={
              copied
                ? { ...quietBtn, backgroundColor: rgba(ACCENT, 0.22), borderColor: 'transparent', minHeight: '48px' }
                : { ...quietBtn, minHeight: '48px' }
            }
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                copied to your clipboard
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" aria-hidden="true" />
                Copy invite link
              </>
            )}
          </Button>
        </div>

        {/* ---------- Row 7 ---------- */}
        <section data-wf="b-6-0" className="col-span-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl italic" style={{ fontFamily: brand.fontHeading, color: INK }}>
              Pending invitations
            </h2>
            <span className="text-sm" style={{ color: MUTED, fontVariantNumeric: 'tabular-nums' }}>
              {invites.length} outstanding
            </span>
          </div>

          <div aria-live="polite">
            {revoked && (
              <p
                className="atrium-fade mb-4 flex items-start gap-2 px-5 py-4 text-sm"
                style={{ backgroundColor: SOFT, borderRadius: brand.radius, color: INK }}
              >
                <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {revoked} was revoked — opening it now tells the recipient the invitation is no
                longer valid.
              </p>
            )}
          </div>

          {invites.length === 0 ? (
            <Empty
              title="no invitations waiting"
              description="nobody has an open invite to Goa Trip 2026 right now. send one by email, or share the join link above."
              action={
                <Button
                  type="button"
                  onClick={() => inviteInputRef.current && inviteInputRef.current.focus()}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={primaryBtn}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Invite someone by email
                </Button>
              }
            />
          ) : (
            <ul
              className="overflow-hidden"
              style={{ backgroundColor: PANEL, border: `1px solid ${HAIRLINE}`, borderRadius: brand.radius }}
            >
              {invites.map((inv, idx) => {
                const tone = statusTone[inv.status] || statusTone.Pending;
                const ToneIcon = tone.Icon;
                return (
                  <li
                    key={inv.id}
                    data-wf={inv.wf || undefined}
                    className={`flex flex-wrap items-center justify-between gap-4 px-6 py-5 ${
                      inv.fresh ? 'atrium-rise' : ''
                    }`}
                    style={{ borderTop: idx === 0 ? 'none' : `1px solid ${HAIRLINE}` }}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center"
                        style={{ backgroundColor: SOFT, borderRadius: '999px' }}
                      >
                        {inv.kind === 'link' ? (
                          <Users className="h-4 w-4" style={{ color: INK }} />
                        ) : (
                          <User className="h-4 w-4" style={{ color: INK }} />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold" style={{ color: INK }}>
                          {inv.label}
                        </span>
                        <span
                          className="block text-sm"
                          style={{ color: MUTED, fontVariantNumeric: 'tabular-nums' }}
                        >
                          {inv.meta}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: tone.bg,
                          color: INK,
                          borderRadius: '999px',
                          border: 'none',
                        }}
                      >
                        <ToneIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {inv.status}
                      </Badge>
                      <Button
                        type="button"
                        onClick={() => revokeInvite(inv)}
                        aria-label={
                          inv.kind === 'link'
                            ? 'Revoke the shareable invite link'
                            : `Revoke the invitation to ${inv.label}`
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        style={{ ...quietBtn, padding: '9px 18px', minHeight: '40px', fontSize: '13px' }}
                      >
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                        Revoke
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
