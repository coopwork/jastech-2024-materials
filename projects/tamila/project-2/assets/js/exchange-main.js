import { fetchExchangeRates, convert, exchangeRates } from "./exchange-app.js";

document.addEventListener("DOMContentLoaded", async () => {
  const fromAmount = document.getElementById("fromAmount");
  const toAmount = document.getElementById("toAmount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const datePicker = document.querySelector(".date-picker");
  const marginSelector = document.querySelector(".margin-selector");
  const swapButton = document.getElementById("swapButton");

  let currentMargin = 0;

  swapButton.addEventListener("click", async () => {
    // Меняем валюты местами
    const tempCurrency = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCurrency;

    // Меняем значения местами
    const tempAmount = fromAmount.value;
    fromAmount.value = toAmount.value;
    toAmount.value = tempAmount;

    // Обновляем конвертацию
    if (typeof updateConversion === "function") {
      updateConversion();
    }
  });

  try {
    const rates = await fetchExchangeRates();
    populateCurrencySelects(rates);
  } catch (error) {
    console.error("Failed to fetch initial exchange rates:", error);
  }

  function populateCurrencySelects(rates) {
    const currencies = Object.keys(rates);
    [fromCurrency, toCurrency].forEach((select) => {
      currencies.forEach((currency) => {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = `${currency} - ${getCurrencyName(currency)}`;
        select.appendChild(option);
      });
    });
    fromCurrency.value = "USD";
    toCurrency.value = "KZT";
    updateConversion();
  }

  async function updateConversion() {
    try {
      const amount = parseFloat(fromAmount.value.trim());

      if (isNaN(amount) || amount <= 0) {
        toAmount.value = "Invalid input";
        return;
      }

      const from = fromCurrency.value.trim();
      const to = toCurrency.value.trim();

      if (!from || !to) {
        toAmount.value = "Select currencies";
        return;
      }

      // Ensure we have the latest exchange rates
      await fetchExchangeRates();
      const result = convert(amount, from, to, currentMargin);
      toAmount.value = result.toFixed(3);
    } catch (error) {
      console.error("Conversion error:", error);
      toAmount.value = "Error";
    }
  }

  fromAmount.addEventListener("input", updateConversion);
  toAmount.addEventListener("input", async () => {
    const amount = parseFloat(toAmount.value) || 0;
    const from = toCurrency.value;
    const to = fromCurrency.value;
    const result = convert(amount, from, to, -currentMargin);
    fromAmount.value = result.toFixed(3);
  });

  [fromCurrency, toCurrency].forEach((select) => {
    select.addEventListener("change", async () => {
      await fetchExchangeRates(fromCurrency.value);
      updateConversion();
    });
  });

  datePicker.addEventListener("change", () => {
    updateConversion();
  });

  marginSelector.addEventListener("change", () => {
    currentMargin = parseFloat(marginSelector.value);
    updateConversion();
  });

  function getCurrencyName(code) {
    const names = {
      USD: "US Dollar",
      EUR: "Euro",
      GBP: "British Pound",
      JPY: "Japanese Yen",
      AUD: "Australian Dollar",
      CAD: "Canadian Dollar",
      CHF: "Swiss Franc",
      CNY: "Chinese Yuan",
      HKD: "Hong Kong Dollar",
      NZD: "New Zealand Dollar",
      KZT: "Kazakhstani Tenge",
      RUB: "Russian Ruble",
    };
    return names[code] || code;
  }

  updateConversion();
});
