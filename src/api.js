export const getWidget = () => new Promise((resolve, reject) => setTimeout(() => resolve({
  id: "0",
  name: "Widget A"
}), 1000))
