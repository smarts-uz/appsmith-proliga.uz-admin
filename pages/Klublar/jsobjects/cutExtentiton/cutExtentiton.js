export default {
	formatExtension: (text) => {
		if (!text || typeof text !== 'string') {
			return null;
		}
		const parts = text.split('.');
		return parts.length > 1 ? parts.pop().toLowerCase() : null;
	}
};