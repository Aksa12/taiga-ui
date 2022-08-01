import {EXAMPLE_ID} from '../../../support/shared.entities';

describe(`InputTag`, () => {
    beforeEach(() => cy.tuiVisit(`components/input-tag`));

    it(`long text`, () => {
        cy.get(`#base`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-input-tag__native`)
            .type(`Very looooooooooooooooooooooooong Text{enter}`);

        cy.get(`@wrapper`).matchImageSnapshot(`02-input-tag-very-long-text`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-input-tag__native`)
            .type(`1{enter}`)
            .type(`2{enter}`);

        cy.get(`@wrapper`).matchImageSnapshot(`03-input-tag-not-very-long-text`);
    });

    it(`switch theme mode`, {responseTimeout: 30_000}, () => {
        cy.get(`tui-doc-example`)
            .findByAutomationId(EXAMPLE_ID)
            .each(($el, index) => {
                cy.wrap($el).matchImageSnapshot(`01-light-mode-${index}`);
            });

        cy.get(`.night-mode`).click();

        cy.get(`tui-doc-example`)
            .findByAutomationId(EXAMPLE_ID)
            .each(($el, index) => {
                cy.wrap($el).matchImageSnapshot(`01-night-mode-${index}`);
            });
    });
});