$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "\r\nEu como usuario \r\nQuero realizar o login",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 7698241800,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acesso o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContextoSteps.que_acesso_o_sistema()"
});
formatter.result({
  "duration": 5758609100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "CT1 - login com Sucesso",
  "description": "",
  "id": "login;ct1---login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "preencho usuario \"Admin\" e senha \"admin123\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "Valido o acesso",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    },
    {
      "val": "admin123",
      "offset": 34
    }
  ],
  "location": "LoginSteps.preencho_usuario_e_senha(String,String)"
});
formatter.result({
  "duration": 5018924600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.valido_o_acesso()"
});
formatter.result({
  "duration": 168906800,
  "status": "passed"
});
formatter.after({
  "duration": 3512963200,
  "status": "passed"
});
formatter.before({
  "duration": 5777460300,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acesso o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContextoSteps.que_acesso_o_sistema()"
});
formatter.result({
  "duration": 4747359600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CT2 - Senha Invalida",
  "description": "",
  "id": "login;ct2---senha-invalida",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 16,
  "name": "preencho usuario \"Admin\" e senha \"admin\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "Valido a mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "LoginSteps.preencho_usuario_e_senha(String,String)"
});
formatter.result({
  "duration": 1626619100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.valido_a_mensagem_de_erro()"
});
formatter.result({
  "duration": 53495300,
  "status": "passed"
});
formatter.after({
  "duration": 4470783800,
  "status": "passed"
});
});