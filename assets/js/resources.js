// console.log('im inside resources.js');

// constructor function of creating new objects of resources
function Resource(lang, comment, link) {
    this.lang = lang;
    this.comment = comment;
    this.link = link;
}

// new object for resource
const res1 = new Resource("html", "best tool today:", "https://www.google.com");

// console.log(res1);

