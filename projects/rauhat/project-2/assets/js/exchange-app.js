const API_KEY = "e38b1dfdcc943e719e767af4";
let exchangeRates = {};

async function fetchExchangeRates(baseCurrency = "USD") {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
    );
    const data = await response.json();
    if (data.result === "success") {
      exchangeRates = data.conversion_rates;
      return exchangeRates;
    } else {
      throw new Error(data["error-type"]);
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
}

function convert(amount, fromCurrency, toCurrency, margin = 0) {
  if (fromCurrency === toCurrency) return amount;

  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  const adjustedRate = rate * (1 + margin / 100);
  return amount * adjustedRate;
}

export { fetchExchangeRates, convert, exchangeRates };
