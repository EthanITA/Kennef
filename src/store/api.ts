import axios from 'axios'

const base_url = process.env.VUE_APP_MAGENTO_REST
const access_token = process.env.VUE_APP_MAGENTO_TOKEN
export const kennef_axios = axios.create({
	baseURL: base_url,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${access_token}`
	}
})
