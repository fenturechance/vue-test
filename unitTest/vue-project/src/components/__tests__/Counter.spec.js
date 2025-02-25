import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import Counter from "@/components/Counter.vue"

describe("Counter.vue", () => {
  it("increments count when + button is clicked", async () => {
    const wrapper = mount(Counter)
    await wrapper.find("button#add").trigger("click")
    expect(wrapper.vm.count).toBe(1)
  })

  it("decrements count when - button is clicked", async () => {
    const wrapper = mount(Counter)
    await wrapper.find("button#minus").trigger("click")
    expect(wrapper.vm.count).toBe(-1)
  })
})
