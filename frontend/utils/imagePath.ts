enum Icons {
  WEB = "/svg/platform/Web.svg",
  APPLE = "/svg/platform/Apple.svg",
  ANDROID = "/svg/platform/Android.svg",
  MOBILE = "/svg/platform/Mobile.svg",
}
export const getImagePath = (title: string) => {
  switch (title) {
    case "Web":
      return Icons.WEB;
    case "Apple":
      return Icons.APPLE;
    case "Android":
      return Icons.ANDROID;
    case "Mobile":
      return Icons.MOBILE;
    default:
      return Icons.WEB;
  }
};
