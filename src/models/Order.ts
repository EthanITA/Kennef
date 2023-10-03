import { Cart } from '@/types/cart'

export interface OrderResponse {
	base_currency_code: string
	base_discount_amount: number
	base_discount_invoiced: number
	base_discount_tax_compensation_amount: number
	base_discount_tax_compensation_invoiced: number
	base_shipping_amount: number
	base_shipping_discount_amount: number
	base_shipping_discount_tax_compensation_amnt: number
	base_shipping_incl_tax: number
	base_shipping_invoiced: number
	base_shipping_tax_amount: number
	base_subtotal: number
	base_subtotal_incl_tax: number
	base_subtotal_invoiced: number
	base_tax_amount: number
	base_tax_invoiced: number
	base_total_due: number
	base_total_invoiced: number
	base_total_invoiced_cost: number
	base_total_paid: number
	base_to_global_rate: number
	base_to_order_rate: number
	billing_address_id: number
	created_at: string
	customer_email: string
	customer_firstname: string
	customer_group_id: number
	customer_is_guest: number
	customer_lastname: string
	customer_note_notify: number
	discount_amount: number
	discount_invoiced: number
	entity_id: number
	global_currency_code: string
	grand_total: number
	discount_tax_compensation_amount: number
	discount_tax_compensation_invoiced: number
	increment_id: string
	is_virtual: number
	order_currency_code: string
	protect_code: string
	quote_id: number
	remote_ip: string
	shipping_amount: number
	shipping_description: string
	shipping_discount_amount: number
	shipping_discount_tax_compensation_amount: number
	shipping_incl_tax: number
	shipping_invoiced: number
	shipping_tax_amount: number
	state: string
	status: string
	store_currency_code: string
	store_id: number
	store_name: string
	store_to_base_rate: number
	store_to_order_rate: number
	subtotal: number
	subtotal_incl_tax: number
	subtotal_invoiced: number
	tax_amount: number
	tax_invoiced: number
	total_due: number
	total_invoiced: number
	total_item_count: number
	total_paid: number
	total_qty_ordered: number
	updated_at: string
	weight: number
	items: Item[]
	billing_address: Cart['billing_address']
	payment: Payment
	status_histories: any[] // Replace with the actual type if you know it
	extension_attributes: ExtensionAttributes
}

interface Item {
	amount_refunded: number
	base_amount_refunded: number
	base_discount_amount: number
	base_discount_invoiced: number
	base_discount_tax_compensation_amount: number
	base_discount_tax_compensation_invoiced: number
	base_original_price: number
	base_price: number
	base_price_incl_tax: number
	base_row_invoiced: number
	base_row_total: number
	base_row_total_incl_tax: number
	base_tax_amount: number
	base_tax_invoiced: number
	created_at: string
	discount_amount: number
	discount_invoiced: number
	discount_percent: number
	free_shipping: number
	discount_tax_compensation_amount: number
	discount_tax_compensation_invoiced: number
	is_qty_decimal: number
	is_virtual: number
	item_id: number
	name: string
	no_discount: number
	order_id: number
	original_price: number
	price: number
	price_incl_tax: number
	product_id: number
	product_type: string
	qty_canceled: number
	qty_invoiced: number
	qty_ordered: number
	qty_refunded: number
	qty_shipped: number
	quote_item_id: number
	row_invoiced: number
	row_total: number
	row_total_incl_tax: number
	row_weight: number
	sku: string
	store_id: number
	tax_amount: number
	tax_invoiced: number
	tax_percent: number
	updated_at: string
	weee_tax_applied: string
}

interface Payment {
	account_status: null | string // Assuming this can either be a string or null
	additional_information: (string | null)[] // Assuming this can be an array of string or null values
	amount_ordered: number
	amount_paid: number
	base_amount_ordered: number
	base_amount_paid: number
	base_shipping_amount: number
	base_shipping_captured: number
	cc_exp_year: string // Assuming this is a string representation of the year
	cc_last4: null | string // Assuming this can either be null or string
	cc_ss_start_month: string // Assuming this is a string representation of the month
	cc_ss_start_year: string // Assuming this is a string representation of the year
	entity_id: number
	method: string
	parent_id: number
	shipping_amount: number
	shipping_captured: number
}

interface ShippingTotal {
	base_shipping_amount: number
	base_shipping_discount_amount: number
	base_shipping_discount_tax_compensation_amnt: number
	base_shipping_incl_tax: number
	base_shipping_invoiced: number
	base_shipping_tax_amount: number
	shipping_amount: number
	shipping_discount_amount: number
	shipping_discount_tax_compensation_amount: number
	shipping_incl_tax: number
	shipping_invoiced: number
	shipping_tax_amount: number
}

interface ExtensionAttributes {
	shipping_assignments: ShippingAssignment[]
	payment_additional_info: AdditionalInfo[]
	applied_taxes: any[] // Replace with the actual type if you know it
	item_applied_taxes: any[] // Replace with the actual type if you know it
}

interface ShippingAssignment {
	shipping: Shipping
	items: Item[]
}

interface Shipping {
	address: Cart['billing_address']
	method: string
	total: ShippingTotal
}

interface AdditionalInfo {
	key: string
	value: string | null
}
