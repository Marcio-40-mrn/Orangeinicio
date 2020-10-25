package steps.com.br;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import hooks.com.br.Hooks;
import org.junit.Assert;

public class LoginSteps {

	WebDriver driver = Hooks.getDriver();
	
	@Quando("^preencho usuario \"([^\"]*)\" e senha \"([^\"]*)\"$")
	public void preencho_usuario_e_senha(String Usuario, String Senha) throws Throwable {
	    driver.findElement(By.id("txtUsername")).sendKeys(Usuario);
	    driver.findElement(By.name("txtPassword")).sendKeys(Senha);
	    driver.findElement(By.id("btnLogin")).click();
	}

	@Entao("^Valido o acesso$")
	public void valido_o_acesso() throws Throwable {
	    boolean wc = driver.findElement(By.id("welcome")).isDisplayed();
	    Assert.assertTrue(wc);
	}

	@Entao("^Valido a mensagem de erro$")
	public void valido_a_mensagem_de_erro() throws Throwable {
	    String msg = driver.findElement(By.id("spanMessage")).getText();
	    Assert.assertEquals("Invalid credentials", msg);
	}


}
