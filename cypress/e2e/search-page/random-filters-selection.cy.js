/// <reference types="cypress" />

import { getRandomOption } from '../../support/common';
import { slowCypressDown } from 'cypress-slow-down';

/**
 * Publisher and Author filters are dynamic fields, which means the options of these filters depends on the
 * combination of other filters. For example, if you select a Spanish, the publisher filter will show only 
 * Publisher with Spanish books.
 */

const options = {
    filters: ['All languages', 'Publication date', 'Topic', 'Publisher', 'Author', 'Format'],
    languages: ['All languages', 'English', 'French', 'German', 'Italian', 'Portuguese', 'Spanish'],
    publicationDate: ['In the last year', 'In the last 2 years', 'In the last 5 years'],
    topic: ['Business', 'Social Sciences', 'Theology & Religion', 'History', 'Literature'],
    format: ['FORMAT', 'ePub', 'PDF']
};

let randomSecondFilterOption = '';
const randomFilterOption = getRandomOption(options.filters);
const randomLanguageOption = getRandomOption(options.languages);
const randomPublicationDate = getRandomOption(options.publicationDate);
const randomTopic = getRandomOption(options.topic);
const randomFormat = getRandomOption(options.format);

slowCypressDown(1000);

Cypress._.times(1, () => {

    describe('Search Page Filters', () => {

        before(() => {
            cy.intercept('GET', Cypress.env('waitForCatalogue')).as('waitForCatalogue')
            cy.visit('/search')
            cy.wait('@waitForCatalogue')
        })

        it('should randomly pick two filters and should validate the search is returning 5 pages of items', () => {
            cy.contains(RegExp(`${randomFilterOption}\\b`))
                .click()

            switch (randomFilterOption) {
                case 'All languages':
                    cy.contains(randomLanguageOption)
                        .click()
                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'All languages') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'Publication date':
                            cy.contains(randomPublicationDate)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Topic':
                            cy.contains(randomTopic)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publisher':
                            cy.getByDataComponentLocator('FilterListItem').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Author':
                            cy.getByDataTestLocator('FilterListItem-label').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Format':
                            cy.contains(randomFormat, { matchCase: true })
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }
                    cy.checkThereAreFivePageOfResults()
                    break;

                case 'Publication date':
                    cy.contains(randomPublicationDate)
                        .click()

                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'Publication date') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'All languages':
                            cy.contains(randomLanguageOption)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Topic':
                            cy.contains(randomTopic)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publisher':
                            cy.getByDataComponentLocator('FilterListItem').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Author':
                            cy.getByDataTestLocator('FilterListItem-label').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Format':
                            cy.contains(randomFormat, { matchCase: true })
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }
                    cy.checkThereAreFivePageOfResults()
                    break;

                case 'Topic':
                    cy.contains(randomTopic)
                        .click()

                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'Topic') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'All languages':
                            cy.contains(randomLanguageOption)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publication date':
                            cy.contains(randomPublicationDate)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publisher':
                            cy.getByDataComponentLocator('FilterListItem').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Author':
                            cy.getByDataTestLocator('FilterListItem-label').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Format':
                            cy.contains(randomFormat, { matchCase: true })
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }
                    cy.checkThereAreFivePageOfResults()
                    break;

                case 'Publisher':
                    cy.getByDataComponentLocator('FilterListItem').first()
                        .click()
                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'Publisher') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'All languages':
                            cy.contains(randomLanguageOption)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publication date':
                            cy.contains(randomPublicationDate)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Topic':
                            cy.contains(randomTopic)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Author':
                            cy.getByDataTestLocator('FilterListItem-label').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Format':
                            cy.contains(randomFormat, { matchCase: true })
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }
                    cy.checkThereAreFivePageOfResults()
                    break;

                case 'Author':
                    cy.getByDataTestLocator('FilterListItem-label').first()
                        .click()

                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'Author') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'All languages':
                            cy.contains(randomLanguageOption)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publication date':
                            cy.contains(randomPublicationDate)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Topic':
                            cy.contains(randomTopic)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publisher':
                            cy.getByDataComponentLocator('FilterListItem').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Format':
                            cy.contains(randomFormat, { matchCase: true })
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }

                    cy.checkThereAreFivePageOfResults()
                    break;

                case 'Format':
                    cy.contains(randomFormat, { matchCase: true })
                        .click()

                    cy.get('body')
                        .focus()
                        .click()

                    randomSecondFilterOption = getRandomOption(options.filters);
                    while (randomSecondFilterOption === 'Format') {
                        randomSecondFilterOption = getRandomOption(options.filters);
                    }

                    cy.contains(RegExp(`${randomSecondFilterOption}\\b`))
                        .click()

                    switch (randomSecondFilterOption) {
                        case 'All languages':
                            cy.contains(randomLanguageOption)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publication date':
                            cy.contains(randomPublicationDate)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Topic':
                            cy.contains(randomTopic)
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Publisher':
                            cy.getByDataComponentLocator('FilterListItem').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                        case 'Author':
                            cy.getByDataTestLocator('FilterListItem-label').first()
                                .click()
                            cy.checkThereAreFivePageOfResults()
                            break;
                    }

                    cy.checkThereAreFivePageOfResults()
                    break;
            }
        })
    })
})