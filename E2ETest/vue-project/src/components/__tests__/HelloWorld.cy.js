// 用cypress也可以實作整合測試
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
  it("renders properly", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } })
    cy.get("h1").should("contain", "Hello Cypress")
  })
})
