import prepareItem from "./prepareItem.js";
import getUrlByItem from "./getUrlByItem.js";

export default function fetch(list) {
  return new Promise((resolve, reject) => {
    this.loaded = list.length;
    for (let item of list) {
      this.state.push(prepareItem(item));
      this.preloadOne(getUrlByItem(item), item => {
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
