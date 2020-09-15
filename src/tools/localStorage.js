export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.log('Load state error:', err)
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		console.log('Save state errors: ' + err);
	}
}

export const deleteState = (state) => {
	try {
		localStorage.removeItem('state')
	} catch (err) {
		console.log('Delete state error: ' + err)
	}
}