(function(window, undefined) {
  var dictionary = {
    "a3f5c6a4-e99e-4749-977d-977c50d4cfcd": "Order complete",
    "728709eb-f4df-4a62-8c19-a7da7cfc7970": "Specific Bkers page",
    "ff968c59-1202-4f5d-8013-6a4a1457eaf9": "Enable location",
    "0803b491-a820-465a-ac11-91170968ee83": "Cart page",
    "aa2f0c22-ef26-4dd6-ab00-5a71194cf108": "Checkout page",
    "cc792970-c31f-4394-a729-b9ca6e9ec535": "Local BKer's ",
    "a09adc6a-102a-455a-a468-048b25278e5a": "Specific product page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home screen",
    "5bc9ae84-1712-4e82-b619-eb2d960311f0": "Sign up page",
    "91e9b2c4-b3ba-4fd4-b72f-3e93f84dd683": "Verification page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);