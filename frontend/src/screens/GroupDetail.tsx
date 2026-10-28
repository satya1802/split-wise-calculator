// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Checkbox, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, Settings, Home, Clock, Trash, Edit, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

const CURRENT_USER_ID = 'u_alex';
const TODAY = '2026-10-28';

const MEMBERS = [
  { id: 'u_priya', name: 'Priya Nair', role: 'admin', pronoun: 'her' },
  { id: 'u_alex', name: 'Alex Kim', role: 'member', pronoun: 'them' },
  { id: 'u_sam', name: 'Sam Diaz', role: 'member', pronoun: 'them' },
  { id: 'u_ravi', name: 'Ravi Menon', role: 'member', pronoun: 'him' },
];

const METHODS = [
  { key: 'equal', label: 'Equal shares', wf: 'i-7-0-0' },
  { key: 'exact', label: 'Exact amounts', wf: 'i-7-0-1' },
  { key: 'percentage', label: 'Percentages', wf: 'i-7-0-2' },
  { key: 'shares', label: 'Shares / weights', wf: 'i-7-0-3' },
];

const SECTIONS = [
  { key: 'expenses', label: 'Expenses', wf: 'i-1-0-0' },
  { key: 'balances', label: 'Balances', wf: 'i-1-0-1' },
  { key: 'settle', label: 'Settle up', wf: 'i-1-0-2' },
];

const INITIAL_EXPENSES = [
  {
    id: 'ex_1041',
    description: 'Dinner at Thalassa',
    amount: 84.0,
    expense_date: '2026-10-25',
    payer_id: 'u_priya',
    created_by: 'u_priya',
    split_method: 'equal',
    meta: null,
    splits: [
      { user_id: 'u_priya', share_amount: 28.0 },
      { user_id: 'u_alex', share_amount: 28.0 },
      { user_id: 'u_sam', share_amount: 28.0 },
    ],
  },
  {
    id: 'ex_1038',
    description: 'Scooter rental, 3 days',
    amount: 90.0,
    expense_date: '2026-10-22',
    payer_id: 'u_alex',
    created_by: 'u_alex',
    split_method: 'shares',
    meta: { u_priya: 1, u_alex: 2, u_sam: 2, u_ravi: 1 },
    splits: [
      { user_id: 'u_priya', share_amount: 15.0 },
      { user_id: 'u_alex', share_amount: 30.0 },
      { user_id: 'u_sam', share_amount: 30.0 },
      { user_id: 'u_ravi', share_amount: 15.0 },
    ],
  },
  {
    id: 'ex_1033',
    description: 'Beach shack lunch, Anjuna',
    amount: 72.0,
    expense_date: '2026-10-20',
    payer_id: 'u_sam',
    created_by: 'u_sam',
    split_method: 'percentage',
    meta: { u_priya: 30, u_alex: 30, u_sam: 20, u_ravi: 20 },
    splits: [
      { user_id: 'u_priya', share_amount: 21.6 },
      { user_id: 'u_alex', share_amount: 21.6 },
      { user_id: 'u_sam', share_amount: 14.4 },
      { user_id: 'u_ravi', share_amount: 14.4 },
    ],
  },
  {
    id: 'ex_1029',
    description: 'Airport taxi, Dabolim',
    amount: 60.0,
    expense_date: '2026-10-19',
    payer_id: 'u_ravi',
    created_by: 'u_ravi',
    split_method: 'equal',
    meta: null,
    splits: [
      { user_id: 'u_priya', share_amount: 15.0 },
      { user_id: 'u_alex', share_amount: 15.0 },
      { user_id: 'u_sam', share_amount: 15.0 },
      { user_id: 'u_ravi', share_amount: 15.0 },
    ],
  },
  {
    id: 'ex_1024',
    description: 'Villa deposit — Assagao',
    amount: 320.0,
    expense_date: '2026-10-18',
    payer_id: 'u_priya',
    created_by: 'u_priya',
    split_method: 'exact',
    meta: null,
    splits: [
      { user_id: 'u_priya', share_amount: 90.0 },
      { user_id: 'u_alex', share_amount: 90.0 },
      { user_id: 'u_sam', share_amount: 70.0 },
      { user_id: 'u_ravi', share_amount: 70.0 },
    ],
  },
];

const INITIAL_SETTLEMENTS = [
  { id: 'st_311', payer_id: 'u_ravi', payee_id: 'u_priya', amount: 54.4, paid_at: '2026-10-26', created_by: 'u_ravi' },
  { id: 'st_308', payer_id: 'u_sam', payee_id: 'u_priya', amount: 33.9, paid_at: '2026-10-23', created_by: 'u_sam' },
  { id: 'st_302', payer_id: 'u_alex', payee_id: 'u_priya', amount: 62.1, paid_at: '2026-10-21', created_by: 'u_alex' },
];

const hexA = (hex, a) => {
  const h = String(hex || '').replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
};

const money = (n) => (n < 0 ? '−' : '') + '$' + Math.abs(Number(n) || 0).toFixed(2);
const signed = (n) => (n > 0.004 ? '+' : n < -0.004 ? '−' : '') + '$' + Math.abs(Number(n) || 0).toFixed(2);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmtDate = (iso) => {
  if (!iso) return '—';
  const p = String(iso).split('-');
  return MONTHS[Number(p[1]) - 1] + ' ' + Number(p[2]) + ', ' + p[0];
};

const memberOf = (id) => MEMBERS.find((m) => m.id === id) || null;
const nameOf = (id) => (memberOf(id) ? memberOf(id).name : 'Former member');
const methodLabel = (k) => (METHODS.find((m) => m.key === k) || { label: k }).label;

