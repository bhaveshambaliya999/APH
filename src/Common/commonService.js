import axios from "axios";
export var imageUrl;
export var domain;
var baseUrl1;
var baseUrl2;
if ((window.location.origin).includes('localhost')) {
  // imageUrl = "http://192.168.84.45:8080"
//   baseUrl1 = "http://192.168.84.45:8080/api/call";
  baseUrl2 = "https://api.artisanalparfumhouse.com/call";
  // domain = 'https://artisanalparfumhouse.com';
  // domain = 'https://uat.diamondsforapurpose.com';

  // domain = 'https://staging.zurahjewellery.com';
  // imageUrl = "https://apistaging-ecom-store.upqor.com"
  // baseUrl1 = "https://apistaging-ecom-store.upqor.com/api/call";
  // baseUrl2 = "https://apistaging-ecom.upqor.com/call";
}
// else if ((window.location.origin).includes('staging')) {
//   imageUrl = "https://apistaging-ecom-store.upqor.com"
//   baseUrl1 = "https://apistaging-ecom-store.upqor.com/api/call";
//   baseUrl2 = "https://apistaging-ecom.upqor.com/call";
//   domain = window.location.origin;
// }
else if ((window.location.origin).includes('uat')) {
  //imageUrl = "https://apiuat-ecom-store.upqor.com"
  //baseUrl1 = "https://apiuat-ecom-store.upqor.com/api/call";
  baseUrl2 = "https://api-uat.artisanalparfumhouse.com/call";
  domain = window.location.origin;
}
else {
  // imageUrl = "https://api-ecom-store.upqor.com"
  // baseUrl1 = "https://api-ecom-store.upqor.com/api/call";
  baseUrl2 = "https://api.artisanalparfumhouse.com/call";
  domain = window.location.origin;
}
class Commanservice {

//   postLaravelApi(controller, obj) {
//     return axios.post(baseUrl1 + controller, obj);
//   }

  postApi(controller, obj) {
    const obj1 = {
      ...obj,
      tenant_id: 'aEQX06tRURN6uZRyvzQCuw==XvWJc1zRe49c2cc5777495191a10b40595538d1cXvWJc1zRdcac9a7ed46842ee6177e4f371f02b3e42b8136e338f4caaa8191b006431db587b766171c63b4de91aa2f6c0ef328fca44769547073215235dd8ddaa43846fc1a9f464e25d6845ecd66761187c9ceb94f65c6061a234786a733ed7339093e2dfb7bcf782f9c1bb4e708bfd6a1373efd2cfa6dc6942f73797af526861f73296f8a70936c2bb8d10158386319147480b8a70145b370e11aad38dcaa9224e6e6e536c93f022557f881fd75e222faf12ce777cee3f8f05137e31fea029e28f2eeea7fd30c3ac2fe713716dd562d807651d1cf5c29627c039fc31f301d73837f86776f8777983d9db6114cdf2806d78ce76a307994d8ccbb266d147c3161edd163b15'
    }
   
      return axios.post(baseUrl2 + controller, obj1);
    
  }

  postApiFile(controller, obj) {
    return axios.post(imageUrl + controller, obj);
  }

  obj_json(obj, value) {
    const data = [];
    data["a"] = value;
    for (const pair of obj) {
      data[pair[0]] = pair[1];
    }
    const arrayToString = JSON.stringify(Object.assign({}, data));
    return arrayToString;
  }

}

export default new Commanservice();
