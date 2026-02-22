# Dinaaz Hair & Skin – Frontend UI

A responsive, pixel-focused React + Tailwind CSS implementation based on Figma design.
This project demonstrates modern UI development practices including responsive layout, reusable components, smooth navigation, and interactive consultation flow.

---

## Live Features

### Figma to Code

* Pixel-accurate layout implementation from Figma
* Consistent spacing, typography, and color usage
* Section-based component architecture

### Fully Responsive Design

* Mobile, tablet, and desktop optimized
* Flexible grid and flex layouts
* Adaptive typography and spacing
* No horizontal overflow

### Navigation & Quick Links

* Sticky TopBar navigation
* Smooth scrolling between sections
* Working Quick Links in both Header and Footer
* Section anchors:

  * Hero
  * Doctor
  * About
  * Services
  * Results
  * Consult

### Interactive Consultation Flow

* Reusable **Book a Consultation** CTA across sections
* Modal form with:

  * Name
  * Phone
  * Email
* Triggered from:

  * TopBar
  * Hero
  * Doctor section
  * Services
  * Consult section
  * Footer

### UI Components

* Reusable button pattern with SVG arrow
* Context-based modal state management
* Section-wise component structure
* Clean and maintainable code

### Visual Enhancements

* Gradient hero overlay
* Trust strip with slanted design
* Decorative ellipse elements
* Card-based layout for services and information

---

## Key Sections

* Hero (CTA + Trust Indicators)
* Doctor Profile
* About Clinic
* Services Overview
* Results / Proof Section
* Consult Form
* Footer with Quick Links

---

## Tech Stack

* React (Vite)
* TypeScript
* Tailwind CSS
* Context API (Modal State)
* SVG Assets

---

## Project Structure

```
src/
components/
TopBar
Hero
DoctorSection
AboutSection
ServicesSection
ResultsSection
ConsultSection
FooterSection
ConsultationModal
context/
ConsultationContext
assets/
icons/
```

---

## UX Considerations

* Smooth scroll navigation
* Clear call-to-action placement
* Consistent visual hierarchy
* Accessible button sizes and spacing
* Mobile-first responsiveness

---

## How to Run

```bash
npm install
npm run dev
```

---

## Highlights for Review

* Responsive Figma implementation
* Reusable components and clean structure
* Working quick-link navigation
* Centralized modal handling
* Consistent CTA experience across the page
* Production-ready layout foundation

---

## Future Improvements

* Lighthouse optimization (performance & accessibility)
* Form validation and API integration
* Active navigation state on scroll
* Image optimization & lazy loading

---

## Author

Kriti Dubey
Full Stack Developer
