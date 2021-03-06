import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "https://curso-vuejs2-udemy.firebaseio.com/";

// aqui poderia ser um token JWT, por exemplo
// axios.defaults.headers.common["Authorization"] = "abc123";

// axios.defaults.headers.get["Accepts"] = "application/json";


Vue.use({
  install(Vue) {
    // => Declaração de forma global
    // Vue.prototype.$http = axios;

    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vuejs2-udemy.firebaseio.com/",
      headers: {
        "Authorization": "abc123"
      }
    });

    Vue.prototype.$http.interceptors.request.use(request => {
      window.console.log(request.method);
      // if (request.method == "post") {
      //   request.method = "put";
      // }
      return request;
    }, error => Promise.reject(error));

    Vue.prototype.$http.interceptors.response.use(resp => {
      // const array = [];
      // for (let chave in resp.data) {
      //   array.push({ id: chave, ...resp.data[chave] });
      // }

      // resp.data = array;
      return resp;
    }, error => Promise.reject(error));


    // => Para interceptar requisições, caso necessário:
    /** Vue.prototype.$http.interceptors.request.use(config => console.log(config.method)) */

    // => Para interceptar respostas, caso necessário:
    /** Vue.prototype.$http.interceptors.response.use(res => console.log('aqui daria para transformar a resposta de objeto para array, por exemplo')) */


    // => Exemplo completo de interceptor
    /**
     * Vue.prototype.$http.interceptors.request.use(config => {
     *  // Aqui é o método de sucesso e precisa do return abaixo para a requisição seguir
     * return config;
     * }, error => {
     *  console.log('aqui seria possível tratar os erros')
     *  Promise.reject(error);
     * });
     */
  }
})
