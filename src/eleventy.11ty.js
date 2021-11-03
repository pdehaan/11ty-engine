module.exports = class {
  data() {
    return {
      title: "Hello from Eleventy",
    };
  }

  async render(data) {
    return `
      <h1>${data.title}</h1>
      <pre>${this.engine()}</pre>
    `.trim();
  }
};
