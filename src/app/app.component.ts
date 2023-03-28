import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIIS to NIIS';
}

/*
²☯🔁

"@angular/material/prebuilt-themes/indigo-pink.css",

@use '@angular/material' as mat;

@include mat.core();

$dark-green-theme: mat.define-dark-theme((
  color: (
    primary: mat.define-palette(mat.$light-green-palette),
    accent: mat.define-palette(mat.$light-green-palette),
  ),
  typography: mat.define-typography-config(),
  density: 0,
));

$light-green-theme: mat.define-light-theme((
  color: (
    primary: mat.define-palette(mat.$light-green-palette),
    accent: mat.define-palette(mat.$light-green-palette),
  ),
));

@include mat.core-theme($light-green-theme);
@include mat.button-theme($light-green-theme);

@media (prefers-color-scheme: dark) {
  @include mat.core-color($dark-green-theme);
  @include mat.button-color($dark-green-theme);
}

 */
