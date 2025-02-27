// cypress\e2e\TestDiffDevice.cy.js
describe("Responsive Screenshots", () => {
  const url = "http://localhost:4173"
  const viewports = [
    { name: "desktop", width: 1280, height: 800 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 375, height: 667 },
  ]

  viewports.forEach((viewport) => {
    it(`Takes a screenshot at ${viewport.name} size`, () => {
      cy.viewport(viewport.width, viewport.height)
      cy.visit(url)
      cy.wait(1000) // 等待頁面加載
      cy.screenshot(`screenshot-${viewport.name}`)
    })
  })
})
