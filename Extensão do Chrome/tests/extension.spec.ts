import { test, expect, chromium } from '@playwright/test';

// Teste para verificar se a extensão foi carregada corretamente
test('A extensão é carregada e tem um Service Worker', async ({ browser }) => {
  // 'browser' vem do contexto do projeto que já carrega a extensão
  const context = browser.contexts()[0]; // Pega o contexto padrão
  
  // Extensões Manifest V3 rodam em Service Workers
  // Esperamos que ele apareça, o que prova que a extensão foi carregada.
  const serviceWorker = await context.waitForEvent('serviceworker');
  expect(serviceWorker).toBeTruthy();
  expect(serviceWorker.url()).toContain('service_worker.js');
});


// Teste para verificar se o popup da extensão abre e tem conteúdo
test('O popup da extensão abre e mostra o título', async ({ page }) => {
  // Navegue para uma página qualquer para que a extensão possa ser ativada
  await page.goto('https://www.google.com');

  // Para encontrar o ID da extensão, precisamos acessar o Service Worker
  const context = page.context();
  const serviceWorker = context.serviceWorkers()[0];
  const extensionId = serviceWorker.url().split('/')[2];
  
  // Abre a página do popup diretamente usando seu URL
  await page.goto(`chrome-extension://${extensionId}/popup.html`);

  // Verifica se o conteúdo do popup está correto
  // (Você precisaria adicionar um <h1> ou outro elemento com este texto no seu popup.html)
  const title = await page.locator('h1').textContent();
  expect(title).toContain('Dark Mode Toggle');
});