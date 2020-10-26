package pages.com.br;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import hooks.com.br.Hooks;

public class LoginPage {

	protected WebDriver driver;
	
	public LoginPage() {
		driver = Hooks.getDriver();
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="txtUsername")
	public WebElement txtUsername;
	
	@FindBy(name="txtPassword")
	public WebElement txtPassword;
	
	@FindBy(id="btnLogin")
	public WebElement btnlogin;
	
	@FindBy(id="welcome")
	public WebElement validaacesso;
	
	@FindBy(id="spanMessage")
	public WebElement msgerro;
	
	public void EfetuarLogin(String Usuario, String Senha) {
		txtUsername.sendKeys(Usuario);
		txtPassword.sendKeys(Senha);
		btnlogin.click();
	}
	
	public void ValidarAcesso() {
		boolean wc = validaacesso.isDisplayed();
	    Assert.assertTrue(wc);
	}
	
	public void MsgErro() {
		String msg = msgerro.getText();
	    Assert.assertEquals("Invalid credentials", msg);
	}
}
