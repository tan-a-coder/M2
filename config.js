// ============================================================
// PACE M2 — GAMES INFRA CONFIG  (edit this file, commit, push)
// ============================================================
// Live leaderboard backend: Google Apps Script Web App backed by a
// Google Sheet ("PACE M2 Leaderboard"). The script lives in
// backend/code.gs — deployed as Web app, Execute as: Me,
// Access: Anyone. The /exec URL below is the ONLY thing you edit.
//
// Requests are deliberately "simple" (GET with ?action=, POST with
// text/plain body) so Apps Script's lack of CORS preflight handling
// never blocks the browser.
// ============================================================
window.PACE_CONFIG = {
  pastebox: {
    adapter: "apps-script",
    endpoint: "https://script.google.com/macros/s/AKfycbyIT1WKcWiMFhex_mmM8RLy8XvSt7vKsBjLyYct3xJIaMKu-SUqMVFO7wfdcGrniVtd/exec",
    session: "2026-08-06",
    pollMs: 5000,          // dashboard auto-refresh
    timeoutMs: 10000
  },
  defaultTeams: ["Group 0", "Group 1", "Group 2", "Group 3", "Group 4",
                 "Group 5", "Group 6", "Group 7", "Group 8", "Group 9",
                 "Group 10"],
  heartbeatMs: 30000       // game-side online heartbeat
};
