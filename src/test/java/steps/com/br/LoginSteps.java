package steps.com.br;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.com.br.LoginPage;

public class LoginSteps extends LoginPage {

	
	
	@Quando("^preencho usuario \"([^\"]*)\" e senha \"([^\"]*)\"$")
	public void preencho_usuario_e_senha(String Usuario, String Senha) throws Throwable {
		EfetuarLogin(Usuario, Senha);
	}

	@Entao("^Valido o acesso$")
	public void valido_o_acesso() throws Throwable {
	    ValidarAcesso();
	}

	@Entao("^Valido a mensagem de erro$")
	public void valido_a_mensagem_de_erro() throws Throwable {
	    MsgErro();
	}


}