function computeShares(method, amount, rows) {
  const inc = rows.filter((r) => r.included);
  const out = {};
  const cents = Math.round((Number(amount) || 0) * 100);
  if (!inc.length) return out;
  if (cents <= 0 && method !== 'exact') {
    inc.forEach((r) => { out[r.user_id] = 0; });
    return out;
  }
  if (method === 'equal') {
    const base = Math.floor(cents / inc.length);
    const rem = cents - base * inc.length;
    inc.forEach((r, i) => { out[r.user_id] = (base + (i < rem ? 1 : 0)) / 100; });
  } else if (method === 'exact') {
    inc.forEach((r) => { out[r.user_id] = Math.round((parseFloat(r.value) || 0) * 100) / 100; });
  } else if (method === 'percentage') {
    const vals = inc.map((r) => parseFloat(r.value) || 0);
    const tp = vals.reduce((a, b) => a + b, 0);
    let assigned = 0;
    inc.forEach((r, i) => { const c = Math.round((cents * vals[i]) / 100); out[r.user_id] = c / 100; assigned += c; });
    if (Math.abs(tp - 100) < 0.0001 && assigned !== cents) {
      let bi = 0;
      vals.forEach((v, i) => { if (v > vals[bi]) bi = i; });
      out[inc[bi].user_id] = Math.round(out[inc[bi].user_id] * 100 + (cents - assigned)) / 100;
    }
  } else {
    const vals = inc.map((r) => parseFloat(r.value) || 0);
    const tw = vals.reduce((a, b) => a + b, 0);
    if (tw <= 0) { inc.forEach((r) => { out[r.user_id] = 0; }); return out; }
    let assigned = 0;
    inc.forEach((r, i) => { const c = Math.floor((cents * vals[i]) / tw); out[r.user_id] = c / 100; assigned += c; });
    let rem = cents - assigned;
    let i = 0;
    while (rem > 0 && inc.length) {
      const uid = inc[i % inc.length].user_id;
      out[uid] = Math.round(out[uid] * 100 + 1) / 100;
      rem -= 1;
      i += 1;
    }
  }
  return out;
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const paper = brand.backgroundColor;
  const muted = hexA(ink, 0.78);
  const line = hexA(ink, 0.12);
  const tint = hexA(ink, 0.05);
  const tint2 = hexA(ink, 0.09);
  const serif = brand.fontHeading;

  const FOCUS = 'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const panel = { backgroundColor: tint, border: '1px solid ' + line, borderRadius: brand.radius };
  const arch = { backgroundColor: tint, border: '1px solid ' + hexA(accent, 0.42), borderRadius: '150px 150px ' + brand.radius + ' ' + brand.radius };
  const btnPrimary = { backgroundColor: ink, color: paper, borderRadius: '999px', outlineColor: ink, fontFamily: brand.fontBody };
  const btnQuiet = { backgroundColor: 'transparent', color: ink, border: '1px solid ' + line, borderRadius: '999px', outlineColor: ink };
  const fieldStyle = { backgroundColor: paper, border: '1px solid ' + line, borderRadius: '999px', color: ink, outlineColor: ink, fontFamily: brand.fontBody };

  const [section, setSection] = React.useState('expenses');
  const [expenses, setExpenses] = React.useState(INITIAL_EXPENSES);
  const [settlements, setSettlements] = React.useState(INITIAL_SETTLEMENTS);
  const [toast, setToast] = React.useState(null);
  const [syncedAt, setSyncedAt] = React.useState('just now');

  const [expModal, setExpModal] = React.useState(null); // { mode, id }
  const [form, setForm] = React.useState({ description: '', amount: '', date: TODAY, payer_id: CURRENT_USER_ID, split_method: 'equal' });
  const [rows, setRows] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const [payModal, setPayModal] = React.useState(false);
  const [payForm, setPayForm] = React.useState({ payer_id: CURRENT_USER_ID, payee_id: '', amount: '', paid_at: TODAY });
  const [payErrors, setPayErrors] = React.useState({});
  const [paying, setPaying] = React.useState(false);

  const timers = React.useRef([]);
  const dialogRef = React.useRef(null);
  const lastFocus = React.useRef(null);
  const addBtnRef = React.useRef(null);

  React.useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);
  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };

  const flash = (msg) => {
    setToast(msg);
    setSyncedAt('just now');
    later(() => setToast(null), 5200);
  };

  const balances = React.useMemo(() => {
    const b = {};
    MEMBERS.forEach((m) => { b[m.id] = 0; });
    expenses.forEach((e) => {
      if (b[e.payer_id] !== undefined) b[e.payer_id] += Number(e.amount) || 0;
      e.splits.forEach((s) => { if (b[s.user_id] !== undefined) b[s.user_id] -= Number(s.share_amount) || 0; });
    });
    settlements.forEach((s) => {
      if (b[s.payer_id] !== undefined) b[s.payer_id] += Number(s.amount) || 0;
      if (b[s.payee_id] !== undefined) b[s.payee_id] -= Number(s.amount) || 0;
    });
    MEMBERS.forEach((m) => { b[m.id] = Math.round(b[m.id] * 100) / 100; });
    return b;
  }, [expenses, settlements]);

  const suggestions = React.useMemo(() => {
    const creditors = MEMBERS.filter((m) => balances[m.id] > 0.004).map((m) => ({ id: m.id, amt: balances[m.id] })).sort((a, b) => b.amt - a.amt);
    const debtors = MEMBERS.filter((m) => balances[m.id] < -0.004).map((m) => ({ id: m.id, amt: -balances[m.id] })).sort((a, b) => b.amt - a.amt);
    const out = [];
    let i = 0;
    let j = 0;
    while (i < debtors.length && j < creditors.length) {
      const amt = Math.min(debtors[i].amt, creditors[j].amt);
      const r = Math.round(amt * 100) / 100;
      if (r > 0) out.push({ from: debtors[i].id, to: creditors[j].id, amount: r });
      debtors[i].amt -= amt;
      creditors[j].amt -= amt;
      if (debtors[i].amt < 0.005) i += 1;
      if (creditors[j].amt < 0.005) j += 1;
    }
    return out.sort((a, b) => nameOf(a.from).localeCompare(nameOf(b.from)));
  }, [balances]);

  const sortedExpenses = React.useMemo(
    () => expenses.slice().sort((a, b) => (a.expense_date < b.expense_date ? 1 : a.expense_date > b.expense_date ? -1 : 0)),
    [expenses]
  );
  const sortedSettlements = React.useMemo(
    () => settlements.slice().sort((a, b) => (a.paid_at < b.paid_at ? 1 : a.paid_at > b.paid_at ? -1 : 0)),
    [settlements]
  );

  const maxAbs = Math.max(1, ...MEMBERS.map((m) => Math.abs(balances[m.id])));
  const canManage = (e) => e.created_by === CURRENT_USER_ID || (memberOf(CURRENT_USER_ID) || {}).role === 'admin';
  const editing = expModal && expModal.mode !== 'add' ? expenses.find((e) => e.id === expModal.id) : null;
  const readOnly = !!(editing && !canManage(editing));

  const amtNum = parseFloat(form.amount) || 0;
  const shares = computeShares(form.split_method, amtNum, rows);
  const includedRows = rows.filter((r) => r.included);
  const inputTotal = includedRows.reduce((a, r) => a + (parseFloat(r.value) || 0), 0);
  const shareSum = Math.round(includedRows.reduce((a, r) => a + (shares[r.user_id] || 0), 0) * 100) / 100;

  const openAdd = () => {
    lastFocus.current = addBtnRef.current;
    setForm({ description: '', amount: '', date: TODAY, payer_id: CURRENT_USER_ID, split_method: 'equal' });
    setRows(MEMBERS.map((m) => ({ user_id: m.id, included: true, value: '' })));
    setErrors({});
    setConfirmDelete(false);
    setExpModal({ mode: 'add', id: null });
  };

  const openExpense = (e, el) => {
    lastFocus.current = el || null;
    setForm({
      description: e.description,
      amount: e.amount.toFixed(2),
      date: e.expense_date,
      payer_id: e.payer_id,
      split_method: e.split_method,
    });
    setRows(
      MEMBERS.map((m) => {
        const sp = e.splits.find((s) => s.user_id === m.id);
        let value = '';
        if (sp) {
          if (e.split_method === 'exact') value = sp.share_amount.toFixed(2);
          else if (e.split_method === 'percentage') value = String(e.meta && e.meta[m.id] !== undefined ? e.meta[m.id] : Math.round((sp.share_amount / e.amount) * 1000) / 10);
          else if (e.split_method === 'shares') value = String(e.meta && e.meta[m.id] !== undefined ? e.meta[m.id] : 1);
        }
        return { user_id: m.id, included: !!sp, value: value };
      })
    );
    setErrors({});
    setConfirmDelete(false);
    setExpModal({ mode: 'edit', id: e.id });
  };

  const closeExpense = () => {
    setExpModal(null);
    setSaving(false);
    setConfirmDelete(false);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  };

  const openPay = (prefill, el) => {
    lastFocus.current = el || null;
    setPayForm({
      payer_id: prefill && prefill.from ? prefill.from : CURRENT_USER_ID,
      payee_id: prefill && prefill.to ? prefill.to : '',
      amount: prefill && prefill.amount ? prefill.amount.toFixed(2) : '',
      paid_at: TODAY,
    });
    setPayErrors({});
    setPayModal(true);
  };

  const closePay = () => {
    setPayModal(false);
    setPaying(false);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  };

  React.useEffect(() => {
    if (!expModal && !payModal) return undefined;
    const node = dialogRef.current;
    if (!node) return undefined;
    const sel = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const first = node.querySelector(sel);
    if (first && first.focus) first.focus();
    const onKey = (ev) => {
      if (ev.key === 'Escape') {
        ev.stopPropagation();
        if (expModal) closeExpense();
        else closePay();
        return;
      }
      if (ev.key !== 'Tab') return;
      const items = Array.prototype.slice.call(node.querySelectorAll(sel)).filter((n) => n.offsetParent !== null);
      if (!items.length) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (ev.shiftKey && document.activeElement === firstEl) { ev.preventDefault(); lastEl.focus(); }
      else if (!ev.shiftKey && document.activeElement === lastEl) { ev.preventDefault(); firstEl.focus(); }
    };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [expModal, payModal]);

  const onTabKey = (ev, list, current, setter) => {
    const idx = list.findIndex((t) => t.key === current);
    let next = null;
    if (ev.key === 'ArrowRight') next = list[(idx + 1) % list.length];
    if (ev.key === 'ArrowLeft') next = list[(idx - 1 + list.length) % list.length];
    if (ev.key === 'Home') next = list[0];
    if (ev.key === 'End') next = list[list.length - 1];
    if (!next) return;
    ev.preventDefault();
    setter(next.key);
    const el = ev.currentTarget.parentNode.querySelector('[data-tabkey="' + next.key + '"]');
    if (el && el.focus) el.focus();
  };

  const setRowValue = (uid, value) => setRows((rs) => rs.map((r) => (r.user_id === uid ? { ...r, value: value } : r)));
  const toggleRow = (uid, checked) => setRows((rs) => rs.map((r) => (r.user_id === uid ? { ...r, included: checked } : r)));

  const validateExpense = () => {
    const e = {};
    if (!form.description.trim()) e.description = 'give it a short description — “dinner at Thalassa” works.';
    if (!String(form.amount).trim()) e.amount = 'enter the amount that was paid.';
    else if (isNaN(parseFloat(form.amount)) || parseFloat(form.amount) <= 0) e.amount = 'the amount has to be more than $0.00.';
    if (!form.payer_id) e.payer = 'choose who paid for this.';
    if (!form.date) e.date = 'pick the date this was spent.';
    if (!includedRows.length) e.split = 'include at least one member in the split.';
    else if (!e.amount) {
      const cents = Math.round(amtNum * 100);
      if (form.split_method === 'exact' && Math.round(inputTotal * 100) !== cents) {
        e.split = 'exact amounts must add up to the ' + money(amtNum) + ' total (currently ' + money(inputTotal) + ').';
      }
      if (form.split_method === 'percentage' && Math.abs(inputTotal - 100) > 0.0001) {
        e.split = 'percentages must total 100% (currently ' + (Math.round(inputTotal * 100) / 100) + '%).';
      }
      if (form.split_method === 'shares' && inputTotal <= 0) {
        e.split = 'give at least one member a weight above zero.';
      }
    }
    return e;
  };

  const saveExpense = (ev) => {
    if (ev) ev.preventDefault();
    if (readOnly) return;
    const e = validateExpense();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSaving(true);
    const finalShares = computeShares(form.split_method, amtNum, rows);
    const splits = includedRows.map((r) => ({ user_id: r.user_id, share_amount: Math.round((finalShares[r.user_id] || 0) * 100) / 100 }));
    let meta = null;
    if (form.split_method === 'percentage' || form.split_method === 'shares') {
      meta = {};
      includedRows.forEach((r) => { meta[r.user_id] = parseFloat(r.value) || 0; });
    }
    const isEdit = expModal && expModal.mode === 'edit';
    const record = {
      id: isEdit ? expModal.id : 'ex_' + Math.floor(1050 + Math.random() * 900),
      description: form.description.trim(),
      amount: Math.round(amtNum * 100) / 100,
      expense_date: form.date,
      payer_id: form.payer_id,
      created_by: isEdit ? editing.created_by : CURRENT_USER_ID,
      split_method: form.split_method,
      meta: meta,
      splits: splits,
    };
    later(() => {
      setExpenses((list) => (isEdit ? list.map((x) => (x.id === record.id ? record : x)) : [record].concat(list)));
      setSection('expenses');
      closeExpense();
      flash(isEdit ? '“' + record.description + '” updated — balances recalculated.' : '“' + record.description + '” added — balances recalculated.');
    }, 520);
  };

  const deleteExpense = () => {
    if (!editing) return;
    const name = editing.description;
    setExpenses((list) => list.filter((x) => x.id !== editing.id));
    closeExpense();
    flash('“' + name + '” deleted — balances recalculated.');
  };

  const savePayment = (ev) => {
    if (ev) ev.preventDefault();
    const e = {};
    if (!payForm.payer_id) e.payer = 'choose who handed the money over.';
    if (!payForm.payee_id) e.payee = 'choose who received it.';
    if (payForm.payer_id && payForm.payer_id === payForm.payee_id) e.payee = 'pick two different members — a repayment moves between people.';
    const amt = parseFloat(payForm.amount);
    if (!String(payForm.amount).trim()) e.amount = 'enter the amount repaid.';
    else if (isNaN(amt) || amt <= 0) e.amount = 'the repayment has to be more than $0.00.';
    if (!payForm.paid_at) e.paid_at = 'pick the date it was handed over.';
    setPayErrors(e);
    if (Object.keys(e).length) return;
    setPaying(true);
    const record = {
      id: 'st_' + Math.floor(320 + Math.random() * 400),
      payer_id: payForm.payer_id,
      payee_id: payForm.payee_id,
      amount: Math.round(amt * 100) / 100,
      paid_at: payForm.paid_at,
      created_by: CURRENT_USER_ID,
    };
    later(() => {
      setSettlements((list) => [record].concat(list));
      setSection('settle');
      closePay();
      flash(money(record.amount) + ' from ' + nameOf(record.payer_id) + ' to ' + nameOf(record.payee_id) + ' marked as paid.');
    }, 480);
  };

  const splitNote = () => {
    if (errors.split) return { tone: 'error', text: errors.split };
    if (!includedRows.length) return { tone: 'idle', text: 'tick the members this expense should be shared with.' };
    if (amtNum <= 0) return { tone: 'idle', text: 'enter an amount and the shares will work themselves out below.' };
    if (form.split_method === 'equal') {
      return { tone: 'ok', text: 'split evenly — ' + includedRows.length + ' members, ' + money(amtNum / includedRows.length) + ' each, adding up to exactly ' + money(amtNum) + '.' };
    }
    if (form.split_method === 'exact') {
      const diff = Math.round((amtNum - inputTotal) * 100) / 100;
      if (Math.abs(diff) < 0.005) return { tone: 'ok', text: 'exact amounts add up to the ' + money(amtNum) + ' total.' };
      return { tone: 'warn', text: 'shares must add up to the ' + money(amtNum) + ' total (currently ' + money(inputTotal) + ', ' + money(Math.abs(diff)) + ' ' + (diff > 0 ? 'short' : 'over') + ').' };
    }
    if (form.split_method === 'percentage') {
      const t = Math.round(inputTotal * 100) / 100;
      if (Math.abs(t - 100) < 0.0001) return { tone: 'ok', text: 'percentages total 100% — ' + money(shareSum) + ' allocated.' };
      return { tone: 'warn', text: 'percentages must total 100% (currently ' + t + '%).' };
    }
    const t = Math.round(inputTotal * 100) / 100;
    if (t <= 0) return { tone: 'warn', text: 'give at least one member a weight above zero.' };
    return { tone: 'ok', text: t + ' shares in all — ' + money(amtNum) + ' splits in proportion and lands on exactly ' + money(shareSum) + '.' };
  };
  const note = splitNote();

  const statusOf = (id, bal) => {
    const you = id === CURRENT_USER_ID;
    if (bal > 0.004) return you ? 'owed to you' : 'owed to ' + (memberOf(id) || {}).pronoun;
    if (bal < -0.004) return you ? 'you owe' : 'owes';
    return you ? 'you’re settled up' : 'settled up';
  };

  const sectionCount = { expenses: expenses.length, balances: MEMBERS.length, settle: suggestions.length };

  return (
    <div className="min-h-full w-full" style={{ backgroundColor: paper, color: ink, fontFamily: brand.fontBody }}>
      <style>{`
        @keyframes atriumRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes atriumFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes atriumPop { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }
        .atrium-rise { animation: atriumRise .34s cubic-bezier(.22,.61,.36,1) both; }
        .atrium-fade { animation: atriumFade .22s ease-out both; }
        .atrium-pop { animation: atriumPop .26s cubic-bezier(.22,.61,.36,1) both; }
        .atrium-bar { transition: width .5s cubic-bezier(.22,.61,.36,1); }
        .atrium-row { transition: background-color .18s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .atrium-rise, .atrium-fade, .atrium-pop { animation: none !important; }
          .atrium-bar, .atrium-row { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-end gap-6">
          <div data-wf="b-0-0" className="col-span-12 md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: muted }}>group workspace · 4 members</p>
            <h1 className="mt-2 text-[32px] italic leading-tight md:text-[40px]" style={{ fontFamily: serif, color: ink }}>
              Goa Trip 2026 · USD
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm" style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}>
              <Clock aria-hidden="true" className="h-4 w-4" />
              <span>balances recalculated {syncedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{expenses.length} expenses · {settlements.length} repayments logged</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Button
              data-wf="b-0-1"
              ref={addBtnRef}
              type="button"
              onClick={openAdd}
              className={'inline-flex w-full items-center justify-center gap-2 text-[15px] font-semibold ' + FOCUS}
              style={{ ...btnPrimary, padding: '14px 24px', minHeight: 52 }}
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Add expense
            </Button>
          </div>
          <div className="col-span-12 md:col-span-2">
            <button
              data-wf="b-0-2"
              type="button"
              onClick={() => navigate('group-members')}
              className={'inline-flex w-full items-center justify-center gap-2 text-sm font-medium ' + FOCUS}
              style={{ ...btnQuiet, padding: '13px 18px', minHeight: 52 }}
            >
              <Settings aria-hidden="true" className="h-4 w-4" />
              Members &amp; settings
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div data-wf="b-1-0" className="mt-10">
          <div role="tablist" aria-label="Group workspace sections" className="inline-flex flex-wrap gap-1 p-1.5" style={{ backgroundColor: tint, border: '1px solid ' + line, borderRadius: '999px' }}>
            {SECTIONS.map((t) => {
              const on = section === t.key;
              return (
                <button
                  key={t.key}
                  data-wf={t.wf}
                  data-tabkey={t.key}
                  role="tab"
                  id={'tab-' + t.key}
                  aria-selected={on}
                  aria-controls={'panel-' + t.key}
                  tabIndex={on ? 0 : -1}
                  type="button"
                  onClick={() => setSection(t.key)}
                  onKeyDown={(ev) => onTabKey(ev, SECTIONS, section, setSection)}
                  className={'atrium-row inline-flex items-center gap-2 px-6 text-[15px] ' + FOCUS}
                  style={{
                    minHeight: 44,
                    borderRadius: '999px',
                    backgroundColor: on ? ink : 'transparent',
                    color: on ? paper : muted,
                    fontWeight: on ? 600 : 500,
                    outlineColor: ink,
                  }}
                >
                  {t.label}
                  <span className="text-xs" style={{ fontVariantNumeric: 'tabular-nums', opacity: on ? 0.85 : 0.7 }}>{sectionCount[t.key]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {toast ? (
          <div
            role="status"
            className="atrium-fade mt-6 flex items-center gap-3 px-5 py-3"
            style={{ backgroundColor: hexA(accent, 0.16), border: '1px solid ' + hexA(accent, 0.55), borderRadius: '999px' }}
          >
            <CheckCircle aria-hidden="true" className="h-4 w-4" />
            <p className="flex-1 text-sm" style={{ color: ink }}>{toast}</p>
          </div>
        ) : null}

        {/* Row 3 — Expenses */}
        {section === 'expenses' ? (
          <div id="panel-expenses" role="tabpanel" aria-labelledby="tab-expenses" className="mt-8">
            <div data-wf="b-2-0" className="overflow-hidden" style={panel}>
              <div className="flex flex-wrap items-end justify-between gap-4 px-8 pt-8 pb-5">
                <div>
                  <h2 className="text-2xl italic" style={{ fontFamily: serif }}>Expenses</h2>
                  <p className="mt-1 text-sm" style={{ color: muted }}>newest first · tap a description to open it</p>
                </div>
                <p className="text-sm" style={{ color: muted, fontVariantNumeric: 'tabular-nums' }}>
                  {money(expenses.reduce((a, e) => a + e.amount, 0))} spent together
                </p>
              </div>
              <div style={{ borderTop: '1px solid ' + line }} />
              {sortedExpenses.length === 0 ? (
                <div className="px-8 py-14">
                  <Empty
                    title="No expenses logged yet"
                    description="add the first one — a villa deposit, an airport taxi, a round at the beach shack — and goa trip 2026 starts keeping score for all four of you."
                    action={
                      <button
                        type="button"
                        onClick={openAdd}
                        className={'inline-flex items-center gap-2 px-6 text-[15px] font-semibold ' + FOCUS}
                        style={{ ...btnPrimary, minHeight: 48 }}
                      >
                        <Plus aria-hidden="true" className="h-4 w-4" />
                        Add the first expense
                      </button>
                    }
                  />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table className="w-full" style={{ fontVariantNumeric: 'tabular-nums', borderCollapse: 'collapse' }}>
                    <THead>
                      <TR>
                        <TH data-wf="i-2-0-0" scope="col" className="px-8 py-4 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Date</TH>
                        <TH data-wf="i-2-0-1" scope="col" className="px-4 py-4 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Description</TH>
                        <TH data-wf="i-2-0-2" scope="col" className="px-4 py-4 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Paid by</TH>
                        <TH data-wf="i-2-0-3" scope="col" className="px-4 py-4 text-right text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Amount</TH>
                        <TH data-wf="i-2-0-4" scope="col" className="px-4 py-4 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Split method</TH>
                        <TH data-wf="i-2-0-5" scope="col" className="px-8 py-4 text-right text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Your share</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {sortedExpenses.map((e) => {
                        const mine = e.splits.find((s) => s.user_id === CURRENT_USER_ID);
                        const owner = canManage(e);
                        return (
                          <TR key={e.id} className="atrium-rise" style={{ borderTop: '1px solid ' + line }}>
                            <TD className="whitespace-nowrap px-8 py-5 text-sm" style={{ color: muted }}>{fmtDate(e.expense_date)}</TD>
                            <TD className="px-4 py-5">
                              <button
                                type="button"
                                onClick={(ev) => openExpense(e, ev.currentTarget)}
                                className={'text-left text-[15px] font-semibold underline-offset-4 hover:underline ' + FOCUS}
                                style={{ color: ink, outlineColor: ink, borderRadius: 8 }}
                              >
                                {e.description}
                              </button>
                              <p className="mt-1 text-xs" style={{ color: muted }}>
                                {owner ? 'logged by you · editable' : 'logged by ' + nameOf(e.created_by) + ' · view only'}
                              </p>
                            </TD>
                            <TD className="px-4 py-5">
                              <span className="inline-flex items-center gap-2 text-sm">
                                <Avatar name={nameOf(e.payer_id)} className="h-7 w-7" />
                                {e.payer_id === CURRENT_USER_ID ? 'You' : nameOf(e.payer_id)}
                              </span>
                            </TD>
                            <TD className="px-4 py-5 text-right text-[15px] font-semibold">{money(e.amount)}</TD>
                            <TD className="px-4 py-5">
                              <Badge className="inline-flex items-center px-3 py-1 text-xs" style={{ backgroundColor: tint2, color: ink, borderRadius: '999px', border: '1px solid ' + line }}>
                                {methodLabel(e.split_method)}
                              </Badge>
                            </TD>
                            <TD className="px-8 py-5 text-right text-[15px]">
                              {mine ? money(mine.share_amount) : <span className="text-sm" style={{ color: muted }}>not included</span>}
                            </TD>
                          </TR>
                        );
                      })}
                    </TBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Row 4 — Balances */}
        {section === 'balances' ? (
          <div id="panel-balances" role="tabpanel" aria-labelledby="tab-balances" className="mt-8 grid grid-cols-12 gap-6">
            <section data-wf="b-3-0" className="col-span-12 px-8 pb-8 pt-12 md:col-span-6" style={arch}>
              <h2 className="text-center text-2xl italic" style={{ fontFamily: serif }}>Balances</h2>
              <p className="mt-2 text-center text-sm" style={{ color: muted }}>net position in USD, after every expense and repayment</p>
              <ul className="mt-8">
                {MEMBERS.map((m, i) => {
                  const bal = balances[m.id];
                  const positive = bal > 0.004;
                  const zero = Math.abs(bal) <= 0.004;
                  return (
                    <li key={m.id} className="py-4" style={{ borderTop: i === 0 ? 'none' : '1px solid ' + line }}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-3">
                          <Avatar name={m.name} className="h-9 w-9" />
                          <span>
                            <span className="block text-[15px] font-semibold">{m.name}{m.id === CURRENT_USER_ID ? ' (you)' : ''}</span>
                            <span className="block text-xs" style={{ color: muted }}>{m.role === 'admin' ? 'group admin' : 'member'}</span>
                          </span>
                        </span>
                        <span className="text-right">
                          <span className="block text-[17px] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>{signed(bal)}</span>
                          <span className="block text-xs" style={{ color: muted }}>{statusOf(m.id, bal)}</span>
                        </span>
                      </div>
                      <div className="mt-3 h-2 w-full" style={{ backgroundColor: hexA(ink, 0.07), borderRadius: '999px' }}>
                        <div
                          className="atrium-bar h-2"
                          style={{
                            width: Math.max(zero ? 0 : 6, (Math.abs(bal) / maxAbs) * 100) + '%',
                            backgroundColor: positive ? accent : hexA(ink, 0.5),
                            borderRadius: '999px',
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section data-wf="b-3-1" className="col-span-12 px-8 pb-8 pt-12 md:col-span-6" style={arch}>
              <h2 className="text-center text-2xl italic" style={{ fontFamily: serif }}>Who owes whom (simplified)</h2>
              <p className="mt-2 text-center text-sm" style={{ color: muted }}>the fewest transfers that clear every balance</p>
              {suggestions.length === 0 ? (
                <div className="mt-8">
                  <Empty
                    title="Nothing to settle — everyone is square"
                    description="every balance in goa trip 2026 sits at $0.00. log another expense and we’ll work out the shortest way back to even."
                  />
                </div>
              ) : (
                <ul className="mt-8">
                  {suggestions.map((s, i) => (
                    <li key={s.from + s.to} className="atrium-rise flex flex-wrap items-center justify-between gap-4 py-4" style={{ borderTop: i === 0 ? 'none' : '1px solid ' + line }}>
                      <span className="flex items-center gap-2 text-[15px]">
                        <span className="font-semibold">{s.from === CURRENT_USER_ID ? 'You' : nameOf(s.from)}</span>
                        <ArrowRight aria-hidden="true" className="h-4 w-4" style={{ color: accent }} />
                        <span className="font-semibold">{nameOf(s.to)}</span>
                      </span>
                      <span className="flex items-center gap-4">
                        <span className="text-[17px] font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>{money(s.amount)}</span>
                        <button
                          type="button"
                          onClick={(ev) => openPay(s, ev.currentTarget)}
                          className={'px-4 text-sm font-medium ' + FOCUS}
                          style={{ ...btnQuiet, minHeight: 40, backgroundColor: paper }}
                        >
                          Record this
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        ) : null}

        {/* Row 5 — Settle up */}
        {section === 'settle' ? (
          <div id="panel-settle" role="tabpanel" aria-labelledby="tab-settle" className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 px-8 pb-8 pt-12 md:col-span-4" style={arch}>
              <h2 className="text-center text-2xl italic" style={{ fontFamily: serif }}>Settle up</h2>
              <p className="mt-2 text-center text-sm" style={{ color: muted }}>
                money changed hands offline? write it down here and the balances follow.
              </p>
              <Button
                data-wf="b-4-0"
                type="button"
                onClick={(ev) => openPay(suggestions.find((s) => s.from === CURRENT_USER_ID) || null, ev.currentTarget)}
                className={'mt-6 inline-flex w-full items-center justify-center gap-2 text-[15px] font-semibold ' + FOCUS}
                style={{ ...btnPrimary, padding: '14px 20px', minHeight: 52 }}
              >
                <Check aria-hidden="true" className="h-4 w-4" />
                Record a repayment
              </Button>
              <h3 className="mt-8 text-[11px] uppercase tracking-[0.18em]" style={{ color: muted }}>Recorded so far</h3>
              {sortedSettlements.length === 0 ? (
                <p className="mt-3 text-sm" style={{ color: muted }}>no repayments yet — the first one you log shows up here.</p>
              ) : (
                <ul className="mt-3">
                  {sortedSettlements.map((s, i) => (
                    <li key={s.id} className="atrium-rise py-3" style={{ borderTop: i === 0 ? 'none' : '1px solid ' + line }}>
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm">
                          <span className="font-semibold">{s.payer_id === CURRENT_USER_ID ? 'You' : nameOf(s.payer_id)}</span>
                          <span style={{ color: muted }}> paid </span>
                          <span className="font-semibold">{nameOf(s.payee_id)}</span>
                        </span>
                        <span className="text-sm font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>{money(s.amount)}</span>
                      </div>
                      <p className="mt-1 text-xs" style={{ color: muted }}>{fmtDate(s.paid_at)} · marked paid by {nameOf(s.created_by)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div data-wf="b-4-1" className="col-span-12 flex items-start gap-4 px-8 py-8 md:col-span-8" style={panel}>
              <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center" style={{ backgroundColor: hexA(accent, 0.18), borderRadius: '999px' }}>
                <AlertCircle aria-hidden="true" className="h-5 w-5" style={{ color: ink }} />
              </span>
              <div>
                <h2 className="text-xl italic" style={{ fontFamily: serif }}>A ledger, not a wallet</h2>
                <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed" style={{ color: ink }}>
                  Settlements only update balances in this app. No real money is transferred and no payment provider is involved.
                </p>
                <p className="mt-3 max-w-[62ch] text-sm leading-relaxed" style={{ color: muted }}>
                  hand over cash, send a bank transfer, buy the next round — whatever you agree on. when it’s done, record it here so goa trip 2026 stays honest.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Rows 6–11 — Add / edit expense modal */}
      {expModal ? (
        <div
          data-wf="b-5-0"
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto p-4 md:p-10"
          style={{ backgroundColor: hexA(ink, 0.5) }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exp-dialog-title"
            className="atrium-pop w-full max-w-3xl"
            style={{ backgroundColor: paper, borderRadius: brand.radius, border: '1px solid ' + hexA(accent, 0.4), boxShadow: '0 24px 60px ' + hexA(ink, 0.25) }}
          >
            <div className="flex items-start justify-between gap-6 px-8 pt-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: muted }}>Goa Trip 2026 · USD</p>
                <h2 id="exp-dialog-title" className="mt-2 text-[28px] italic leading-tight" style={{ fontFamily: serif }}>
                  {expModal.mode === 'add' ? 'Add an expense' : readOnly ? 'Expense details' : 'Edit expense'}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close without saving"
                onClick={closeExpense}
                className={'inline-flex h-11 w-11 items-center justify-center ' + FOCUS}
                style={{ borderRadius: '999px', border: '1px solid ' + line, color: ink, outlineColor: ink }}
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            {readOnly ? (
              <div className="mx-8 mt-5 flex items-start gap-3 px-5 py-4" style={{ backgroundColor: tint2, borderRadius: brand.radius, border: '1px solid ' + line }}>
                <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />
                <p className="text-sm" style={{ color: ink }}>
                  You’re viewing this one. {nameOf(editing.created_by)} logged it, so only {nameOf(editing.created_by)} or a group admin can change it — ask in the group chat and they can edit it in seconds.
                </p>
              </div>
            ) : null}

            {Object.keys(errors).length ? (
              <div role="alert" className="mx-8 mt-5 flex items-start gap-3 px-5 py-4" style={{ backgroundColor: hexA(accent, 0.14), borderRadius: brand.radius, border: '1px solid ' + hexA(accent, 0.6) }}>
                <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />
                <p className="text-sm" style={{ color: ink }}>
                  Nothing was saved and nothing you typed was lost — {Object.keys(errors).length === 1 ? 'one detail needs' : Object.keys(errors).length + ' details need'} a look below.
                </p>
              </div>
            ) : null}

            <form data-wf="b-6-0" onSubmit={saveExpense} noValidate>
              {/* Row 7 */}
              <div className="grid grid-cols-12 gap-5 px-8 pt-6">
                <div className="col-span-12">
                  <Label htmlFor="exp-description" className="mb-2 block text-[13px] font-semibold">Description</Label>
                  <Input
                    data-wf="i-6-0-0"
                    id="exp-description"
                    value={form.description}
                    disabled={readOnly}
                    onChange={(ev) => setForm({ ...form, description: ev.target.value })}
                    placeholder="sunset cruise, Chapora"
                    aria-invalid={errors.description ? 'true' : undefined}
                    aria-describedby={errors.description ? 'exp-description-err' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, borderColor: errors.description ? accent : line, opacity: readOnly ? 0.65 : 1 }}
                  />
                  {errors.description ? <p id="exp-description-err" className="mt-2 text-xs" style={{ color: ink }}>{errors.description}</p> : null}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <Label htmlFor="exp-amount" className="mb-2 block text-[13px] font-semibold">Amount (USD)</Label>
                  <div className="relative">
                    <span aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[15px]" style={{ color: muted }}>$</span>
                    <Input
                      data-wf="i-6-0-1"
                      id="exp-amount"
                      inputMode="decimal"
                      value={form.amount}
                      disabled={readOnly}
                      onChange={(ev) => setForm({ ...form, amount: ev.target.value })}
                      placeholder="0.00"
                      aria-invalid={errors.amount ? 'true' : undefined}
                      aria-describedby={errors.amount ? 'exp-amount-err' : undefined}
                      className="w-full pl-9 pr-5 text-[15px]"
                      style={{ ...fieldStyle, minHeight: 48, fontVariantNumeric: 'tabular-nums', borderColor: errors.amount ? accent : line, opacity: readOnly ? 0.65 : 1 }}
                    />
                  </div>
                  {errors.amount ? <p id="exp-amount-err" className="mt-2 text-xs" style={{ color: ink }}>{errors.amount}</p> : null}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <Label htmlFor="exp-date" className="mb-2 block text-[13px] font-semibold">Date</Label>
                  <Input
                    data-wf="i-6-0-2"
                    id="exp-date"
                    type="date"
                    value={form.date}
                    disabled={readOnly}
                    onChange={(ev) => setForm({ ...form, date: ev.target.value })}
                    aria-invalid={errors.date ? 'true' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, fontVariantNumeric: 'tabular-nums', borderColor: errors.date ? accent : line, opacity: readOnly ? 0.65 : 1 }}
                  />
                  {errors.date ? <p className="mt-2 text-xs" style={{ color: ink }}>{errors.date}</p> : null}
                </div>

                <div className="col-span-12 md:col-span-4">
                  <Label htmlFor="exp-payer" className="mb-2 block text-[13px] font-semibold">Paid by</Label>
                  <Select
                    data-wf="i-6-0-3"
                    id="exp-payer"
                    value={form.payer_id}
                    disabled={readOnly}
                    onChange={(ev) => setForm({ ...form, payer_id: ev.target.value })}
                    aria-invalid={errors.payer ? 'true' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, borderColor: errors.payer ? accent : line, opacity: readOnly ? 0.65 : 1 }}
                  >
                    <option value="">choose a member…</option>
                    {MEMBERS.map((m) => (
                      <option key={m.id} value={m.id}>{m.id === CURRENT_USER_ID ? m.name + ' (you)' : m.name}</option>
                    ))}
                  </Select>
                  {errors.payer ? <p className="mt-2 text-xs" style={{ color: ink }}>{errors.payer}</p> : null}
                </div>
              </div>

              {/* Row 8 */}
              <div data-wf="b-7-0" className="px-8 pt-8">
                <p id="split-method-label" className="mb-3 text-[13px] font-semibold">Split method</p>
                <div role="tablist" aria-labelledby="split-method-label" className="inline-flex flex-wrap gap-1 p-1.5" style={{ backgroundColor: tint, border: '1px solid ' + line, borderRadius: '999px' }}>
                  {METHODS.map((m) => {
                    const on = form.split_method === m.key;
                    return (
                      <button
                        key={m.key}
                        data-wf={m.wf}
                        data-tabkey={m.key}
                        role="tab"
                        aria-selected={on}
                        aria-controls="split-table"
                        tabIndex={on ? 0 : -1}
                        type="button"
                        disabled={readOnly}
                        onClick={() => { setForm({ ...form, split_method: m.key }); setErrors({ ...errors, split: undefined }); }}
                        onKeyDown={(ev) => { if (!readOnly) onTabKey(ev, METHODS, form.split_method, (k) => setForm({ ...form, split_method: k })); }}
                        className={'atrium-row px-5 text-sm ' + FOCUS}
                        style={{
                          minHeight: 42,
                          borderRadius: '999px',
                          backgroundColor: on ? paper : 'transparent',
                          border: on ? '1px solid ' + hexA(accent, 0.75) : '1px solid transparent',
                          color: on ? ink : muted,
                          fontWeight: on ? 600 : 500,
                          outlineColor: ink,
                          opacity: readOnly ? 0.6 : 1,
                        }}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 9 */}
              <div data-wf="b-8-0" id="split-table" className="mx-8 mt-6 overflow-hidden" style={{ border: '1px solid ' + line, borderRadius: brand.radius }}>
                <div className="px-6 pt-5 pb-3">
                  <h3 className="text-lg italic" style={{ fontFamily: serif }}>Split between members</h3>
                </div>
                <Table className="w-full" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  <THead>
                    <TR>
                      <TH data-wf="i-8-0-0" scope="col" className="px-6 py-3 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Member</TH>
                      <TH data-wf="i-8-0-1" scope="col" className="px-4 py-3 text-left text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Include</TH>
                      <TH data-wf="i-8-0-2" scope="col" className="px-6 py-3 text-right text-[11px] uppercase tracking-[0.16em]" style={{ color: muted, fontWeight: 600 }}>Share</TH>
                    </TR>
                  </THead>
                  <TBody>
                    {rows.map((r) => {
                      const m = memberOf(r.user_id) || { name: 'Member' };
                      const share = r.included ? shares[r.user_id] : null;
                      return (
                        <TR key={r.user_id} style={{ borderTop: '1px solid ' + line }}>
                          <TD className="px-6 py-4">
                            <span className="inline-flex items-center gap-3 text-[15px]">
                              <Avatar name={m.name} className="h-8 w-8" />
                              {m.name}{r.user_id === CURRENT_USER_ID ? ' (you)' : ''}
                            </span>
                          </TD>
                          <TD className="px-4 py-4">
                            <span className="inline-flex items-center gap-2">
                              <Checkbox
                                id={'inc-' + r.user_id}
                                checked={r.included}
                                disabled={readOnly}
                                onChange={(ev) => toggleRow(r.user_id, ev && ev.target ? ev.target.checked : !r.included)}
                                style={{ accentColor: ink, width: 20, height: 20 }}
                              />
                              <Label htmlFor={'inc-' + r.user_id} className="text-xs" style={{ color: muted }}>
                                {r.included ? 'in the split' : 'left out'}
                              </Label>
                            </span>
                          </TD>
                          <TD className="px-6 py-4 text-right">
                            {!r.included ? (
                              <span className="text-sm" style={{ color: muted }}>—</span>
                            ) : form.split_method === 'equal' ? (
                              <span className="text-[15px] font-semibold">{money(share || 0)}</span>
                            ) : (
                              <span className="inline-flex items-center justify-end gap-3">
                                <Label htmlFor={'val-' + r.user_id} className="sr-only">
                                  {form.split_method === 'exact' ? 'exact amount in USD for ' + m.name : form.split_method === 'percentage' ? 'percentage for ' + m.name : 'weight for ' + m.name}
                                </Label>
                                <Input
                                  id={'val-' + r.user_id}
                                  inputMode="decimal"
                                  value={r.value}
                                  disabled={readOnly}
                                  onChange={(ev) => setRowValue(r.user_id, ev.target.value)}
                                  placeholder={form.split_method === 'percentage' ? '25' : form.split_method === 'shares' ? '1' : '0.00'}
                                  className="w-24 px-4 text-right text-[15px]"
                                  style={{ ...fieldStyle, minHeight: 44, fontVariantNumeric: 'tabular-nums', opacity: readOnly ? 0.65 : 1 }}
                                />
                                <span className="w-24 text-right text-sm" style={{ color: muted }}>
                                  {form.split_method === 'percentage' ? '% · ' : form.split_method === 'shares' ? 'sh · ' : ''}
                                  {money(share || 0)}
                                </span>
                              </span>
                            )}
                          </TD>
                        </TR>
                      );
                    })}
                  </TBody>
                </Table>
              </div>

              {/* Row 10 */}
              <div data-wf="b-9-0" className="mx-8 mt-4 flex items-start gap-3 px-5 py-4" style={{ backgroundColor: note.tone === 'ok' ? hexA(accent, 0.12) : tint, border: '1px solid ' + (note.tone === 'ok' ? hexA(accent, 0.5) : line), borderRadius: brand.radius }}>
                {note.tone === 'ok' ? <CheckCircle aria-hidden="true" className="mt-0.5 h-4 w-4" /> : <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />}
                <p role={note.tone === 'error' ? 'alert' : undefined} className="text-sm leading-relaxed" style={{ color: ink, fontVariantNumeric: 'tabular-nums' }}>{note.text}</p>
              </div>

              {/* Row 11 */}
              <div className="grid grid-cols-12 items-center gap-4 px-8 pb-8 pt-6">
                <div className="col-span-12 md:col-span-4">
                  <Button
                    data-wf="b-10-0"
                    type="submit"
                    disabled={readOnly || saving}
                    className={'inline-flex w-full items-center justify-center gap-2 text-[15px] font-semibold ' + FOCUS}
                    style={{ ...btnPrimary, padding: '14px 20px', minHeight: 52, opacity: readOnly ? 0.45 : 1, cursor: readOnly ? 'not-allowed' : 'pointer' }}
                  >
                    {saving ? (
                      <React.Fragment>
                        <Clock aria-hidden="true" className="h-4 w-4" />
                        Saving &amp; recalculating…
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Check aria-hidden="true" className="h-4 w-4" />
                        Save expense
                      </React.Fragment>
                    )}
                  </Button>
                </div>

                {confirmDelete ? (
                  <div data-wf="b-10-1" className="atrium-fade col-span-12 flex flex-wrap items-center gap-3 md:col-span-4">
                    <p className="w-full text-xs" style={{ color: ink }}>delete “{editing ? editing.description : ''}”? balances update straight away.</p>
                    <button
                      type="button"
                      onClick={deleteExpense}
                      className={'px-4 text-sm font-semibold ' + FOCUS}
                      style={{ ...btnQuiet, minHeight: 44, borderColor: hexA(accent, 0.8) }}
                    >
                      Yes, delete it
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(false)}
                      className={'px-4 text-sm ' + FOCUS}
                      style={{ ...btnQuiet, minHeight: 44 }}
                    >
                      Keep it
                    </button>
                  </div>
                ) : (
                  <div className="col-span-12 md:col-span-4">
                    <Button
                      data-wf="b-10-1"
                      type="button"
                      disabled={expModal.mode === 'add' || readOnly}
                      onClick={() => setConfirmDelete(true)}
                      className={'inline-flex w-full items-center justify-center gap-2 text-[15px] ' + FOCUS}
                      style={{
                        ...btnQuiet,
                        padding: '14px 20px',
                        minHeight: 52,
                        opacity: expModal.mode === 'add' || readOnly ? 0.45 : 1,
                        cursor: expModal.mode === 'add' || readOnly ? 'not-allowed' : 'pointer',
                      }}
                    >
                      <Trash aria-hidden="true" className="h-4 w-4" />
                      Delete expense
                    </Button>
                    {expModal.mode === 'add' ? (
                      <p className="mt-2 text-xs" style={{ color: muted }}>available once this expense is saved.</p>
                    ) : null}
                  </div>
                )}

                <p data-wf="b-10-2" className="col-span-12 text-xs leading-relaxed md:col-span-4" style={{ color: muted }}>
                  Only the member who logged an expense, or a group admin, can edit or delete it.
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Rows 12–13 — Record a repayment modal */}
      {payModal ? (
        <div
          data-wf="b-11-0"
          className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto p-4 md:p-10"
          style={{ backgroundColor: hexA(ink, 0.5) }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pay-dialog-title"
            className="atrium-pop w-full max-w-3xl"
            style={{ backgroundColor: paper, borderRadius: brand.radius, border: '1px solid ' + hexA(accent, 0.4), boxShadow: '0 24px 60px ' + hexA(ink, 0.25) }}
          >
            <div className="flex items-start justify-between gap-6 px-8 pt-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: muted }}>Goa Trip 2026 · USD</p>
                <h2 id="pay-dialog-title" className="mt-2 text-[28px] italic leading-tight" style={{ fontFamily: serif }}>Record a repayment</h2>
                <p className="mt-2 max-w-[56ch] text-sm" style={{ color: muted }}>
                  this only updates balances in the app — no real money is transferred and no payment provider is involved.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close without recording"
                onClick={closePay}
                className={'inline-flex h-11 w-11 items-center justify-center ' + FOCUS}
                style={{ borderRadius: '999px', border: '1px solid ' + line, color: ink, outlineColor: ink }}
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            {Object.keys(payErrors).length ? (
              <div role="alert" className="mx-8 mt-5 flex items-start gap-3 px-5 py-4" style={{ backgroundColor: hexA(accent, 0.14), borderRadius: brand.radius, border: '1px solid ' + hexA(accent, 0.6) }}>
                <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />
                <p className="text-sm" style={{ color: ink }}>This repayment wasn’t recorded yet — check the highlighted fields. Everything you entered is still here.</p>
              </div>
            ) : null}

            <div className="grid grid-cols-12 gap-6 px-8 pb-8 pt-6">
              <form data-wf="b-12-0" onSubmit={savePayment} noValidate className="col-span-12 grid grid-cols-2 gap-5 md:col-span-8">
                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="pay-payer" className="mb-2 block text-[13px] font-semibold">Paid by</Label>
                  <Select
                    data-wf="i-12-0-0"
                    id="pay-payer"
                    value={payForm.payer_id}
                    onChange={(ev) => setPayForm({ ...payForm, payer_id: ev.target.value })}
                    aria-invalid={payErrors.payer ? 'true' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, borderColor: payErrors.payer ? accent : line }}
                  >
                    <option value="">choose a member…</option>
                    {MEMBERS.map((m) => (
                      <option key={m.id} value={m.id}>{m.id === CURRENT_USER_ID ? m.name + ' (you)' : m.name}</option>
                    ))}
                  </Select>
                  {payErrors.payer ? <p className="mt-2 text-xs" style={{ color: ink }}>{payErrors.payer}</p> : null}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="pay-payee" className="mb-2 block text-[13px] font-semibold">Paid to</Label>
                  <Select
                    data-wf="i-12-0-1"
                    id="pay-payee"
                    value={payForm.payee_id}
                    onChange={(ev) => setPayForm({ ...payForm, payee_id: ev.target.value })}
                    aria-invalid={payErrors.payee ? 'true' : undefined}
                    aria-describedby={payErrors.payee ? 'pay-payee-err' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, borderColor: payErrors.payee ? accent : line }}
                  >
                    <option value="">choose a member…</option>
                    {MEMBERS.map((m) => (
                      <option key={m.id} value={m.id}>{m.id === CURRENT_USER_ID ? m.name + ' (you)' : m.name}</option>
                    ))}
                  </Select>
                  {payErrors.payee ? <p id="pay-payee-err" className="mt-2 text-xs" style={{ color: ink }}>{payErrors.payee}</p> : null}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="pay-amount" className="mb-2 block text-[13px] font-semibold">Amount (USD)</Label>
                  <div className="relative">
                    <span aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[15px]" style={{ color: muted }}>$</span>
                    <Input
                      data-wf="i-12-0-2"
                      id="pay-amount"
                      inputMode="decimal"
                      value={payForm.amount}
                      onChange={(ev) => setPayForm({ ...payForm, amount: ev.target.value })}
                      placeholder="0.00"
                      aria-invalid={payErrors.amount ? 'true' : undefined}
                      className="w-full pl-9 pr-5 text-[15px]"
                      style={{ ...fieldStyle, minHeight: 48, fontVariantNumeric: 'tabular-nums', borderColor: payErrors.amount ? accent : line }}
                    />
                  </div>
                  {payErrors.amount ? <p className="mt-2 text-xs" style={{ color: ink }}>{payErrors.amount}</p> : null}
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Label htmlFor="pay-date" className="mb-2 block text-[13px] font-semibold">Date paid</Label>
                  <Input
                    data-wf="i-12-0-3"
                    id="pay-date"
                    type="date"
                    value={payForm.paid_at}
                    onChange={(ev) => setPayForm({ ...payForm, paid_at: ev.target.value })}
                    aria-invalid={payErrors.paid_at ? 'true' : undefined}
                    className="w-full px-5 text-[15px]"
                    style={{ ...fieldStyle, minHeight: 48, fontVariantNumeric: 'tabular-nums', borderColor: payErrors.paid_at ? accent : line }}
                  />
                  {payErrors.paid_at ? <p className="mt-2 text-xs" style={{ color: ink }}>{payErrors.paid_at}</p> : null}
                </div>
              </form>

              <div className="col-span-12 md:col-span-4">
                <div className="px-5 py-5" style={{ backgroundColor: tint, border: '1px solid ' + line, borderRadius: brand.radius }}>
                  <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: muted }}>About to record</p>
                  <p className="mt-3 text-[15px] leading-relaxed">
                    <span className="font-semibold">{payForm.payer_id ? (payForm.payer_id === CURRENT_USER_ID ? 'You' : nameOf(payForm.payer_id)) : 'someone'}</span>
                    <span style={{ color: muted }}> paid </span>
                    <span className="font-semibold">{payForm.payee_id ? nameOf(payForm.payee_id) : 'someone'}</span>
                  </p>
                  <p className="mt-2 text-2xl font-semibold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {money(parseFloat(payForm.amount) || 0)}
                  </p>
                  <p className="mt-2 text-xs" style={{ color: muted }}>{fmtDate(payForm.paid_at)} · balances update the moment you confirm</p>
                </div>
                <Button
                  data-wf="b-12-1"
                  type="button"
                  disabled={paying}
                  onClick={savePayment}
                  className={'mt-4 inline-flex w-full items-center justify-center gap-2 text-[15px] font-semibold ' + FOCUS}
                  style={{ ...btnPrimary, padding: '14px 20px', minHeight: 52 }}
                >
                  {paying ? (
                    <React.Fragment>
                      <Clock aria-hidden="true" className="h-4 w-4" />
                      Recording…
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Check aria-hidden="true" className="h-4 w-4" />
                      Mark as paid
                    </React.Fragment>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
