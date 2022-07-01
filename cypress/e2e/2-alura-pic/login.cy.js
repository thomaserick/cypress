describe('Buscar fotos e dados ', () => {

    beforeEach(() => {
        cy.visit("https://alura-fotos.herokuapp.com");
      });

      
    it('fazer login usuario valido',()=>{
        cy.get('input[formcontrolname="userName"]').type('flavio')
        cy.get('input[formcontrolname="password"]').type('123')
        cy.get('button[type="submit"]').click();
        cy.contains('a','(Logout)').should('be.visible');
    
      })
    
      it('fazer login usuario invalido',()=>{
        cy.login('thomas','123')
        cy.on('window:alert',(str) => {
          expect(str).to.equal('invalid user name or password')
        })
    })
})