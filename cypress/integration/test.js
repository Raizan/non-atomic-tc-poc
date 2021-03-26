/// <reference types="cypress" />
import Form, { PAGE_FILE_PATH } from "../pom/form";

const page = "./webpages/form.html";

describe("Actions", () => {
  beforeEach(() => {
    cy.visit(page);
  });

  it("Client side validation should work", () => {
    Form.getFirstNameField().type("hehe");
  });
});
