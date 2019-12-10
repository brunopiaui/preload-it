export default function fetch(list) {
  return new Promise((resolve, reject) => {
    this.loaded = list.length;
    for (let item of list) {
      this.state.push(this.prepareItem(item));
      this.preloadOne(this.getUrlByItem(item), item => {
        this.onfetched(item);
        this.loaded--;
        if (this.loaded == 0) {
          this.oncomplete(this.state);
          resolve(this.state);
        }
      });
    }
  });
}
