/**
 * Saves the website's form submissions into this Google Sheet.
 * Setup: paste this file into Extensions > Apps Script, fill in SECRET (and optionally NOTIFY_EMAIL),
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 */

// Must be exactly the same as GOOGLE_SHEETS_SECRET in the website's .env.local file.
const SECRET = 'PASTE_GOOGLE_SHEETS_SECRET_HERE';

// Optional: an email address that gets an alert for every new submission. Leave '' to turn off.
const NOTIFY_EMAIL = '';

// Optional: thank-you email sent to the person who filled in the form. Leave the subject '' to turn off.
const THANK_YOU_SUBJECT = '';
const THANK_YOU_BODY = 'Thank you for contacting us. Our team will get back to you shortly.';

const FORMS = {
  enquiry: {
    sheet: 'Enquiries',
    title: 'New Trading Enquiry',
    columns: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      segment: 'Segment',
      investment: 'Investment',
      package: 'Package',
    },
  },
  message: {
    sheet: 'Messages',
    title: 'New Message from Website',
    columns: { name: 'Name', last_name: 'Last name', email: 'Email', message: 'Message' },
  },
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return reply({ ok: false, error: 'Unauthorized' });

    const form = FORMS[data.form];
    if (!form) return reply({ ok: false, error: 'Unknown form' });

    const keys = Object.keys(form.columns);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const headers = ['Timestamp', 'Page'].concat(keys.map((key) => form.columns[key]));
      getSheet(form.sheet, headers).appendRow([new Date(), asText(data.page)].concat(keys.map((key) => asText(data[key]))));
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) {
      const body = keys.map((key) => form.columns[key] + ': ' + (data[key] || '')).join('\n');
      MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: form.title, body: body, replyTo: data.email });
    }
    if (THANK_YOU_SUBJECT && data.email) {
      MailApp.sendEmail({ to: data.email, subject: THANK_YOU_SUBJECT, body: THANK_YOU_BODY });
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

// Creates the tab with a bold, frozen header row the first time a form is used.
function getSheet(name, headers) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stops visitor input such as "=IMPORTXML(...)" from running as a spreadsheet formula.
function asText(value) {
  const text = String(value == null ? '' : value).slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
