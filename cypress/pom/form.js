export const PAGE_FILE_PATH = "./webpages/form.html";

export const INVALID_VALIDATION_CLASS = ".invalid-feedback";

export default class Form {
  /**
   * @return {Cypress.Chainable}
   */
  static getFirstNameField() {
    return cy.get("#first-name");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getLastNameField() {
    return cy.get("#last-name");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getUsernameField() {
    return cy.get("#username");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getCityField() {
    return cy.get("#city");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getStateField() {
    return cy.get("#state");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getZipField() {
    return cy.get("#zip");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getTermAndConditionCheckboxField() {
    return cy.get("#tnc-checkbox");
  }

  /**
   * @return {Cypress.Chainable}
   */
  static getSubmitButton() {
    return cy.get('[type="submit"]');
  }
}
