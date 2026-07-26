# AutomWave — Web empresarial (Next.js + TypeScript + Tailwind)

Web profesional lista para producción. App Router, Server Components por
defecto, Tailwind con design tokens, Framer Motion, formulario de contacto que
envía correos con **Resend**, Google Analytics 4 y SEO técnico completo.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS 3.4** · **Framer Motion 11**
- **Resend** (envío de correos) · **@next/third-parties** (GA4)

## Puesta en marcha (VS Code, Windows)

1. Extrae el ZIP donde quieras (p. ej. `C:\AgenciaWeb\AutomWave`).
   La carpeta `AutomWave/` es la raíz del proyecto.
2. Abre esa carpeta en VS Code (`File → Open Folder…`).
3. Crea el archivo de variables de entorno: copia `.env.example` a
   **`.env.local`** y rellena los valores (ver abajo).
4. En la terminal integrada:
   ```bash
   npm install
   npm run dev
   ```
   Abre http://localhost:3000
5. Producción local: `npm run build` && `npm start`.

## Variables de entorno (`.env.local`)

```
RESEND_API_KEY=re_TU_CLAVE_AQUI
EMAIL_FROM=AutomWave <onboarding@resend.dev>
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- **RESEND_API_KEY** — créala en https://resend.com (Settings → API Keys).
  ⚠️ Si tu clave anterior se filtró, **revócala y genera una nueva**.
- **EMAIL_FROM** — remitente del correo. Debe usar un **dominio verificado**
  en Resend. Mientras no verifiques `automwave.com`, deja `onboarding@resend.dev`
  (solo podrás enviarte correos a ti mismo). Al verificar el dominio, cámbialo a
  `AutomWave <contact@automwave.com>`.
- **NEXT_PUBLIC_GA_ID** — tu ID de GA4 (no es secreto). Sin esta variable, GA
  simplemente no se carga.

## Formulario de contacto

- Componente: `components/sections/ContactForm.tsx` (dentro de la sección CTA).
- Endpoint: `app/api/contact/route.ts` — valida los datos y envía el correo a
  `contact@automwave.com` con Resend, poniendo el email del visitante como
  `Reply-To`. La clave se lee de `process.env`, nunca está escrita en el código.

## Google Analytics + privacidad (EU)

GA4 se carga vía `@next/third-parties`. **Importante para cumplir RGPD:** en
producción deberías cargar GA solo tras el consentimiento del usuario (banner de
cookies + Consent Mode v2). Tal cual está, GA se activa si existe
`NEXT_PUBLIC_GA_ID`; envuelve su carga en tu lógica de consentimiento antes de
publicar para EU.

## Arquitectura

```
app/            layout · page · globals.css · sitemap · robots · opengraph-image · api/contact
components/
  ui/           Button · Badge · Eyebrow · Icon · SectionHeader · BrandMark
  layout/       Nav · Footer · Atmosphere
  sections/     hero/(Hero · WaveCanvas · FlowCard) · Benefits · Services · Process ·
                Results · Testimonials · Faq · CtaFinal · ContactForm
  animations/   Reveal (Framer Motion, respeta reduced-motion)
config/ constants/ data/ types/ lib/ utils/ hooks/ styles/ public/
```

## Antes de publicar

- Revisa `config/site.ts` (email, teléfono, WhatsApp, `url` del dominio real).
- Sustituye los testimonios de ejemplo en `data/content.ts` por reseñas reales.
- Añade `app/favicon.ico` (y opcional `app/icon.png`, `apple-icon.png`).
- Verifica el dominio en Resend y actualiza `EMAIL_FROM`.
- Añade el consentimiento de cookies antes de activar GA en producción.

## Nota honesta

No he podido ejecutar `npm install` / `next build` en mi entorno (sin acceso a
red), así que el código está revisado a mano pero no compilado aquí. Debería
compilar a la primera; si `strict` te marcase algún tipo, dímelo y lo ajusto.
