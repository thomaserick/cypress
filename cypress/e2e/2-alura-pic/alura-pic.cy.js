describe("Usabilidade tela cadastro", () => {
  
    beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });


  it('Verifica mensagem de senaha com menos de 8 caracteres',()=>{
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="password"]').type('123')
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')    

  })

  it('Verifica mensagem nome de usuário com letra maiúscula ',()=>{
    cy.contains('a','Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="userName"]').type('THOMAS')
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage','Must be lower case').should('be.visible')    

  })
   

   

  
});
