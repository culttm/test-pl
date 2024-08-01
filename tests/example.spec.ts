import { test, expect } from '@playwright/test';

test('cart', async ({ page }) => {

  await page.goto('https://hillary.ua/kremy-dlya-litsa/sontsezakhysnyi-bb-krem-dlia-oblychchia-spf30-nude-hillary-vitasun-tone-up-bb-cream-all-day-protect-spf30-40-ml/')

  const el = await page.$('.j-buy-button-add');

// Assert

  await el?.click();

  await page.goto("https://hillary.ua/checkout/")

  const el2 = await page.$('#cart');

  expect(el2).not.toBeNull();

  expect(await el2?.innerText()).toContain('Сонцезахисний BB-крем для обличчя SPF30+ Nude HiLLARY VitaSun Tone-Up BB-Cream All Day Protect SPF30+, 40 мл');


  // setTimeout(async () => {
  //
  //   await page.goto("https://hillary.ua/checkout/")
  //
  //   const el2 = await page.$('#cart');
  //
  //   expect(el2).not.toBeNull();
  //
  //   expect(await el2?.innerText()).toContain('Сонцезахисний BB-крем для обличчя SPF30+ Nude HiLLARY VitaSun Tone-Up BB-Cream All Day Protect SPF30+, 40 мл');
  //
  // }, 2000);

  // const el2 = await page.$('.j-cart-link');
  //
  // await el2?.click();
});
