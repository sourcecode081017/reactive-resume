import { describe, expect, it } from "vite-plus/test";

import { createUrl, ensureAbsoluteUrl } from "./url";

describe("createUrl", () => {
  it("returns empty strings for undefined url", () => {
    expect(createUrl()).toEqual({ url: "", label: "" });
    expect(createUrl(undefined)).toEqual({ url: "", label: "" });
  });

  it("uses url as label when label is not provided", () => {
    expect(createUrl("https://example.com")).toEqual({
      url: "https://example.com",
      label: "https://example.com",
    });
  });

  it("uses provided label", () => {
    expect(createUrl("https://example.com", "Example")).toEqual({
      url: "https://example.com",
      label: "Example",
    });
  });
});

describe("ensureAbsoluteUrl", () => {
  it("returns empty string unchanged", () => {
    expect(ensureAbsoluteUrl("")).toBe("");
  });

  it("leaves https:// URLs untouched", () => {
    expect(ensureAbsoluteUrl("https://github.com/user")).toBe("https://github.com/user");
  });

  it("leaves http:// URLs untouched", () => {
    expect(ensureAbsoluteUrl("http://example.com")).toBe("http://example.com");
  });

  it("is case-insensitive for existing protocols", () => {
    expect(ensureAbsoluteUrl("HTTPS://example.com")).toBe("HTTPS://example.com");
  });

  it("prepends https:// to bare domain URLs", () => {
    expect(ensureAbsoluteUrl("github.com/user")).toBe("https://github.com/user");
  });

  it("prepends https:// to linkedin URLs without protocol", () => {
    expect(ensureAbsoluteUrl("linkedin.com/in/user")).toBe("https://linkedin.com/in/user");
  });
});
