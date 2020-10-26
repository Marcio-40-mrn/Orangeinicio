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
  "duration": 7675642000,
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
  "duration": 6189402500,
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
  "duration": 4029265200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.valido_o_acesso()"
});
formatter.result({
  "duration": 122678300,
  "status": "passed"
});
formatter.after({
  "duration": 1187209800,
  "status": "passed"
});
formatter.before({
  "duration": 5982767400,
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
  "duration": 4119794900,
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
  "duration": 1414654100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.valido_a_mensagem_de_erro()"
});
formatter.result({
  "duration": 48575600,
  "status": "passed"
});
formatter.after({
  "duration": 722182800,
  "status": "passed"
});
});