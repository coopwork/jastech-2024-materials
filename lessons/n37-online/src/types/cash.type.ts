export type ActionType = 'plus' | 'minus';

export type CurrencyType = 'USD' | 'EUR' | 'GBP' | 'CNY';

export type CashType = {
	balance: number,
	action: ActionType,
	value: number,
	currency: CurrencyType
}