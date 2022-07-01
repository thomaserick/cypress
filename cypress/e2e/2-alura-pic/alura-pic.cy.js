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
    cy.get('input[formcontrolname="email"]').type('thomaserick')
    cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')    

  })

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
  

  it.only('fazer login usuario valido',()=>{
    cy.get('input[formcontrolname="userName"]').type('flavio')
    cy.get('input[formcontrolname="password"]').type('123')
    cy.get('button[type="submit"]').click();
    cy.contains('a','(Logout)').should('be.visible');

  })

  it.only('fazer login usuario invalido',()=>{
    cy.login('thomas','123')
    cy.on('window:alert',(str) => {
      expect(str).to.equal('invalid user name or password')
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
  
});
