import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import ImageGallery from "@/components/ImageGallery.vue"

describe("ImageGallery", () => {
  it("renders correctly", () => {
    const mockImages = [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400/orange",
      "https://placehold.co/600x400?text=Image+3",
    ]
    const wrapper = mount(ImageGallery, {
      props: { images: mockImages },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
