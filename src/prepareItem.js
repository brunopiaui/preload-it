export default function prepareItem(item) {
  return typeof item === "string"
    ? { url: item }
    : { url: item.url, meta: item.meta };
}
