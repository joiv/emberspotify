import Oauth2BearerProvider from 'torii/providers/oauth2-bearer';
import { configurable } from 'torii/configuration';

export default Oauth2BearerProvider.extend({

  name: 'spotify',
  baseUrl: 'https://accounts.spotify.com/authorize',

  optionalUrlParams: ['show_dialog'],
  showDialog: configurable('showDialog', false),

  responseParams: ['access_token', 'expires_in', 'state', 'token_type'],

  redirectUri: configurable('redirectUri')
});