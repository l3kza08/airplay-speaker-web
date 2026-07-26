import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Airplay Speaker landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Airplay Speaker/);
  assert.match(html, /Music,/);
  assert.match(html, /Scroll to experience/);
  assert.match(html, /Interactive Lyrics Lab/i);
  assert.match(html, /LIVE EXPERIENCE/);
  assert.match(html, /Karaoke lyrics/);
  assert.match(html, /Duet vocals/);
  assert.match(html, /Instrumental break/);
  assert.match(html, /Up Next queue/);
  assert.match(html, /Full text lyrics/);
  assert.match(html, /film-01\.mp4/);
  assert.match(html, /Changes automatically every 15 seconds/);
  assert.match(html, /16-bit ALAC/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the APK download page", async () => {
  const response = await render("/download");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Download Airplay Speaker for Android TV/);
  assert.match(html, /Airplay-Speaker-v1\.0\.0\.apk/);
  assert.match(html, /WHAT’S NEW IN v1\.0\.0/);
  assert.match(html, /6da633e37fffe6e59eab8b41a4c1da3455f3a035508d52650b41c257f57a32ac/);
  assert.match(html, /Android TV 7\.0\+/);
  assert.match(html, /adb install -r/);
});
