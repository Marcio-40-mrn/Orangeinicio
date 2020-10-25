#language: pt
@login
Funcionalidade: Login
  
  Eu como usuario 
  Quero realizar o login

  Contexto: Acesso o sistema
    Dado que acesso o sistema

  Cenario: CT1 - login com Sucesso
    Quando preencho usuario "Admin" e senha "admin123"
    Entao Valido o acesso

  Cenario: CT2 - Senha Invalida
    Quando preencho usuario "Admin" e senha "admin"
    Entao Valido a mensagem de erro
