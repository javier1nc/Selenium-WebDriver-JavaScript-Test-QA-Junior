const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleSearchTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navegar a Google
    await driver.get('https://www.google.com');

    // Encontrar el campo de búsqueda y escribir "SAT"
    await driver.findElement(By.name('q')).sendKeys('SAT', Key.RETURN);

    // Esperar a que los resultados se carguen y verifiquen que el título de la página contenga "SAT"
    await driver.wait(until.titleContains('SAT'), 1000);

    // Verificar que el primer resultado contenga el texto "SELENIUM: Portal de trámites y servicios"
    let firstResult = await driver.findElement(By.css('h3')).getText();
    if (firstResult.includes('SELENIUM: Portal de trámites y servicios')) {
      console.log('Prueba aprobada: el primer resultado contiene "SELENIUM: Portal de trámites y servicios"');
    } else {
      console.log('Prueba fallida: el primer resultado no contiene "SELENIUM: Portal de trámites y servicios"');
    }
  } finally {
    await driver.quit();
  }
})();