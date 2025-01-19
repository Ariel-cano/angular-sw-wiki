

export function getId(str: string):string {
  return str.match(/\d+/)?.join('')!;
}
