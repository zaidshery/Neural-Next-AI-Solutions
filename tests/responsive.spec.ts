import { expect, test } from "@playwright/test"

const viewports = [
  { name: "small-mobile", width: 360, height: 800 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 900 },
  { name: "desktop", width: 1440, height: 1000 },
]

for (const viewport of viewports) {
  test(`${viewport.name} renders without page overflow`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    await expect(page.locator("h1")).toContainText("Grows Your Business")
    await expect(page.locator("#services")).toBeAttached()
    await expect(page.locator("#work")).toBeAttached()
    await expect(page.locator("#pricing")).toBeAttached()
    await expect(page.locator("#contact")).toBeAttached()

    const dimensions = await page.evaluate(() => {
      const isClippedByAncestor = (element: HTMLElement) => {
        let parent = element.parentElement
        while (parent && parent !== document.body) {
          const overflowX = getComputedStyle(parent).overflowX
          if (["hidden", "clip", "auto", "scroll"].includes(overflowX)) return true
          parent = parent.parentElement
        }
        return false
      }
      const overflowElements = [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => !isClippedByAncestor(element))
        .map((element) => {
          const rect = element.getBoundingClientRect()
          return {
            element: `${element.tagName.toLowerCase()}.${element.className}`,
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            overflow: Math.round(Math.max(-rect.left, rect.right - window.innerWidth)),
          }
        })
        .filter((item) => item.left < -1 || item.right > window.innerWidth + 1)
        .sort((a, b) => b.overflow - a.overflow)
        .slice(0, 30)

      return {
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        overflowElements,
      }
    })
    expect(dimensions.documentWidth, JSON.stringify(dimensions.overflowElements)).toBeLessThanOrEqual(dimensions.viewportWidth)
  })
}

test("mobile navigation and form controls are touch friendly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  await expect(page.locator(".nav-links")).toBeHidden()
  const menuButton = page.locator(".menu-button")
  await expect(menuButton).toBeVisible()
  await expect(menuButton).toHaveAttribute("aria-expanded", "false")
  await menuButton.click()
  await expect(page.locator("#mobile-navigation")).toBeVisible()
  await expect(menuButton).toHaveAttribute("aria-expanded", "true")
  await page.keyboard.press("Escape")
  await expect(page.locator("#mobile-navigation")).toBeHidden()

  await page.locator("#contact").scrollIntoViewIfNeeded()
  const controlFontSize = await page.locator(".contact-form input").first().evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).fontSize),
  )
  expect(controlFontSize).toBeGreaterThanOrEqual(16)
})

test("desktop navigation remains available", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto("/")
  await expect(page.locator(".nav-links")).toBeVisible()
  await expect(page.locator(".menu-button")).toBeHidden()
})

test("reduced-motion mode disables decorative cursor and 3D motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto("/")
  await expect(page.locator(".cursor-dot")).toBeHidden()
  await expect(page.locator(".cursor-ring")).toBeHidden()
  await expect(page.locator(".hero-canvas canvas")).toHaveCount(0)
})
