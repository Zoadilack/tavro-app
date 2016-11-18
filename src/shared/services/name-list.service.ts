export class NameListService {
  names = [
    'Edsger Dijkstra',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
  remove(value: string): void {
    var i = this.names.indexOf(value);
    if (i !== -1) {
      this.names.splice(this.names.indexOf(value),1);
    }
  }
}
