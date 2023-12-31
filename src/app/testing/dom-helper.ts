import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export class DOMHelper<T> {
  private fixture: ComponentFixture<T>;
  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  getElement(cssSelector: string): DebugElement | null {
    const h2Ele = this.fixture.debugElement.query(By.css(cssSelector));
    if (h2Ele) {
      return h2Ele;
    }
    return null;
  }

  getTextContent(cssSelector: string): string {
    const h2Ele = this.fixture.debugElement.query(By.css(cssSelector));
    if (h2Ele) {
      return h2Ele.nativeElement.textContent as string;
    }
    return '';
  }

  getInnerHtml(cssSelector: string): string {
    const h2Ele = this.fixture.debugElement.query(By.css(cssSelector));
    if (h2Ele) {
      return h2Ele.nativeElement.innerHTML as string;
    }
    return '';
  }

  getClassListItem(cssSelector: string, item: number): string {
    const h2Ele = this.fixture.debugElement.query(By.css(cssSelector));
    if (h2Ele) {
      return h2Ele.nativeElement.classList.item(item) as string;
    }
    return '';
  }

  countElements(tagName: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.length;
  }

  countElementsWithText(tagName: string, text: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.filter(
      element => element.nativeElement.textContent.trim() === text
    ).length;
  }

  clickButton(buttonText: string) {
    this.findAll('button').forEach(button => {
      const buttonElement: HTMLButtonElement = button.nativeElement;
      if (buttonElement.textContent === buttonText) {
        buttonElement.click();
      }
    });
  }

  findAll(tagName: string) {
    return this.fixture.debugElement.queryAll(By.css(tagName));
  }
}
