import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth-service/auth-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthService);
	const token = authService.getToken();

	if (token) {
		const clonedRequest = req.clone({
			setHeaders: {
				Authorization: `Bearer ${ token }`,
			},
		});
		return next(clonedRequest);
	}

	return next(req);
};
