describe("page", () => {
  it("change description form test", () => {
    cy.visit("/");

    const desc = "desc";

    cy.findByTestId(desc).should("have.text", "initial description");

    const newText = "new description";

    cy.findByTestId('input').type(newText);
    cy.findByText("change").click();
    cy.findByTestId(desc).should((descEl) => {
      const result = descEl.text();

      expect(result).toEqual(newText);
    });
  });
});
