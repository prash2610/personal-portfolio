
import {
  Component,
  HostListener,
  signal
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  // Navigation state
  isMenuOpen = signal(false);

  isScrolled = signal(false);

  scrollProgress = signal(0);

  // Navigation links
  navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'work' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  // Detect window scrolling
  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.isMenuOpen.set(false);

    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

    this.isScrolled.set(scrollTop > 40);

    this.scrollProgress.set(
      Math.min(100, Math.max(0, progress))
    );
  }

  // Toggle mobile menu
  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  // Close menu after navigation
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

}
