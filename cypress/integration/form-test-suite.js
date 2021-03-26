/// <reference types="cypress" />
import Form, { PAGE_FILE_PATH, INVALID_VALIDATION_CLASS } from "../pom/form";

describe("Form Test", () => {
  beforeEach(() => {
    cy.visit(PAGE_FILE_PATH);
  });

  it("Validation for required fields should work", () => {
    const errorList = [];
    Form.getSubmitButton().click();
    Form.getFirstNameField()
      .siblings()
      .then((elements) => {
        try {
          // Element doesn't exist in DOM
          // This case simulates a scenario in which
          // an event is triggered but doesn't inject the
          // error label to DOM
          const validationLabel = elements.filter(
            `.${INVALID_VALIDATION_CLASS}`
          );
          const errorName = "First name";
          expect(validationLabel, errorName).to.have.class(
            INVALID_VALIDATION_CLASS
          );
          expect(validationLabel, errorName).to.be.visible;
        } catch (err) {
          errorList.push(err.message);
        }
      });
    Form.getLastNameField()
      .siblings()
      .then((elements) => {
        try {
          // Element exists in DOM, but has attribute "hidden"
          // This case simulates a scenario in which
          // hidden attribute is not deleted/toggled off
          const validationLabel = elements.filter(
            `.${INVALID_VALIDATION_CLASS}`
          );
          const errorName = "Last name";
          expect(validationLabel, errorName).to.be.visible;
        } catch (err) {
          errorList.push(err.message);
        }
      });
    Form.getUsernameField()
      .siblings()
      .then((elements) => {
        try {
          // Element exists in DOM
          // This case works as expected
          const validationLabel = elements.filter(
            `.${INVALID_VALIDATION_CLASS}`
          );
          const errorName = "Username";
          // This existence check is unnecessary, but
          // it's here to show how it goes when validation
          // works as expected
          expect(validationLabel, errorName).to.have.class(
            INVALID_VALIDATION_CLASS
          );
          expect(validationLabel, errorName).to.be.visible;
        } catch (err) {
          errorList.push(err.message);
        }
      })
      .then(() => {
        // Make sure to put uncaught exception as the last statement
        expect(errorList, errorList.join("\n")).to.be.empty;
      });
  });
});
