/**
 * Logs label and value of a variable
 *
 * @param {any} data - Object with label and value or a variable to be printed
 */
export default function logvar(data: any): void {
  const isObject: boolean = Object.keys(data)?.length > 0;

  if (isObject) {
    Object.keys(data).forEach((key: string): void => {
      console.log(`${key}: `, data[key]);
    });
  } else {
    console.log(data);
  }
}
