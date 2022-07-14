

describe('home page', ()=>{
  
  it('realizar login', ()=>{
    cy.visit('/')
    cy.get('p[class="login-description-page"]').should('have.text','Acesso a plataforma')
    cy.get('input[placeholder="seu e-mail"]').type('usuariotestes@multti.com')
    cy.get('input[placeholder="sua senha"]').type('123456')
    cy.get('.login-button').click()
  })

  it('filtragem nfs', ()=>{
      cy.visit('/')
      cy.get('p[class="login-description-page"]').should('have.text','Acesso a plataforma')
      cy.get('input[placeholder="seu e-mail"]').type('usuariotestes@multti.com')
      cy.get('input[placeholder="sua senha"]').type('123456')
      cy.get('.login-button').click().wait(5000)
      cy.get(':nth-child(3) > .navbar-item-folder-vertical').click()
      cy.get(' div:nth-child(3) > ul > li:nth-child(1) > a > span').click()
      cy.get(' div.styles_formSelectInput__1wy97.css-2b097c-container > div').type('ADRIANA WAGNER KARPAT{enter}')
      cy.get(':nth-child(2) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').clear().type("01042022")
      cy.get(':nth-child(3) > .calendar-container > .react-datepicker-wrapper > .react-datepicker__input-container > .input-field').clear().type('13072022')
      cy.get('.filter-button-area > .btn-primary').click()
      cy.get('.moreoptionsdisplay-wrapper > .icon-wrapper').click()
      cy.get('.modal-options-list-item').click()

  })
})
