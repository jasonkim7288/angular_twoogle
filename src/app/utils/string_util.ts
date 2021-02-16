export default class Utils {
  static emailToId = (strEmail: string): string => '@' + strEmail.split('@')[0];
}
