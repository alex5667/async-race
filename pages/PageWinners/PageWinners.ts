import render from '../../utils/render';

export class PageWinners {
  parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
  }

  init(): void {
    render<HTMLDivElement>(
      this.parent,
      'div',
      ['winners__container'],
      'Winners',
    );
  }
}
