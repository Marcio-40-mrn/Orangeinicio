package steps.com.br;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import hooks.com.br.Hooks;

public class ContextoSteps {

	WebDriver driver = Hooks.getDriver();
 	
	@Dado("^que acesso o sistema$")
	public void que_acesso_o_sistema() throws Throwable {
		driver.get("https://opensource-demo.orangehrmlive.com//");
	}
}
