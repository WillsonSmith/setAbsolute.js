//to do for all - need to get positions, and then set after
//otherwise will all collapse on each other

function setAbsolute(el) {
  "use strict";

  var savedElements = [],
           elements = Array.prototype.slice.call(el);

    if (!Array.isArray(elements) || elements.length < 1) {

      elements = [];
      elements.push(el);

    }

  function saveRect(element) {

    savedElements.push({"element": element, "rect": element.getBoundingClientRect()});

  }

  function setEachPosition(el) {

    var element = el.element,
           rect = el.rect;

    element.style.position = "absolute";
    element.style.margin = "0";

    Object.keys(rect).forEach(function(key) {

      element.style[key] = rect[key].toString() + "px";

    });

  }

  elements.forEach(saveRect);

  savedElements.forEach(setEachPosition);

}
