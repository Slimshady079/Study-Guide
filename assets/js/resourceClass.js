class Resource {
  constructor(language, comment, link) {
    this.language = language;
    this.comment = comment;
    this.link = link;
  }
  getLang = () => this.language;
  getComment = () => this.comment;
  getLink = () => this.link;
}
module.exports = Resource;
