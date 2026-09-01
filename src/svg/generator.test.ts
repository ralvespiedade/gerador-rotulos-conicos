import assert from "node:assert/strict"
import test from "node:test"
import { generateSVG } from "./generator.js"

test("generates a centered SVG sector with dynamic dimensions", () => {
  const svg = generateSVG({ internalRadius: 80, externalRadius: 100, angle: 60 })

  assert.match(svg, /width="220mm"/)
  assert.match(svg, /height="220mm"/)
  assert.match(svg, /viewBox="0 0 220 220"/)
  assert.match(svg, /M 150 40\.717/)
  assert.match(svg, /L 160 23\.397/)
  assert.match(svg, /A 100 100 0 0 0/)
  assert.match(svg, /A 80 80 0 0 1/)
  assert.match(svg, /Z/)
})

test("uses the large-arc flag on both arcs above 180 degrees", () => {
  const svg = generateSVG({ internalRadius: 80, externalRadius: 100, angle: 240 })

  assert.match(svg, /A 100 100 0 1 0/)
  assert.match(svg, /A 80 80 0 1 1/)
})

test("rejects invalid developments", () => {
  assert.throws(
    () => generateSVG({ internalRadius: 100, externalRadius: 80, angle: 60 }),
    /external radius/
  )
  assert.throws(
    () => generateSVG({ internalRadius: 80, externalRadius: 100, angle: 360 }),
    /between 0 and 360/
  )
})
