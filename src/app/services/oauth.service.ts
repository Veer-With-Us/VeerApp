import { ShaService } from './sha.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OAuthService {
  constructor(private sha1: ShaService) {}

  // Authorizing a request

  createHeaderString(httpMethod: string, baseUrl: string, requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string) {
    let headerStringArray = this.createParameterStringArray({}, oauthKey, oauthToken, nonce, timestamp);
    headerStringArray.push({
      key: 'oauth_signature',
      val: this.fixedEncodeURIComponent(this.createSignature(httpMethod, baseUrl, requestParams, oauthKey, oauthToken, nonce, timestamp))
    });

    headerStringArray = this.sortAlphabetically(headerStringArray);

    return 'OAuth ' + headerStringArray.map((param) => {
      return param.key + '="' + param.val + '"';
    }).join(', ');
  }

  createTimestamp() {
    return ''+ Math.floor( ((new Date()).getTime()) / 1000 );
  }

  createNonce(length: number) {
    const nonceChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let result = '';
    for (let i=0; i<length; ++i) {
      let rnum = Math.floor(Math.random() * nonceChars.length);
      result += nonceChars.substring(rnum, rnum + 1);
    }
    return result;
  }

  // Creating a signature

  createSignature(httpMethod: string, baseUrl: string, requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string) {
    return this.calculateSignature(
      this.createSigningKey(
        oauthKey, oauthToken
      ),
      this.createSignatureBaseString(httpMethod, baseUrl, this.createParameterString(
        requestParams, oauthKey, oauthToken, nonce, timestamp
      ))
    );
  }

  calculateSignature(signingKey: string, signatureBaseString: string) {
    return this.sha1.getHash(signingKey, signatureBaseString);
  }

  createSigningKey(oauthKey: OAuthKey, oauthToken: OAuthToken) {
    return oauthKey.consumerSecret + '&' + oauthToken.tokenSecret;
  }

  createSignatureBaseString(httpMethod: string, baseUrl: string, parameterString: string) {
    return httpMethod + '&' + this.fixedEncodeURIComponent(baseUrl) + '&' + this.fixedEncodeURIComponent(parameterString);
  }

  createParameterString(requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string) {
    let encodedParams = this.createParameterStringArray(requestParams, oauthKey, oauthToken, nonce, timestamp);

    encodedParams = this.sortAlphabetically(encodedParams);

    return encodedParams.map((param) => {
      return param.key + '=' + param.val;
    }).join('&');
  }

  createParameterStringArray(requestParams: any, oauthKey: OAuthKey, oauthToken: OAuthToken, nonce: string, timestamp: string) {
    let encodedParams: Params[] = [];

    Object.keys(requestParams).forEach((k) => {
      encodedParams.push({
        key: this.fixedEncodeURIComponent(k),
        val: this.fixedEncodeURIComponent(requestParams[k])
      });
    });

    encodedParams.push(
      {
        key: this.fixedEncodeURIComponent('oauth_consumer_key'),
        val: this.fixedEncodeURIComponent(oauthKey.consumerKey)
      },
      {
        key: this.fixedEncodeURIComponent('oauth_signature_method'),
        val: this.fixedEncodeURIComponent('HMAC-SHA1')
      },
      {
        key: this.fixedEncodeURIComponent('oauth_nonce'),
        val: this.fixedEncodeURIComponent(nonce)
      },
      {
        key: this.fixedEncodeURIComponent('oauth_timestamp'),
        val: this.fixedEncodeURIComponent(timestamp)
      },
      {
        key: this.fixedEncodeURIComponent('oauth_token'),
        val: this.fixedEncodeURIComponent(oauthToken.token)
      },
      {
        key: this.fixedEncodeURIComponent('oauth_version'),
        val: this.fixedEncodeURIComponent('1.0')
      }
    );

    return encodedParams;
  }

  sortAlphabetically(params: Params[]) {
    params.sort((a: any, b: any) => {
      if(a.key > b.key) {
        return 1;
      } else if (a.key < b.key) {
        return -1;
      } else return 0;
    });

    return params;
  }

  fixedEncodeURIComponent(str: string) {
    return encodeURIComponent(str)
      .replace(/[!''()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
  }
}

export interface OAuthKey {
  consumerKey: string,
  consumerSecret: string
}

export interface OAuthToken {
  token: string,
  tokenSecret: string
}

export interface Params {
  key: string,
  val: string
}