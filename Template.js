(function() {
  var Template = function(template,data) {
    this.constructor = "Template";

    return template.replace(/\{\{\s+[\w_$][\d\w_$]+\s+\}\}/g, function() {

    });
  }

  window.iPlugin.Template = Template;

  /*var tmpl ="<div>{{ name }}</div><div>{{ age }}</div>";
  console.log(Template(tmpl));*/
})();