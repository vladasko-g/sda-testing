describe("anonymous calculator", () => {
  it("can make calculations", () => {
    console.log("cy", cy);

    cy.visit("/");
    cy.findByText(/^change$/).click();
    cy.findByTestId("description").should("have.text", "Changed description!");
  });
});
