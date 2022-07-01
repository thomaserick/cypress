describe('Cadastro de usuario alurapic', () => {

    beforeEach(() => {
        cy.visit("/");
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
        cy.get('input[formcontrolname="email"]').type('thomaserick')
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')    
    
      })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it(`registra novo usuario ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    }); 
    

})