// per directory basis
// instead of _data/eleventyComputed.js

const moment   = require("moment");
const category = 'lembarkerja'

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      if (!data.slug) return null;
      else {
        date = moment(data.date).format('YYYY/MM/DD');
        return `${category}/${date}/${data.slug}.html`;
      }
    }
  }
};
