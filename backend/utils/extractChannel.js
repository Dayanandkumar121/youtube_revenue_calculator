export function extractChannel(input) {
  let value = input.trim();

  // Remove query parameters
  value = value.split("?")[0];

  // Remove trailing slash
  value = value.replace(/\/$/, "");

  // Handle URLs
  if (value.includes("/@")) {
    return {
      type: "handle",
      value: value.split("/@")[1],
    };
  }

  if (value.includes("/channel/")) {
    return {
      type: "channelId",
      value: value.split("/channel/")[1],
    };
  }

  if (value.startsWith("@")) {
    return {
      type: "handle",
      value: value.substring(1),
    };
  }

  return {
    type: "search",
    value,
  };
}