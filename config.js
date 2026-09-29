window.PACE_CONFIG = {
  pastebox: {
    adapter: "apps-script",
    endpoint: "https://script.google.com/macros/s/AKfycbyIT1WKcWiMFhex_mmM8RLy8XvSt7vKsBjLyYct3xJIaMKu-SUqMVFO7wfdcGrniVtd/exec",
    session: "2026-08-06",
    pollMs: 5000,          // dashboard auto-refresh
    timeoutMs: 15000
  },
  defaultTeams: ["Group 0", "Group 1", "Group 2", "Group 3", "Group 4",
                 "Group 5", "Group 6", "Group 7", "Group 8", "Group 9",
                 "Group 10"],
  heartbeatMs: 30000       // game-side online heartbeat
};
