import axios from 'axios'

export const connectBack = axios.create({
  baseURL: 'http://82.43.231.186:3001/',
	headers: {
		'Content-Type': 'application/json'
	}
})