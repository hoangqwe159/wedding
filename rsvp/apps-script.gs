/**
 * RSVP receiver — paste into Google Apps Script (Extensions → Apps Script)
 * of the Google Sheet where you want replies to appear. See README.md.
 */
var SHEET_NAME = "RSVP";
var HEADERS = ["Thời gian", "Họ tên", "Tham dự", "Sự kiện", "Số người", "Lời chúc", "Tên trên link", "Ngôn ngữ"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
    var p = (e && e.parameter) || {};
    function clean(v) { v = String(v || "").slice(0, 600); return /^[=+\-@]/.test(v) ? "'" + v : v; }
    sh.appendRow([
      new Date(),
      clean(p.name),
      p.attend === "yes" ? "Có" : "Không",
      clean(p.event),
      Number(p.guests) || 0,
      clean(p.message),
      clean(p.invited),
      clean(p.lang),
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
