const { default: JSDOMEnvironment } = require("jest-environment-jsdom");

module.exports = class JestEnvironmentJsdomNativeFetch extends (
  JSDOMEnvironment
) {
  constructor(...args) {
    super(...args);

    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.FormData = FormData;
  }
};
