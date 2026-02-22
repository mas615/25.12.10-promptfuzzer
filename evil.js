// 무해한 “실행 여부 확인용” 파일
// (서버에서 require()되면 여기 코드가 실행됨)
// 1) 서버 콘솔에 로그 남기기 (가능한 경우)
try {
  console.log("[waywayback] evil.js loaded");
} catch (e) {}

// 2) 파일 시스템 접근이 가능한지(경로 존재 확인)만 해보기
try {
  const fs = require("fs");
  const path = require("path");
  const snapshotsDir = path.join(__dirname); // /app/snapshots 로 추정
  // 존재하는 파일 목록 일부만 로깅 (유출 목적 아님)
  const files = fs.readdirSync(snapshotsDir).slice(0, 5);
  console.log("[waywayback] snapshots sample:", files);
} catch (e) {
