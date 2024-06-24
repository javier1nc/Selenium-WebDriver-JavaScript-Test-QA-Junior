#### Prueba para un QA Junior utilizando Selenium WebDriver y JavaScript. 

La prueba verifica que la funcionalidad de búsqueda en Google funciona correctamente.

##### Pre-requisitos

0.	**Google Chrome** instalado.

1.	**Node.js** y **npm** instalados.

2.	Instalar **Selenium WebDriver** para JavaScript:

	```Shell
	npm install selenium-webdriver
	```

3.	Descargar el navegador ChromeDriver y asegurarse de que esté en tu PATH.

##### Estructura del Proyecto

	Selenium-WebDriver-JavaScript-Test-QA-Junior/
	├── node_modules/
	├── tests/
	│   └── google_search_test.js
	├── package.json
	└── package-lock.json
	└── README.md

##### package.json

```json
{
  "name": "Selenium-WebDriver-JavaScript-Test-QA-Junior",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "selenium-webdriver": "^4.21.0"
  }
}
```

##### tests/google_search_test.js

```js
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
```

##### Instrucciones para el QA Junior #####

1.	**Preparación:**
	-	Asegúrate de tener Node.js y npm instalados.
	-	Clona o descarga el proyecto de la estructura dada.
	-	Navega a la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
2.	**Ejecución de la Prueba:**
	-	Ejecuta el comando `npm test` para correr la prueba.
3.	**Tareas:**
	-	Ejecuta la prueba y verifica si pasa o falla.
	-	Si la prueba falla, identifica el problema y propón una solución.
	-	Documenta los pasos realizados y los resultados obtenidos.

##### Evaluación #####

1.	**Ejecución Correcta:**
	-	El QA debe ser capaz de ejecutar la prueba sin errores.
2.	**Detección de Problemas:**
	-	Si la prueba falla, el QA debe identificar correctamente el problema.
3.	**Propuesta de Soluciones:**
	-	El QA debe proponer soluciones adecuadas para cualquier problema encontrado.
4.	**Documentación:**
	-	El QA debe documentar claramente los pasos realizados y los resultados obtenidos.

Esta prueba no solo evalúa la capacidad técnica del QA en el uso de Selenium WebDriver y JavaScript, sino también su atención al detalle y habilidades de documentación.

#### Pistas: ####

- Si hay problemas de Sincronización: El tiempo de espera (1000 ms) puede no ser suficiente para que los resultados de búsqueda se carguen.

- Si hay problema con la Verificación comprobar que el primer resultado es el esperado para que exista una coincidencia.
