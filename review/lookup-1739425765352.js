(function(window, undefined) {
  var dictionary = {
    "f7eaf3b3-8294-41b2-bd72-ea192bb7cfbb": "Screen 5",
    "802403af-834b-4ec7-aebc-0f158b65c972": "Book now",
    "a56167be-de85-47bf-a1d2-25cd65fa12d1": "Screen 4",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "baae4edb-31c1-4b3a-818b-e296c687a0cd": "Screen 6",
    "046db247-9ce1-4ce1-99a6-78b67efddac0": "Screen 2",
    "b7b0a1aa-14da-4f7c-901c-1dcd1910fa60": "Screen 3",
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