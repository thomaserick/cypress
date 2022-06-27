describe("Login e registro de usuario alura pic", () => {
  
    beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it('Verifica mensagens validações',()=>{

    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Email is required!').should('be.visible')
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Full name is required!').should('be.visible')
    cy.contains('ap-vmessage','Email is required!').should('be.visible')
    cy.contains('ap-vmessage','User name is required!').should('be.visible')
    cy.contains('ap-vmessage','Password is required!').should('be.visible')

  })

  it('Verifica mensagem de e-mail invalido',()=>{
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="email"').type('thomaserick')
    cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')    

  })

  it('Verifica mensagem de senaha com menos de 8 caracteres',()=>{
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="password"').type('123')
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')    

  })

  it('Verifica mensagem nome de usuário com letra maiúscula ',()=>{
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="userName"').type('THOMAS')
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Must be lower case').should('be.visible')    

  })
  
});
