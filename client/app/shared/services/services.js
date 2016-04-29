import angular from 'angular';

import AuthInterceptor from './auth/authInterceptor.service';
import AuthToken from './auth/authToken.service';

let servicesModule = angular.module('app.shared.services', [])
   .service('AuthInterceptor', AuthInterceptor)
   .service('AuthToken', AuthToken);

export default servicesModule;