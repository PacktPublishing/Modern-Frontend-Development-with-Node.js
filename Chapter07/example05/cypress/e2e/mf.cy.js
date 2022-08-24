describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://microfrontends.art");

    // Expect the title "to contain" a substring.
    cy.title().should("contain", "Micro Frontends");

    // Expect the h1 element to have a specific text
    cy.get("h1").should("have.text", "The Art of Micro Frontends");
  });
});
