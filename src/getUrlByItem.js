export default function getUrlByItem(item) {
  return typeof item === "string" ? item : item.url;
}
