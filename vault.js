'use strict';
module.exports = function() {

    const vault = {};

    const setValue = function(key, value) {
        if ((!key)){
            return null;
        } else {
            vault[key] = value;
        }
    }

    const getValue = function(key) {
        if((!key) || (typeof vault[key] == "undefined")) {
            return null;
        } else {
            return vault[key];
        }
    }

    return {
        setValue: setValue,
        getValue: getValue
    }
};