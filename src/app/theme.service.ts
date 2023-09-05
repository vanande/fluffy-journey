// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themes: { [key: string]: { primary: string; secondary: string; accent: string; light: string, background: string } } = {
    default: {
      primary: 'rgb(185, 152, 115)',
      secondary: 'rgb(86, 73, 68)',
      accent: 'rgb(143, 74, 0)',
      light: 'rgb(253, 219, 204)',
      background: 'url(\'assets/images/background/brown_background.png\')'
    },
    blue: {
      primary: '#63abd6',
      secondary: '#6c757d',
      accent: '#28a745',
      light: '#B3E0F2',
      background: 'url(\'assets/images/background/blue_background.png\')'
    },
    green: {
      primary: '#2ca239',
      secondary: '#689F38',
      accent: '#8BC34A',
      light: '#D4EDDA',
      background: 'url(\'assets/images/background/green_background.png\')'
    },
    red: {
      primary: '#9e0a14',
      secondary: '#E64A19',
      accent: '#FF9800',
      light: '#ff8b8b',
      background: 'url(\'assets/images/background/red_background.png\')'
    },
  };

  private currentTheme = 'default';

  setTheme(theme: string): void {
    if (this.themes[theme]) {
      this.currentTheme = theme;
      this.updateThemeVariables();
    }
  }


  getCurrentTheme(): string {
    return this.currentTheme;
  }

  private updateThemeVariables(): void {
    const theme = this.themes[this.currentTheme];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--light-color', theme.light);
    document.documentElement.style.setProperty('--landing-background', theme.background);
  }
}
