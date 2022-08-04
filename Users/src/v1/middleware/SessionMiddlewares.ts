export function sessionChecker(
	req: Request,
	res: Response,
	next: Function
): void {
	console.log(req, res, next);
}
