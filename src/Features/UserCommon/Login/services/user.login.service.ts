export const userLoginService = {
	get,
	save,
};

function get(entityType: string) {
	return localStorage.getItem(entityType);
}

function save(entityType: string, entity: any) {
	localStorage.setItem(entityType, JSON.stringify(entity));
}
