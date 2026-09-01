import assert from "node:assert/strict"
import test from "node:test"
import { polarToCartesian } from "./polarToCartesian.js"

test("converts the cardinal angles around a center", () => {
  const center = { x: 100, y: 100 }

  assert.deepEqual(polarToCartesian(center, 10, 0), { x: 110, y: 100 })
  assert.deepEqual(polarToCartesian(center, 10, 90), { x: 100, y: 90 })
  assert.deepEqual(polarToCartesian(center, 10, 180), { x: 90, y: 100 })
})

test("keeps the requested distance from the center", () => {
  const center = { x: 23, y: 47 }
  const point = polarToCartesian(center, 42, 37)
  const distance = Math.hypot(point.x - center.x, point.y - center.y)

  assert.ok(Math.abs(distance - 42) < 1e-10)
})
