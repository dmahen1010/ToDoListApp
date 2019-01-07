export class Item {
  private checked: boolean;
  title: string;
  description: string;

  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.checked = false;
  }

  setTitle(inTitle: string): void {
    this.title = inTitle;
  }

  setDescription(inDesc: string): void {
    this.description = inDesc;
  }

  toggleChecked(): void {
    this.checked = !this.checked;
  }

  getChecked(): boolean {
    return this.checked;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }
}
