/*
 * fis-parser-art-tmpl
 * refer: https://github.com/aui/artTemplate
 */

'use strict';

var template = require('art-template');

module.exports = function(content, file, conf){
  return (file.isMod?'module.exports=':'') + template.compile(content, conf).toString();
};