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
  assert.match(html, /Every song/);
  assert.match(html, /Interactive Lyrics Lab/i);
  assert.match(html, /THE APP, INSIDE THE SITE/);
  assert.match(html, /airplay-speaker-demo\.mp4/);
  assert.match(html, /CD Quality/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the APK download page", async () => {
  const response = await render("/download");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Download Airplay Speaker for Android TV/);
  assert.match(html, /Airplay-Speaker-v0\.14\.8\.apk/);
  assert.match(html, /8d78ab7c4ae999bd2bca792f6e1a15265a213347e0774d09a3c349d74923613a/);
  assert.match(html, /Android TV 7\.0\+/);
  assert.match(html, /adb install -r/);
});
